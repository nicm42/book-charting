import IBooks from '../interfaces/IBooks';
import ITypes from '../interfaces/ITypes';
import acquireReadChart from './charts/acquireReadChart';
import typeAcquiredChart from './charts/typeAcquiredChart';
import typeReadChart from './charts/typeReadChart';
import categoryAcquiredChart from './charts/categoryAcquiredChart';
import categoryReadChart from './charts/categoryReadChart';

const showCharts = (
  years: string[],
  types: string[],
  categories: string[],
  totalAcquiredPerYear: IBooks,
  totalReadPerYear: IBooks,
  typesAcquiredPerYear: ITypes,
  typesReadPerYear: ITypes,
  categoriesAcquiredPerYear: ITypes,
  categoriesReadPerYear: ITypes
) => {
  acquireReadChart(years, totalAcquiredPerYear, totalReadPerYear);
  typeAcquiredChart(types, typesAcquiredPerYear);
  typeReadChart(types, typesReadPerYear);
  categoryAcquiredChart(categories, categoriesAcquiredPerYear);
  categoryReadChart(categories, categoriesReadPerYear);
};

export default showCharts;
