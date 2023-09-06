import WOE from './(sets)/woe'
import fs from 'fs'
import { getSetInfoInit, getSetInfoMore } from '@/app/(service)/service'

const saveSet = (name,data) => {
  fs.writeFileSync('data/'+name+'.json',data)
}

const loadSet = (name) => {
  return JSON.parse(fs.readFileSync('data/'+name+'.json'))
}

const processCards = (cards) => {
  return cards.reduce((acc, item) => {
    const { name, image_uris: imageUris } = item;
    acc[name] = imageUris;
    return acc;
  }, {});
} 

export default async function CombatTricks() {
  const res = await getSetInfoInit('woe')
  if (res?.data){
    let res2 = {data:[]}
    if(res.has_more) {
      res2 = await getSetInfoMore(res.next_page)
    }
    let combined = {...processCards(res.data),...processCards(res2.data)}
    console.log(combined)
    combined = JSON.stringify(combined, null, 2); // The 'null, 2' arguments format the JSON with indentation
    saveSet('woe',combined)
  }





  return (
    <div className='m-12'>
    <h1 className="text-2xl font-semibold text-blue-500">TRICKS</h1>
    <WOE cards={loadSet('woe')}/>
    </div>
  )
}
