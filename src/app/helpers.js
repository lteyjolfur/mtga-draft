

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

export {
  initColors,
  saveSet,
  loadSet,
  processCards,
};