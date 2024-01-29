const createNoDataText = (element: HTMLDivElement) => {
  const text = document.createElement('p');
  text.innerHTML = 'No data available';
  element.appendChild(text);
};

export default createNoDataText;
