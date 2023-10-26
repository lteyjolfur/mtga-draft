const { getDraft } = require('@/app/(service)/service');

import Image from 'next/image';

const Color = ({children, cards = [], setCards}) => (
  <div className="text-center">
    <h3 className="text-xl font-semibold">{children}</h3>
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}} className="justify-content-center">
      {cards.map((card) => (
        <div key={card} className="m-6 ">
          <Image
            className="rounded-2xl"
            src={setCards[card]?.normal}
            alt={'image of ' + card}
            width="300"
            height="500"
          />
          <span key={card}>{card}</span>
        </div>
      ))}
    </div>
  </div>
);

const colors = ['b', 'w', 'u', 'r', 'g'];

const buildCards = (res) => {
  Object.keys(res.cards);
};

const Page = async () => {
  const cardsByColor = {};
  for (let color of colors) {
    const res = await getDraft('PremierDraft', 'WOE', color);
    //cardsByColor[color] =processRes(res)
  }

  return (
    <>
      alsa 4
      Cooped Up
      Hopeful Vigil
      alsa 5
      
    </>
    

  
  );
}; 

// eslint-disable-next-line max-len
// https://www.17lands.com/card_evaluation_metagame/data?expansion=WOE&format=PremierDraft&rarity=common&color=U&start_date=2023-09-05&end_date=2023-09-06

export default Page;
