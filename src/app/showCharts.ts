import IBooks from '../interfaces/IBooks';
import acquireReadChart from './charts/acquireReadChart';

const showCharts = (
  years: string[],
  totalAcquiredPerYear: IBooks,
  totalReadPerYear: IBooks
) => {
  acquireReadChart(years, totalAcquiredPerYear, totalReadPerYear);
};

export default showCharts;
