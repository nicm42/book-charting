import Chart from 'chart.js/auto';
import ITypes from '../../interfaces/ITypes';

const typeReadChart = (types: string[], typesReadPerYear: ITypes) => {
  const typeReadElement: HTMLDivElement | null =
    document.querySelector('.typeRead');

  if (typeReadElement) {
    Object.keys(typesReadPerYear).forEach((year) => {
      const heading = document.createElement('h2');
      heading.innerHTML = year;
      typeReadElement.appendChild(heading);

      const canvas = document.createElement('canvas');
      canvas.setAttribute('class', year);
      typeReadElement.appendChild(canvas);

      new Chart(canvas, {
        type: 'pie',
        data: {
          labels: types,
          datasets: [
            {
              label: 'Types Read',
              data: Object.values(typesReadPerYear[year]),
            },
          ],
        },
      });
    });
  }
};

export default typeReadChart;
