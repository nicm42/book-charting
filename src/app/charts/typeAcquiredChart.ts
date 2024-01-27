import Chart from 'chart.js/auto';
import ITypes from '../../interfaces/ITypes';

const typeAcquiredChart = (types: string[], typesAcquiredPerYear: ITypes) => {
  const typeAcquiredElement: HTMLDivElement | null =
    document.querySelector('.typeAcquired');

  if (typeAcquiredElement) {
    Object.keys(typesAcquiredPerYear).forEach((year) => {
      const heading = document.createElement('h2');
      heading.innerHTML = year;
      typeAcquiredElement.appendChild(heading);

      const canvas = document.createElement('canvas');
      canvas.setAttribute('class', year);
      typeAcquiredElement.appendChild(canvas);

      new Chart(canvas, {
        type: 'pie',
        data: {
          labels: types,
          datasets: [
            {
              label: 'Types Acquired',
              data: Object.values(typesAcquiredPerYear[year]),
            },
          ],
        },
      });
    });
  }
};

export default typeAcquiredChart;
