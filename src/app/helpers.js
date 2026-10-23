

const initColors = (tricks) => {
  const colors = Object.keys(tricks); 
  const dColors = {};
  colors.forEach((color) => {
    dColors[color] = false;
  });
  return dColors;
};

const saveSet = (name, data, fs) => {
  fs.writeFileSync('data/' + name + '.json', data);
};

const loadSet = (name, fs) => {
  return JSON.parse(fs.readFileSync('data/' + name + '.json'));
};


const processCards = (cards) => {
  return cards.reduce((acc, item) => {
    const { name, image_uris: imageUris } = item;
    acc[name] = imageUris;
    return acc;
  }, {});
}; 

const setColorPairs = (newDColors) => {
  const {w, u, b, r, g} = newDColors;
  const guilds = {
    azorius: w && u,
    orzhov: w && b,
    dimir: u && b,
    rakdos: b && r,
    gruul: r && g,
    selesnya: w && g,
    izzet: u && r,
    golgari: g && b,
    boros: w && r,
    simic: u && g,
  };
  return {
    ...newDColors,
    ...guilds,
  };
};

const getVisibleColors = (dColors) => {
  const filtered = Object.keys(dColors).filter((key) => (dColors[key] === true));
  return filtered.length === 0 ? Object.keys(dColors) : filtered;
};

export {
  initColors,
  setColorPairs,
  getVisibleColors,
  saveSet,
  loadSet,
  processCards,
};