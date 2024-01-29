import Chart from 'chart.js/auto';
import ITypes from '../../interfaces/ITypes';

const categoryAcquiredChart = (
  categories: string[],
  categoriesPerYear: ITypes,
  element: HTMLDivElement,
  label: string
) => {
  Object.keys(categoriesPerYear).forEach((year) => {
    const heading = document.createElement('h3');
    heading.innerHTML = year;
    element.appendChild(heading);

    const canvas = document.createElement('canvas');
    canvas.setAttribute('class', year);
    element.appendChild(canvas);

    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: categories,
        datasets: [
          {
            label: label,
            data: Object.values(categoriesPerYear[year]),
          },
        ],
      },
    });
  });
};

export default categoryAcquiredChart;
