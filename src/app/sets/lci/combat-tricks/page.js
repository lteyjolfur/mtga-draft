import CombatTricks from '@/app/(shared-components)/combatTricks';

const tricks = {
  w: [
    'Acrobatic Leap',
    'Cosmium Blast',
    'Family Reunion',
    'Mischievous Pup',
    'Quicksand Whirlpool',
    'Spring-Loaded Sawblades // Bladewheel Chariot',
  ],
  u: [
    'Brackish Blunder',
    'Cogwork Wrestler',
    'Eaten by Piranhas',
    'Lodestone Needle // Guidestone Compass',
    "Relic's Roar",
  ],
  b: [
    'Fungal Fortitude',
    'Join the Dead',
  ],
  r: [
    'Abrade',
    "Ancestors' Aid",
    "Dreadmaw's Ire",
    "Idol of the Deep King // Sovereign's Macuahuitl",
    "Zoyowa's Justice",
  ],
  g: [
    'Disturbed Slumber',
    "Huatli's Final Strike",
    'Malamet Scythe',
    'Staggering Size',
  ],
  c: [
    'Runaway Boulder',
  ],
};



export default async function CombatTricksPage() {

  return (
    <CombatTricks curSet={'lci'} tricks={tricks}/>
  );
}
