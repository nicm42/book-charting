import Chart from 'chart.js/auto';
import pattern from 'patternomaly';
import ITypes from '../../interfaces/ITypes';
import createNoDataText from '../utils/createNoDataText';
import createHeading from '../utils/createHeading';
import createCanvas from '../utils/createCanvas';

const categoryChart = (
  categories: string[],
  categoriesPerYear: ITypes,
  element: HTMLDivElement
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
            backgroundColor: [
              pattern.draw('plus', '#36a2eb'),
              pattern.draw('cross', '#ff6384'),
              pattern.draw('dash', '#ff9f40'),
              pattern.draw('cross-dash', '#ffcd56'),
              pattern.draw('dot', '#4bc0c0'),
              pattern.draw('dot-dash', '#9966ff'),
              pattern.draw('disc', '#c9cbcf'),
              pattern.draw('ring', '#36a2eb'),
              pattern.draw('line', '#ff6384'),
              pattern.draw('line-vertical', '#ff9f40'),
              pattern.draw('weave', '#ffcd56'),
              pattern.draw('zigzag', '#4bc0c0'),
              pattern.draw('zigzag-vertical', '#9966ff'),
              pattern.draw('diagonal', '#c9cbcf'),
              pattern.draw('diagonal-right-left', '#36a2eb'),
              pattern.draw('square', '#ff6384'),
              pattern.draw('box', '#ff9f40'),
              pattern.draw('triangle', '#ffcd56'),
              pattern.draw('triangle-inverted', '#4bc0c0'),
              pattern.draw('diamond', '#9966ff'),
              pattern.draw('diamond-box', '#c9cbcf'),
            ],
          },
        ],
      },
    });
  });
};

export default categoryChart;
