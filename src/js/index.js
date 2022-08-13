import SortingArray from './SortingArray.js';
import BubbleSort from './BubbleSort.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 2560;
const canvasHeight = 1000;

console.log(canvasWidth, canvasHeight);

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const slider = document.getElementById('slider');

const generateArrayButton = document.getElementById('generateArray');

const startSortingButton = document.getElementById('startSorting');

const selectedAlgorithm = document.getElementById('algorithmSelect');

const arrayObject = new SortingArray();
arrayObject.generateArray(slider.value);

generateArrayButton.onclick = () => {
    arrayObject.generateArray(slider.value);
};

startSortingButton.onclick = () => {
    switch (parseInt(selectedAlgorithm.value)) {
        case 0:
            const bubbleSort = new BubbleSort();
            bubbleSort.sort(arrayObject.arr, ctx, canvasWidth, canvasHeight);
            break;
    }
};
