const createCanvas = (element: HTMLDivElement, year: string) => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('class', year);
  element.appendChild(canvas);
  return canvas;
};

export default createCanvas;
