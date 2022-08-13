import Sorter from './Sorter.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 1920;
const canvasHeight = 1000;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const slider = document.getElementById('slider');
const output = document.getElementsByTagName('output')[0];

const generateNewArrayButton = document.getElementById('generateNewArray');
const startSortingButton = document.getElementById('startSorting');
const selectedAlgorithm = document.getElementById('algorithmSelect');

const sorter = new Sorter(ctx, canvasWidth, canvasHeight);
sorter.generateArray(slider.value);
sorter.draw();

generateNewArrayButton.onclick = () => {
  sorter.generateArray(slider.value);
  sorter.draw();
};

startSortingButton.onclick = () => {
  switch (parseInt(selectedAlgorithm.value)) {
    case 0:
      //   sorter.bubbleSort(ctx, canvasWidth, canvasHeight);
      sorter.bubbleSort();
      break;
    case 1:
      console.log('Case 1');
      break;
  }
};

slider.oninput = () => {
  output.value = slider.value;
  sorter.generateArray(slider.value);
  sorter.draw();
};
