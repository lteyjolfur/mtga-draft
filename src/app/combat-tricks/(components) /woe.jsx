import Image from 'next/image'

const Color = ({children,cards=[]}) => (
  <>
  <h3>{children}</h3>
  {cards.map((card)=>(
    <div key={card}>{card}</div>
  ))}
  </>
)

const tricks = {
  W:[
    'Archon\'s Glory',
    'Break the Spell',
    'Kellan\'s Lightblades',
    'Moment of Valor',
    'Stroke of Midnight'
  ],
  U:[
    'Misleading Motes',
    'Obyra\'s Attendants',
    'Water Wings',
  ],
  B:[
    'Candy Grapple',
    'Faerie Fencing',
    'Feed the Cauldron',
    'Not Dead After All',
    'Rat Out',
    'Shatter the Oath',
    'Sugar Rush',
  ],
  R:[
    'Flick a Coin',
    'Frantic Firebolt',
    'Gnawing Crescendo',
    'Kindled Heroism',
    'Minecart Daredevil',
    'Monstrous Rage',
    'Stonesplitter Bolt',
    'Torch the Tower',
    'Two-Headed Hunter',
  ],
  G:[
    'Leaping Ambush',
    'Royal Treatment',
    'Titanic Growth',
    'Dimir',
    
  ],
  orshov:['Devouring Sugarmaw'],
  dimir:[
    'Obyra, Dreaming Duelist',
    'Tear the Seam',
  ],
  golgari:['Gingerbread Hunter'],
  izzet:['Frolicking Familiar'],
}

export default function WOE() {
  
  
  return (
    <>
    {Object.keys(tricks).map((key) => (
      <Color key={key} cards={tricks[key]}>{key}</Color>
    ))}
    </>
  )
}
