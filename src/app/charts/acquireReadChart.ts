import Chart from 'chart.js/auto';
import pattern from 'patternomaly';
import IBooks from '../../interfaces/IBooks';

const acquireReadChart = (
  years: string[],
  totalAcquiredPerYear: IBooks,
  totalReadPerYear: IBooks
) => {
  const acquiredReadElement: HTMLCanvasElement | null = document.querySelector(
    '.acquired-read canvas'
  );
  if (acquiredReadElement) {
    new Chart(acquiredReadElement, {
      type: 'bar',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Acquired',
            data: Object.values(totalAcquiredPerYear).map(
              (value) => value.length
            ),
            backgroundColor: pattern.generate(['#9ad0f0']),
          },
          {
            label: 'Read',
            data: Object.values(totalReadPerYear).map((value) => value.length),
            backgroundColor: pattern.generate(['#ffb1c1']),
          },
        ],
      },
    });
  }
};

export default acquireReadChart;
