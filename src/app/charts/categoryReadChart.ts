import Chart from 'chart.js/auto';
import ITypes from '../../interfaces/ITypes';

const categoryReadChart = (
  categories: string[],
  categoriesReadPerYear: ITypes
) => {
  const categoriesReadElement: HTMLDivElement | null =
    document.querySelector('.categoriesRead');

  if (categoriesReadElement) {
    Object.keys(categoriesReadPerYear).forEach((year) => {
      const heading = document.createElement('h2');
      heading.innerHTML = year;
      categoriesReadElement.appendChild(heading);

      const canvas = document.createElement('canvas');
      canvas.setAttribute('class', year);
      categoriesReadElement.appendChild(canvas);

      new Chart(canvas, {
        type: 'pie',
        data: {
          labels: categories,
          datasets: [
            {
              label: 'Categories Read',
              data: Object.values(categoriesReadPerYear[year]),
            },
          ],
        },
      });
    });
  }
};

export default categoryReadChart;
