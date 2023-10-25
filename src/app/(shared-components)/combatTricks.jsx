import WOE from '../sets/woe/combat-tricks/(sets)/woe';
import { getSetInfoInit, getSetInfoMore } from '@/app/(service)/service';
import { saveSet, loadSet, processCards } from '@/app/helpers';
import fs from 'fs';

export default async function CombatTricks({curSet, tricks}) {
  const res = await getSetInfoInit(curSet);
  if (res?.data) {
    let res2 = {data:[]};
    if (res.has_more) {
      res2 = await getSetInfoMore(res.next_page);
    }
    let combined = {...processCards(res.data), ...processCards(res2.data)};
    combined = JSON.stringify(combined, null, 2); // The 'null, 2' arguments format the JSON with indentation
    saveSet(curSet, combined, fs);
  }
  return (
    <div className="m-12">
      <h1 className="text-2xl font-semibold text-blue-500"> TRICKS </h1>
      <WOE cards={loadSet(curSet, fs)} tricks={tricks}/>
    </div>
  );
}
