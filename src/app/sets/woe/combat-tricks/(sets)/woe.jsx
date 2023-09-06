'use client'
import Color from '@/app/(shared-components)/color'
import { Fragment, useState } from 'react'

const tricks = {
  w:[
    'Archon\'s Glory',
    'Break the Spell',
    'Kellan\'s Lightblades',
    'Moment of Valor',
    'Stroke of Midnight'
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
    "Minecart Daredevil // Ride the Rails",
    'Monstrous Rage',
    'Stonesplitter Bolt',
    'Torch the Tower',
    "Two-Headed Hunter // Twice the Rage",
  ],
  g:[
    'Leaping Ambush',
    'Royal Treatment',
    'Titanic Growth',
  ],
  dimir:[
    'Obyra, Dreaming Duelist',
    "Threadbind Clique // Rip the Seams",
  ],
  golgari:["Gingerbread Hunter // Puny Snack"],
  izzet:["Frolicking Familiar // Blow Off Steam"],
}

const colors = Object.keys(tricks) 

const initColors = () => {
  const dColors = {}
  colors.forEach((color) => {
    dColors[color] = false
  })
  return dColors
}

export default function WOE({cards}) {
  const [dColors, setDColors] = useState(initColors())
  
  const handleCheckbox = (e) => {
    console.log(e.target)
    console.log(e.target.value)
    const color = e.target.value
    setDColors({
      ...dColors,
      [color]:!dColors[color]
    })
    
  }

  let filtered = Object.keys(dColors).filter((key)=>(dColors[key]=== true))
  if (filtered.length === 0){
    filtered = Object.keys(dColors)
  }
  return (
    <>
    {colors.map((key) => (
      <Fragment key={key}>
        <span className='text-3xl'>
        {key.length===1 ?(
          <i className={`ms ms-${key.toLowerCase()}`}/>
        ) :
        (
          <i className={`ms ms-guild-${key.toLowerCase()}`}/>
        )}
        </span>

       <input
        onClick={handleCheckbox}
        type="checkbox"
        id={key}
        name={key}
        value={key}/>
        {' '}
        </Fragment>
    ))}
     

     {filtered?.map((key) => (
      <Color key={key} cards={tricks[key]} setCards={cards}>{key.toUpperCase()}</Color>
    ))}
    </>
  )
}
