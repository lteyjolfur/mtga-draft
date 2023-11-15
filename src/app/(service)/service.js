import fs from 'fs';

const getSetInfoInit = async (name) => {

  const filePath = `data/${name}.json`;
  let res;
  if (fs.existsSync(filePath)) {
    console.log('File exists. do nothing');
    return undefined;
  } else {
    res = await fetch('https://api.scryfall.com/cards/search?q=set%3A' + name);
  } 
   
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  
  }

  return res.json();
  
};

const  getSetInfoMore = async (path) => {

  const res = await fetch(path);

  return res.json();

};

const getDraft = async (format, set, color) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it's zero-based
  const day = String(today.getDate()).padStart(2, '0');
  const startDate = month > 1 ? `${year}-${month - 1}-${day}` : `${year - 1}-${12}-${day}`;
  // eslint-disable-next-line max-len
  const path = `https://www.17lands.com/card_evaluation_metagame/data?expansion=${set.toUpperCase()}&color=${color}&format=${format}&rarity=common&start_date=${startDate}&end_date=${year}-${month}-${day}`;
  const res = await fetch(path);

  return res.json();
};


export {
  getSetInfoInit,
  getSetInfoMore,
  getDraft,
};