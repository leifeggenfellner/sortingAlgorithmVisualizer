import { generateArray, drawArray, bubbleSort } from './functions.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 2560;
const canvasHeight = 1200;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const slider = document.getElementById('slider');
const output = document.getElementsByTagName('output')[0];

const startSortingButton = document.getElementById('startSorting');
const selectedAlgorithm = document.getElementById('algorithmSelect');

let values = generateArray(slider.value, canvasHeight);
drawArray(values, ctx, canvasWidth, canvasHeight);

startSortingButton.onclick = () => {
  switch (parseInt(selectedAlgorithm.value)) {
    case 0:
      bubbleSort(values, ctx, canvasWidth, canvasHeight);
      break;
    case 1:
      console.log('Case 1');
      break;
  }
};

slider.oninput = () => {
  output.value = slider.value;
  values = generateArray(slider.value, canvasHeight);
  drawArray(values, ctx, canvasWidth, canvasHeight);
};
