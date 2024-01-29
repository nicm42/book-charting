// Get totals acquired and read

import IDataToSend from '../../interfaces/IDataToSend';
import IBooks from '../../interfaces/IBooks';

const findTotal = (
  data: IDataToSend[],
  years: string[],
  itemNumber: number
) => {
  let totalPerYear: IBooks = Object.fromEntries(
    years.map((year) => [year, []])
  );

  data.forEach((year) => {
    year.data.forEach((item, index) => {
      if (index !== 0 && item[itemNumber]) {
        totalPerYear[year.sheet].push(item[itemNumber]);
      }
    });
  });

  return totalPerYear;
};

export default findTotal;
