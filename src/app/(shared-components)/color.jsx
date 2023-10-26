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
            height="400"
          />
          <span key={card}>{card}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Color;