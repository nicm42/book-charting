import './style.css';
import Chart from 'chart.js/auto';
import IDataToSend from '../interfaces/IDataToSend';
import data from '../../data.json';

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
            label: 'Acquired by year',
            data: totalAcquiredPerYear.map((book) => book.length),
          },
          {
            label: 'Read by year',
            data: totalReadPerYear.map((book) => book.length),
          },
        ],
      },
    });
  }
};

const calculateNumbers = () => {
  const years: string[] = data.map((element) => element.sheet);
  const totalAcquiredPerYear: string[][][] = data.map((year) =>
    year.data.filter((item, index) => {
      if (index !== 0 && item[0]) {
        return item[0];
      }
    })
  );
  const totalReadPerYear: string[][][] = data.map((year) =>
    year.data.filter((item, index) => {
      if (index !== 0 && item[1]) {
        return item[1];
      }
    })
  );
  showCharts(years, totalAcquiredPerYear, totalReadPerYear);
};

const getData = async () => {
  /* const response = await fetch('/api');
  const data: IDataToSend = await response.json(); */
  console.log(data);
  calculateNumbers();
};

getData();
