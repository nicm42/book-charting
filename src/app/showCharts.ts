import IBooks from '../interfaces/IBooks';
import ITypes from '../interfaces/ITypes';
import acquireReadChart from './charts/acquireReadChart';
import typeAcquiredChart from './charts/typeAcquiredChart';
import typeReadChart from './charts/typeReadChart';

const showCharts = (
  years: string[],
  types: string[],
  totalAcquiredPerYear: IBooks,
  totalReadPerYear: IBooks,
  typesAcquiredPerYear: ITypes,
  typesReadPerYear: ITypes
) => {
  acquireReadChart(years, totalAcquiredPerYear, totalReadPerYear);
  typeAcquiredChart(types, typesAcquiredPerYear);
  typeReadChart(types, typesReadPerYear);
};

export default showCharts;
