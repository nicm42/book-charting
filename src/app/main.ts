import './style.css';
import IDataToSend from '../interfaces/IDataToSend';
//import data from '../../data.json';

const getData = async () => {
  const response = await fetch('/api');
  const data: IDataToSend = await response.json();
  console.log(data);
};

getData();
