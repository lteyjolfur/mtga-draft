import CombatTricks from '@/app/(shared-components)/combatTricks';

const tricks = {
  w:[
    'Archon\'s Glory',
    'Break the Spell',
    'Kellan\'s Lightblades',
    'Moment of Valor',
    'Stroke of Midnight',
  ],
  u:[
    'Misleading Motes',
    "Obyra's Attendants // Desperate Parry",
    'Water Wings',
  ],
  b:[
    'Candy Grapple',
    'Faerie Fencing',
    'Feed the Cauldron',
    'Not Dead After All',
    'Rat Out',
    'Shatter the Oath',
    'Sugar Rush',
  ],
  r:[
    'Flick a Coin',
    'Frantic Firebolt',
    'Gnawing Crescendo',
    'Kindled Heroism',
    'Minecart Daredevil // Ride the Rails',
    'Monstrous Rage',
    'Stonesplitter Bolt',
    'Torch the Tower',
    'Two-Headed Hunter // Twice the Rage',
  ],
  g:[
    'Leaping Ambush',
    'Royal Treatment',
    'Titanic Growth',
  ],
  dimir:[
    'Obyra, Dreaming Duelist',
    'Threadbind Clique // Rip the Seams',
  ],
  golgari:['Gingerbread Hunter // Puny Snack'],
  izzet:['Frolicking Familiar // Blow Off Steam'],
};


export default async function CombatTricksPage() {

  return (
    <CombatTricks curSet={'woe'} tricks={tricks}/>
  );
}
