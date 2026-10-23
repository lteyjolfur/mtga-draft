'use client';
'use strict';

import Color from '@/app/(shared-components)/color';
import { initColors, setColorPairs, getVisibleColors } from '@/app/helpers'; 
import { Fragment, useState } from 'react';





export default function WOE({cards, tricks}) {
  const [dColors, setDColors] = useState(initColors(tricks));
  const [colors] = useState(Object.keys(tricks));
  
  const handleCheckbox = (e) => {
    const color = e.target.value;
    let newDColors = {
      ...dColors,
      [color]:!dColors[color],
    };
    newDColors = setColorPairs(newDColors);
    setDColors(newDColors);
    
  };

  const filtered = getVisibleColors(dColors);
  return (
    <>
      {colors.map((key) => (
        <Fragment key={key}>
          <span className={`text-3xl ${dColors[key] && 'text-yellow-300'}`}>
            {key.length === 1 ? (
              <i className={`ms ms-${key.toLowerCase()}`}/>
            ) :
              (
                <i className={`ms ms-guild-${key.toLowerCase()}`}/>
              )}
          </span>

          {key.length === 1 && key !== 'c' ? <input
            onClick={handleCheckbox}
            type="checkbox"
            className="cursor-pointer"
            id={key}
            checked={dColors[key]}
            name={key}
            value={key}/> :
            <span className="mr-3"/>
          }
          {' '}
          {key === 'g' && <span className="mr-10"/>}
        </Fragment>
      ))}
     

      {filtered?.map((key) => (
        <Color key={key} cards={tricks[key]} setCards={cards}>{key.toUpperCase()}</Color>
      ))}
    </>
  );
}
