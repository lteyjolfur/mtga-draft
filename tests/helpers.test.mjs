import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  initColors,
  setColorPairs,
  getVisibleColors,
  saveSet,
  loadSet,
  processCards,
} from '../src/app/helpers.js';

test('initColors sets every trick color to false', () => {
  const tricks = { w: ['A'], u: ['B'], dimir: ['C'] };
  assert.deepEqual(initColors(tricks), { w: false, u: false, dimir: false });
});

test('setColorPairs enables a guild only when both of its colors are on', () => {
  const result = setColorPairs({ w: true, u: true, b: false, r: false, g: false });
  assert.equal(result.azorius, true);
  assert.equal(result.dimir, false);
  assert.equal(result.boros, false);
  assert.equal(result.w, true);
});

test('setColorPairs turns a guild off again when one color is unchecked', () => {
  const on = setColorPairs({ w: false, u: false, b: true, r: false, g: true });
  assert.equal(on.golgari, true);
  const off = setColorPairs({ ...on, g: false });
  assert.equal(off.golgari, false);
});

test('getVisibleColors returns only selected colors', () => {
  assert.deepEqual(getVisibleColors({ w: true, u: false, b: true }), ['w', 'b']);
});

test('getVisibleColors falls back to all colors when none are selected', () => {
  assert.deepEqual(getVisibleColors({ w: false, u: false }), ['w', 'u']);
});

test('processCards maps card names to their image_uris', () => {
  const cards = [
    { name: 'Abrade', image_uris: { normal: 'a.jpg' }, set: 'lci' },
    { name: 'Water Wings', image_uris: { normal: 'b.jpg' } },
  ];
  assert.deepEqual(processCards(cards), {
    Abrade: { normal: 'a.jpg' },
    'Water Wings': { normal: 'b.jpg' },
  });
});

test('saveSet and loadSet round-trip through the data/ folder', () => {
  const files = {};
  const fakeFs = {
    writeFileSync: (path, data) => { files[path] = data; },
    readFileSync: (path) => files[path],
  };
  saveSet('xyz', JSON.stringify({ Card: { normal: 'n.jpg' } }), fakeFs);
  assert.deepEqual(Object.keys(files), ['data/xyz.json']);
  assert.deepEqual(loadSet('xyz', fakeFs), { Card: { normal: 'n.jpg' } });
});

for (const set of ['woe', 'lci']) {
  test(`data/${set}.json maps card names to image URLs`, () => {
    const url = new URL(`../data/${set}.json`, import.meta.url);
    const cards = JSON.parse(readFileSync(url, 'utf8'));
    const names = Object.keys(cards);
    assert.ok(names.length > 100, `expected many cards, got ${names.length}`);
    for (const name of names) {
      assert.match(cards[name].normal, /^https:\/\/cards\.scryfall\.io\//, name);
    }
  });
}
