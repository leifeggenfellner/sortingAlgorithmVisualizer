export default class SortingArray {
  arr;

  constructor() {
    this.arr = undefined;
  }

  generateArray(length) {
    length = parseInt(length);
    this.arr = new Array(length);
    for (let i = 0; i < length; i++) {
      this.arr[i] = Math.floor(Math.random() * 1000 + 10);
    }
  }
}
