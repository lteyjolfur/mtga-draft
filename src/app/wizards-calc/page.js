'use strict';
'use client';

import {useState, useEffect} from 'react';
import { PropTypes } from 'prop-types';


const Button = (props) => {
  return (
    <button {...props} className="bg-gray-400 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded">
      {props.children} 
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.any,
};

const ChangeButtons = ({onIncrease, onDecrease}) => {
  return (
    <div className="text-center">
       
      <div className="flex">
        <Button onClick={onIncrease}>
         + 
        </Button>
        <Button onClick={onDecrease}> 
        - 
        </Button>
      </div>
    </div>
  );
};

const Spell = ({dmg, onIncrease, onDecrease, amount = 0}) => {

  return (
    <>
      <h3 className="text-center">{dmg} dmg </h3>
      <p className="text-center">x {amount}</p>
      <ChangeButtons onIncrease={onIncrease} onDecrease={onDecrease}/>
    </>
  );
};

const Creature = ({name, onIncrease, onDecrease, amount = 0}) => {

  return (
    <>
      <h3 className="text-center">{name}</h3>
      <p className="text-center">x {amount}</p>
      <ChangeButtons onIncrease={onIncrease} onDecrease={onDecrease}/>
    </>
  );
};


const names = {
  soulScar: 'soul-scar',
  symmetry: 'symmetry',
  dreadhorde: 'dreadhorde',
  balmor: 'balmor',
};

const soulScar = {
  name: names.soulScar, 
  power: 1,
  amount: 0,
  addDmg: (spells) => (this.power + spells),
};

const symmetry = {
  name: names.symmetry,
  power: 0,
  amount: 0,
};

const dreadhorde = {
  name: names.dreadhorde,
  power: 1,
  amount: 0,
  addDmg: () => (this.power),
};
const balmor = {
  name: names.balmor,
  power: 1,
  max: 1,
  amount: 0,
  addDmg: (spells, creatures) => (this.power + spells * creatures),
};


const creaturesInfo = {
  [names.soulScar]: soulScar,
  [names.symmetry]: symmetry,
  [names.dreadhorde]: dreadhorde,
  [names.balmor]: balmor,
};

const Page = () => {
  const [damage, setDamage] = useState(0);
  const [spells, setSpells] = useState([0, 0, 0, 0]);
  const [creatures, setCreatures] = useState(creaturesInfo);

  useEffect(() => {
    // sum and multiply by index starting val 0
    const spellDamage = spells.reduce( (acc, cur, index) => (acc + cur * index), 0);
    setDamage(spellDamage);
  }, [spells, damage]);

  const handleChangeCreature =  (creature, amount) => {
    const newCreatures = {...creatures};
    newCreatures[creature].amount += amount;
    if (newCreatures[creature].amount < 0) {
      newCreatures[creature].amount = 0;
    }
    console.log(creature);
    if (newCreatures[creature].amount > 4) {
      newCreatures[creature].amount = 4;
    }
    if (creature === names.balmor && newCreatures[creature].amount > 1) {
      newCreatures[creature].amount = 1;
    }
    setCreatures(newCreatures);
  };
  
  const handleChangeSpell = (dmg, amount) => {
    const newSpells = [...spells];
    newSpells[dmg] += amount;
    if (newSpells[dmg] < 0) {
      newSpells[dmg] = 0;
    }
    setSpells(newSpells);
  };

  return (
    <>
      <h2 className="h2"> Creatures </h2>
      <div className="flex">
        {Object.keys(creatures).map((key) => (
          <div key={creatures[key].name}>
            <Creature 
              name={creatures[key].name}
              amount={creatures[key].amount}
              onIncrease={() => {handleChangeCreature(creatures[key].name, 1);}}
              onDecrease={() => {handleChangeCreature(creatures[key].name, -1);}}
            />
          </div>
        ))}
      </div>
      <h2>Spells</h2>
      <div className="flex">
        {spells.map((amount, index) => (
          <div key={index}>
            <Spell 
              dmg={index}
              amount={amount}
              onIncrease={() => {handleChangeSpell(index, +1);}}
              onDecrease={() => {handleChangeSpell(index, -1);}}/>
          </div>
        ))}
      </div>
      damage = {damage}
    </>
  );
};

export default Page;