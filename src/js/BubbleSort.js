export default class BubbleSort {
  #arr;

  constructor() {
    this.#arr = undefined;
  }

  sort(arr, ctx, canvasWidth, canvasHeight) {
    this.#arr = arr;
    let len = this.#arr.length;

    const rectWidth = canvasWidth / this.#arr.length;
    const arrMax = Math.max(...this.#arr);

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.beginPath();
    for (let i = 0; i < len; i++) {
      ctx.lineWidth = 0.1;
      ctx.strokeStyle = '000000';
      ctx.rect(
        i * rectWidth,
        canvasHeight,
        rectWidth,
        -((canvasHeight - 60) * (this.#arr[i] / arrMax))
      );
      ctx.stroke();
    }
    ctx.closePath();

    while (len >= 1) {
      let newLen = 0;
      for (let i = 1; i < len; i++) {
        if (this.#arr[i - 1] > this.#arr[i]) {
          [this.#arr[i - 1], this.#arr[i]] = [this.#arr[i], this.#arr[i - 1]];
          newLen = i;
        }
      }
      len = newLen;
    }
    console.log(this.#arr);
  }
}
