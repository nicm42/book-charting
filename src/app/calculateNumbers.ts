import showCharts from './showCharts';
import IDataToSend from '../interfaces/IDataToSend';
import IBooks from '../interfaces/IBooks';

const calculateNumbers = (data: IDataToSend[]) => {
  const years: string[] = data.map((element) => element.sheet);

  let totalAcquiredPerYear: IBooks = Object.fromEntries(
    years.map((year) => [year, []])
  );

  data.forEach((year) => {
    year.data.forEach((item, index) => {
      if (index !== 0 && item[0]) {
        totalAcquiredPerYear[year.sheet].push(item[0]);
      }
    });
  });

  let totalReadPerYear: IBooks = Object.fromEntries(
    years.map((year) => [year, []])
  );

  data.forEach((year) => {
    year.data.forEach((item, index) => {
      if (index !== 0 && item[1]) {
        totalReadPerYear[year.sheet].push(item[1]);
      }
    });
  });

  showCharts(years, totalAcquiredPerYear, totalReadPerYear);
};

export default calculateNumbers;
