const selectionSort = arr => {
    let temp = 0;
    
    for (let i = 0; i < arr.length; i++) {
        minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}
