import Chart from 'chart.js/auto';
import pattern from 'patternomaly';
import ITypes from '../../interfaces/ITypes';
import createNoDataText from '../utils/createNoDataText';
import createHeading from '../utils/createHeading';
import createCanvas from '../utils/createCanvas';

const typeChart = (
  types: string[],
  typesPerYear: ITypes,
  element: HTMLDivElement
) => {
  Object.keys(typesPerYear).forEach((year) => {
    createHeading(element, year);

    const categoryArray = Object.values(typesPerYear[year]);

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
        labels: types,
        datasets: [
          {
            data: Object.values(typesPerYear[year]),
            backgroundColor: [
              pattern.draw('square', '#36a2eb'),
              pattern.draw('diagonal', '#ff6384'),
            ],
          },
        ],
      },
    });
  });
};

export default typeChart;
