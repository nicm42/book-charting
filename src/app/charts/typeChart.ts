import Chart from 'chart.js/auto';
import ITypes from '../../interfaces/ITypes';
import createHeading from '../utils/createHeading';
import createCanvas from '../utils/createCanvas';

const typeChart = (
  types: string[],
  typesPerYear: ITypes,
  element: HTMLDivElement,
  label: string
) => {
  Object.keys(typesPerYear).forEach((year) => {
    createHeading(element, year);
    const canvas = createCanvas(element, year);

    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: types,
        datasets: [
          {
            label: label,
            data: Object.values(typesPerYear[year]),
          },
        ],
      },
    });
  });
};

export default typeChart;
