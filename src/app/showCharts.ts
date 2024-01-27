import Chart from 'chart.js/auto';

const showCharts = (
  years: string[],
  totalAcquiredPerYear: string[][][],
  totalReadPerYear: string[][][]
) => {
  const acquiredElement: HTMLCanvasElement | null =
    document.querySelector('.acquired');
  if (acquiredElement) {
    new Chart(acquiredElement, {
      type: 'bar',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Acquired',
            data: totalAcquiredPerYear.map((book) => book.length),
          },
          {
            label: 'Read',
            data: totalReadPerYear.map((book) => book.length),
          },
        ],
      },
    });
  }
};

export default showCharts;
