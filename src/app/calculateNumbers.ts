import showCharts from './showCharts';
import IDataToSend from '../interfaces/IDataToSend';

const calculateNumbers = (data: IDataToSend[]) => {
  const years: string[] = data.map((element) => element.sheet);
  const totalAcquiredPerYear: string[][][] = data.map((year) =>
    year.data.filter((item, index) => {
      if (index !== 0 && item[0]) {
        return item[0];
      }
    })
  );
  const totalReadPerYear: string[][][] = data.map((year) =>
    year.data.filter((item, index) => {
      if (index !== 0 && item[1]) {
        return item[1];
      }
    })
  );
  console.log(totalAcquiredPerYear);
  showCharts(years, totalAcquiredPerYear, totalReadPerYear);
};

export default calculateNumbers;
