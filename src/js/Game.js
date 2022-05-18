export default class Game {
  stop;
  #ctx;
  #canvasWidth;
  #canvasHeight;
  #fps;
  #fpsInterval;
  #startTime;
  #square;
  #now;
  #then;
  #elapsed;
  #myAnimationFrame;

  constructor(ctx, canvasWidth, canvasHeight, fps, square) {
    this.stop = true;
    this.#ctx = ctx;
    this.#canvasWidth = canvasWidth;
    this.#canvasHeight = canvasHeight;
    this.#fps = fps;
    this.#fpsInterval = 0;
    this.#startTime = undefined;
    this.#square = square;
    this.#now = undefined;
    this.#then = undefined;
    this.#elapsed = undefined;
    this.#myAnimationFrame = undefined;
  }

  #gameLoop() {
    this.#myAnimationFrame = window.requestAnimationFrame(() =>
      this.#gameLoop()
    );

    this.#now = Date.now();
    this.#elapsed = this.#now - this.#then;

    if (this.stop) {
      window.cancelAnimationFrame(this.#myAnimationFrame);
    }

    if (this.#elapsed > this.#fpsInterval) {
      this.then = this.#now - (this.#elapsed % this.#fpsInterval);

      this.#square.update(this.#canvasWidth);
      this.#square.draw(this.#ctx, this.#canvasWidth, this.#canvasHeight);
    }
  }

  animate() {
    this.#fpsInterval = 1000 / this.#fps;
    this.#then = Date.now();
    this.#startTime = this.#then;

    this.#gameLoop();
  }
}
