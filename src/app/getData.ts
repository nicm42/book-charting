import calculateNumbers from './calculateNumbers';
import IDataToSend from '../interfaces/IDataToSend';
//import data from '../../data.json';

const getData = async () => {
  const loading: HTMLElement | null = document.querySelector('.loading');
  const error: HTMLParagraphElement | null = document.querySelector('.error');
  const chartHeadings: NodeListOf<HTMLHeadingElement> =
    document.querySelectorAll('.chart-heading');

  const response = await fetch('/api');
  if (response.ok) {
    const data: IDataToSend[] = await response.json();
    //console.log(data);

    if (loading) {
      loading.style.display = 'none';
    }

    if (chartHeadings) {
      chartHeadings.forEach(
        (chartHeading) => (chartHeading.style.display = 'block')
      );
    }

    calculateNumbers(data);
  } else {
    if (error) {
      error.style.display = 'block';
    }
  }
};

export default getData;
