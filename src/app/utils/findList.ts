// Get lists of types and categories

import IDataToSend from '../../interfaces/IDataToSend';

const findList = (data: IDataToSend[], itemNumber: number) => {
  let listArr: string[] = [];

  data.forEach((year) => {
    year.data.forEach((item, index) => {
      if (index !== 0 && item[itemNumber]) {
        listArr.push(item[itemNumber]);
      }
    });
  });

  const listSet: Set<string> = new Set(listArr);
  const list: string[] = Array.from(listSet);
  return list;
};

export default findList;
