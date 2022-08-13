export default class BubbleSort {
  len;
  arrMax;
  rectWidth;
  newLen;
  rectWidth;
  #states;

  #drawArray(ctx, rectWidth, canvasWidth, canvasHeight, arrMax, states, arr) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#ff0000';

    for (let i = 0; i < arr.length; i++) {
      ctx.beginPath();

      ctx.rect(
        i * rectWidth,
        canvasHeight,
        rectWidth,
        -((canvasHeight - 60) * (arr[i] / arrMax))
      );
      ctx.stroke();
      // if (states[i] === 1) {
      //   ctx.fill();
      // }
      ctx.closePath();
    }
  }

  sort(arr, ctx, canvasWidth, canvasHeight) {
    this.#states = new Array(arr.length);
    console.log(this.#states);
    this.len = arr.length;
    this.arrMax = Math.max(...arr);
    this.rectWidth = canvasWidth / this.length;

    while (this.len >= 1) {
      this.newLen = 0;

      for (let i = 1; i < this.len; i++) {
        if (arr[i - 1] > arr[i]) {
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
          this.newLen = i;

          this.#drawArray(
            ctx,
            this.rectWidth,
            canvasWidth,
            canvasHeight,
            this.arrMax,
            this.#states,
            arr
          );
        }
      }
      this.len = this.newLen;
    }
  }
}
