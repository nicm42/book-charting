const createHeading = (element: HTMLDivElement, year: string) => {
  const heading = document.createElement('h3');
  heading.innerHTML = year;
  element.appendChild(heading);
};

export default createHeading;
