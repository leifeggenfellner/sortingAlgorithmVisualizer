export const generateArray = (length, canvasHeight) => {
  const arr = new Array(length);

  for (let i = 0; i < length; i++) {
    arr[i] = Math.ceil(Math.random() * (canvasHeight - 20) + 5);
  }

  return arr;
};

export const drawArray = (arr, ctx, canvasWidth, canvasHeight) => {
  const rectWidth = canvasWidth / arr.length;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#ff0000';

  for (let i = 0; i < arr.length; i++) {
    ctx.beginPath();

    ctx.rect(i * rectWidth, canvasHeight - arr[i], rectWidth, arr[i]);

    ctx.stroke();
    ctx.closePath();
  }
};

export const bubbleSort = (
  arr,
  ctx,
  canvasWidth,
  canvasHeight,
  fpsInterval,
  then
) => {
  let length = arr.length;
  while (length >= 1) {
    let newLength = 0;
    for (let i = 1; i < length; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        newLength = i;
      }
    }
    length = newLength;
    drawArray(arr, ctx, canvasWidth, canvasHeight);
  }
};
