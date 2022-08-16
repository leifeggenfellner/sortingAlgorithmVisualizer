import { generateArray } from './funcs.js';
import Sorter from './Sorter.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const canvasWidth = (canvas.width = canvas.offsetWidth);
const canvasHeight = (canvas.height = canvas.offsetHeight);

const slider = document.getElementById('slider');
const output = document.getElementsByTagName('output')[0];

const generateNewArrayButton = document.getElementById('generateNewArray');
const startSortingButton = document.getElementById('startSorting');
const selectedAlgorithm = document.getElementById('algorithms-choice');

const arr = generateArray(slider.value, canvasHeight);
const rectWidth = Math.floor(canvasWidth / slider.value);

const sorter = new Sorter(arr, ctx, canvasWidth, canvasHeight, rectWidth);
sorter.displayArray();

let prevSortMethod = selectedAlgorithm.value || 'Bubble Sort';

generateNewArrayButton.onclick = () => {
  if (!sorter.swapped) {
    sorter.swapped = true;
  } else {
    sorter.swapped = false;
  }

  sorter.generateArray(slider.value);
  sorter.displayArray();
};

startSortingButton.onclick = () => {
  if (!sorter.swapped && selectedAlgorithm.value !== prevSortMethod) {
    sorter.swapped = true;
  }

  switch (selectedAlgorithm.value || 'Bubble Sort') {
    case 'Bubble Sort':
      sorter.bubbleSortLoop();
      break;
    case 'Console Log':
      console.log('Case 1');
      break;
  }
};

slider.oninput = () => {
  if (sorter.swapped) {
    sorter.swapped = false;
  }

  output.value = slider.value;
  sorter.generateArray(slider.value);
  sorter.displayArray();
};
