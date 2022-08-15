export default class Sorter {
  #arr;
  #ctx;
  #canvasWidth;
  #canvasHeight;
  #rectWidth;
  #swapped;
  #intervalID;

  constructor(arr, ctx, canvasWidth, canvasHeight, rectWidth) {
    this.#arr = arr;
    this.#ctx = ctx;
    this.#canvasWidth = canvasWidth;
    this.#canvasHeight = canvasHeight;
    this.#rectWidth = rectWidth;
    this.#swapped = true;
    this.#intervalID;
  }

  #displayArray = () => {
    this.#ctx.lineWidth = 1;

    this.#ctx.clearRect(0, 0, this.#canvasWidth, this.#canvasHeight);
    this.#ctx.beginPath();
    for (let i = 0; i < this.#arr.length; i++) {
      this.#ctx.moveTo(i * this.#rectWidth + 1, this.#canvasHeight);
      this.#ctx.lineTo(
        i * this.#rectWidth + 1,
        this.#canvasHeight - this.#arr[i]
      );
      this.#ctx.closePath();
    }

    this.#ctx.stroke();
  };

  #sortArray = () => {
    this.#swapped = false;

    for (let i = 1; i < this.#arr.length; i++) {
      if (this.#arr[i - 1] > this.#arr[i]) {
        [this.#arr[i - 1], this.#arr[i]] = [this.#arr[i], this.#arr[i - 1]];
        this.#swapped = true;
      }
    }
  };

  #bubbleSort = () => {
    this.#sortArray();
    this.#displayArray();
  };

  bubbleSortLoop = () => {
    this.swapped === true
      ? (this.#intervalID = setInterval(this.#bubbleSort, 100))
      : clearInterval(this.#intervalID);
    setInterval(this.#bubbleSort, 100);
  };

  generateArray = (n, v1, v2) => {
    this.#arr.length = 0;

    for (let i = 0; i < n; i++) {
      arr.push(Math.round(Math.random() * (v2 - v1) + v1));
    }

    return arr;
  };
}
