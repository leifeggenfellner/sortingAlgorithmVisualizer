export default class Sorter {
  #arr;
  #ctx;
  #canvasWidth;
  #canvasHeight;

  constructor(ctx, canvasWidth, canvasHeight) {
    this.#arr = [];
    this.#ctx = ctx;
    this.#canvasWidth = canvasWidth;
    this.#canvasHeight = canvasHeight;
  }

  generateArray(length) {
    this.#arr = [];

    for (let i = 0; i < length; i++) {
      this.#arr[i] = Math.ceil(Math.random() * (this.#canvasHeight - 20) + 5);
    }
  }

  bubbleSort() {
    let length = this.#arr.length;

    while (length >= 1) {
      let newLength = 0;
      for (let i = 1; i < length; i++) {
        if (this.#arr[i - 1] > this.#arr[i]) {
          [this.#arr[i - 1], this.#arr[i]] = [this.#arr[i], this.#arr[i - 1]];
          newLength = i;
        }
      }
      length = newLength;
    }
    this.draw();
  }

  draw() {
    const rectWidth = this.#canvasWidth / this.#arr.length;

    this.#ctx.clearRect(0, 0, this.#canvasWidth, this.#canvasHeight);
    this.#ctx.lineWidth = 1;
    this.#ctx.strokeStyle = '#000000';

    this.#ctx.beginPath();
    for (let i = 0; i < this.#arr.length; i++) {
      this.#ctx.rect(
        i * rectWidth,
        this.#canvasHeight - this.#arr[i],
        rectWidth,
        this.#arr[i]
      );

      this.#ctx.stroke();
    }
    this.#ctx.closePath();
  }
}
