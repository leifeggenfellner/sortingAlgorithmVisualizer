export const generateArray = (length, canvasHeight) => {
    const arr = new Array();
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * (canvasHeight - 8) + 5));
    }
      
    return arr;
}