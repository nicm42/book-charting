import Chart from 'chart.js/auto';
import IBooks from '../../interfaces/IBooks';

const acquireReadChart = (
  years: string[],
  totalAcquiredPerYear: IBooks,
  totalReadPerYear: IBooks
) => {
  const acquiredReadElement: HTMLCanvasElement | null =
    document.querySelector('.acquired-read');
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
          },
          {
            label: 'Read',
            data: Object.values(totalReadPerYear).map((value) => value.length),
          },
        ],
      },
    });
  }
};

export default acquireReadChart;
