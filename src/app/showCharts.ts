import IBooks from '../interfaces/IBooks';
import ITypes from '../interfaces/ITypes';
import acquireReadChart from './charts/acquireReadChart';
import typeChart from './charts/typeChart';
import categoryChart from './charts/categoryChart';

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

  // Types acquired per year
  const typeAcquiredElement: HTMLDivElement | null =
    document.querySelector('.typeAcquired');
  if (typeAcquiredElement) {
    typeChart(
      types,
      typesAcquiredPerYear,
      typeAcquiredElement,
      'Types Acquired'
    );
  }

  // Types read per year
  const typeReadElement: HTMLDivElement | null =
    document.querySelector('.typeRead');
  if (typeReadElement) {
    typeChart(types, typesReadPerYear, typeReadElement, 'Types Read');
  }

  // Categories acquired per year
  const categoriesAcquiredElement: HTMLDivElement | null =
    document.querySelector('.categoriesAcquired');
  if (categoriesAcquiredElement) {
    categoryChart(
      categories,
      categoriesAcquiredPerYear,
      categoriesAcquiredElement,
      'Categories Acquired'
    );
  }

  // Categories read per year
  const categoriesReadElement: HTMLDivElement | null =
    document.querySelector('.categoriesRead');
  if (categoriesReadElement) {
    categoryChart(
      categories,
      categoriesReadPerYear,
      categoriesReadElement,
      'Categories Read'
    );
  }
};

export default showCharts;
