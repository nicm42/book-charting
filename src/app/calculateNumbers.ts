import showCharts from './showCharts';
import IDataToSend from '../interfaces/IDataToSend';
import findList from './utils/findList';
import findTotal from './utils/findTotal';
import findTotalList from './utils/findTotalList';

const calculateNumbers = (data: IDataToSend[]) => {
  // Find the list of years
  const years: string[] = data.map((element) => element.sheet);

  // Find the list of types
  const types = findList(data, 2);

  // Find the list of categories
  const categories = findList(data, 3);

  // Calculate the total acquired per year
  const totalAcquiredPerYear = findTotal(data, years, 0);

  // Calculate the total read per year
  const totalReadPerYear = findTotal(data, years, 1);

  // Calculate the total acquired per type per year
  const typesAcquiredPerYear = findTotalList(data, years, 0, 2);

  // Calculate the total read per type per year
  const typesReadPerYear = findTotalList(data, years, 1, 2);

  // Calculate the total acquired per category per year
  const categoriesAcquiredPerYear = findTotalList(data, years, 0, 3);

  // Calculate the total read per category per year
  const categoriesReadPerYear = findTotalList(data, years, 1, 3);

  showCharts(
    years,
    types,
    categories,
    totalAcquiredPerYear,
    totalReadPerYear,
    typesAcquiredPerYear,
    typesReadPerYear,
    categoriesAcquiredPerYear,
    categoriesReadPerYear
  );
};

export default calculateNumbers;
