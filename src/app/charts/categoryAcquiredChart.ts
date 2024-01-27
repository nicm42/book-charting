import Chart from 'chart.js/auto';
import ITypes from '../../interfaces/ITypes';

const categoryAcquiredChart = (
  categories: string[],
  categoriesAcquiredPerYear: ITypes
) => {
  const categoriesAcquiredElement: HTMLDivElement | null =
    document.querySelector('.categoriesAcquired');

  if (categoriesAcquiredElement) {
    Object.keys(categoriesAcquiredPerYear).forEach((year) => {
      const heading = document.createElement('h2');
      heading.innerHTML = year;
      categoriesAcquiredElement.appendChild(heading);

      const canvas = document.createElement('canvas');
      canvas.setAttribute('class', year);
      categoriesAcquiredElement.appendChild(canvas);

      new Chart(canvas, {
        type: 'pie',
        data: {
          labels: categories,
          datasets: [
            {
              label: 'Categories Acquired',
              data: Object.values(categoriesAcquiredPerYear[year]),
            },
          ],
        },
      });
    });
  }
};

export default categoryAcquiredChart;
