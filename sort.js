function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const c = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = c;
            }
        }
    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let curr = i;
        let minVal = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minVal]) minVal = j;
        }
        if (curr != minVal) {
            const c = arr[minVal];
            arr[minVal] = arr[curr];
            arr[curr] = c;
        }
    }
}

function insertionSort(arr) {
    let i = 1;
    while (i < arr.length) {
        let x = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > x) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = x;
        i++;
    }
}

function merge(leftArr, rightArr) {
    const result = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            result.push(leftArr.shift());
        } else {
            result.push(rightArr.shift());
        }
    }

    return [...result, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
    if ([0, 1].includes(arr.length)) return arr;
    const mid = Math.floor(arr.length / 2);

    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));

    return merge(leftArr, rightArr);
}

function quickSort(arr) {
    if ([0, 1].includes(arr.length)) return arr;
    const mid = Math.floor(arr.length / 2);

    const leftArr = [];
    const rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < mid) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [1, 2, 5, 3, 5, 2];

console.log(mergeSort(arr));
