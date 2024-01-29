// Get totals acquired and read by type and category

import IDataToSend from '../../interfaces/IDataToSend';
import ITypes from '../../interfaces/ITypes';
import findList from './findList';

const findTotalList = (
  data: IDataToSend[],
  years: string[],
  acquiredRead: number,
  itemNumber: number
) => {
  const list = findList(data, itemNumber);

  let listPerYear: ITypes = Object.fromEntries(
    years.map((year) => [
      year,
      Object.fromEntries(list.map((item) => [item, 0])),
    ])
  );

  data.forEach((year) => {
    year.data.forEach((item, index) => {
      if (index !== 0 && item[acquiredRead]) {
        for (const item of list) {
          if (item === item[itemNumber]) {
            listPerYear[year.sheet][item] += 1;
          }
        }
      }
    });
  });

  return listPerYear;
};

export default findTotalList;
