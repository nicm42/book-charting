import showCharts from './showCharts';
import IDataToSend from '../interfaces/IDataToSend';
import IBooks from '../interfaces/IBooks';
import ITypes from '../interfaces/ITypes';

const calculateNumbers = (data: IDataToSend[]) => {
  // Find the list of years
  const years: string[] = data.map((element) => element.sheet);

  // Find the list of types
  let typesArr: string[] = [];
  data.forEach((year) => {
    year.data.forEach((item, index) => {
      if (index !== 0) {
        typesArr.push(item[2]);
      }
    });
  });
  const typesSet: Set<string> = new Set(typesArr);
  const types: string[] = Array.from(typesSet);

  // Find the list of categories
  let categoryArr: string[] = [];
  data.forEach((year) => {
    year.data.forEach((item, index) => {
      if (index !== 0) {
        categoryArr.push(item[3]);
      }
    });
  });
  const categoriesSet: Set<string> = new Set(categoryArr);
  const categories: string[] = Array.from(categoriesSet);

  // Calculate the total acquired per year
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

  // Calculate the total read per year
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

  // Calculate the total acquired per type per year
  let typesAcquiredPerYear: ITypes = Object.fromEntries(
    years.map((year) => [
      year,
      Object.fromEntries(types.map((type) => [type, 0])),
    ])
  );

  data.forEach((year) => {
    year.data.forEach((item, index) => {
      if (index !== 0 && item[0]) {
        for (const type of types) {
          if (type === item[2]) {
            typesAcquiredPerYear[year.sheet][type] += 1;
          }
        }
      }
    });
  });

  // Calculate the total read per type per year
  let typesReadPerYear: ITypes = Object.fromEntries(
    years.map((year) => [
      year,
      Object.fromEntries(types.map((type) => [type, 0])),
    ])
  );

  data.forEach((year) => {
    year.data.forEach((item, index) => {
      if (index !== 0 && item[1]) {
        for (const type of types) {
          if (type === item[2]) {
            typesReadPerYear[year.sheet][type] += 1;
          }
        }
      }
    });
  });

  // Calculate the total acquired per category per year
  let categoriesAcquiredPerYear: ITypes = Object.fromEntries(
    years.map((year) => [
      year,
      Object.fromEntries(categories.map((category) => [category, 0])),
    ])
  );

  data.forEach((year) => {
    year.data.forEach((item, index) => {
      if (index !== 0 && item[0]) {
        for (const category of categories) {
          if (category === item[3]) {
            categoriesAcquiredPerYear[year.sheet][category] += 1;
          }
        }
      }
    });
  });

  // Calculate the total read per category per year
  let categoriesReadPerYear: ITypes = Object.fromEntries(
    years.map((year) => [
      year,
      Object.fromEntries(categories.map((category) => [category, 0])),
    ])
  );

  data.forEach((year) => {
    year.data.forEach((item, index) => {
      if (index !== 0 && item[1]) {
        for (const category of categories) {
          if (category === item[3]) {
            categoriesReadPerYear[year.sheet][category] += 1;
          }
        }
      }
    });
  });

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
