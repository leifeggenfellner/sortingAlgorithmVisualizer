/**
 *
 *
 * @export
 * @class Sorter
 */

export default class Sorter {
  #arr;
  #ctx;
  #canvasWidth;
  #canvasHeight;
  #rectWidth;
  swapped;
  #intervalID;

  constructor(arr, ctx, canvasWidth, canvasHeight, rectWidth) {
    this.#arr = arr;
    this.#ctx = ctx;
    this.#canvasWidth = canvasWidth;
    this.#canvasHeight = canvasHeight;
    this.#rectWidth = rectWidth;
    this.swapped = true;
    this.#intervalID = 0;
  }

  displayArray = () => {
    this.#rectWidth = this.#canvasWidth / this.#arr.length;

    this.#ctx.clearRect(0, 0, this.#canvasWidth, this.#canvasHeight);

    this.#ctx.fillStyle = '#B48EAD';
    this.#ctx.strokeStyle = '#2E3440';
    this.#ctx.lineWidth = this.#arr.length >= 65 ? 1 : 2;

    this.#ctx.beginPath();
    for (let i = 0; i < this.#arr.length; i++) {
      this.#ctx.rect(
        i * this.#rectWidth,
        this.#canvasHeight - this.#arr[i],
        this.#rectWidth,
        this.#arr[i]
      );
      this.#ctx.closePath();
    }

    this.#ctx.fill();
    this.#ctx.stroke();
  };

  #sortArray = () => {
    this.swapped = false;

    for (let i = 1; i < this.#arr.length; i++) {
      if (this.#arr[i - 1] > this.#arr[i]) {
        [this.#arr[i - 1], this.#arr[i]] = [this.#arr[i], this.#arr[i - 1]];
        this.swapped = true;
      }
    }
  };

  #bubbleSort = () => {
    this.#sortArray();
    this.displayArray();
  };

  #sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  bubbleSortLoop = async () => {
    while (this.swapped) {
      this.#bubbleSort();
      await this.#sleep(100);
    }

    this.swapped === true
      ? (this.#intervalID = setInterval(this.#bubbleSort, 100))
      : clearInterval(this.#intervalID);
  };

  generateArray = (length) => {
    this.#arr.length = 0;

    for (let i = 0; i < length; i++) {
      this.#arr.push(Math.round(Math.random() * (this.#canvasHeight - 20) + 5));
    }
  };
}
