import Chart from 'chart.js/auto';
import ITypes from '../../interfaces/ITypes';
import createNoDataText from '../utils/createNoDataText';
import createHeading from '../utils/createHeading';
import createCanvas from '../utils/createCanvas';

const categoryChart = (
  categories: string[],
  categoriesPerYear: ITypes,
  element: HTMLDivElement,
  label: string
) => {
  Object.keys(categoriesPerYear).forEach((year) => {
    createHeading(element, year);

    const categoryArray = Object.values(categoriesPerYear[year]);

    const categorySum = categoryArray.reduce(
      (total, current) => total + current,
      0
    );

    if (categorySum === 0) {
      createNoDataText(element);
      return;
    }

    const canvas = createCanvas(element, year);

    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: categories,
        datasets: [
          {
            data: categoryArray,
          },
        ],
      },
    });
  });
};

export default categoryChart;
