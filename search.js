function linear(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

function binary(arr, element, low, high) {
    const mid = Math.floor((low - high) / 2 + high);
    if (arr[mid] === element) return mid;
    if (arr[mid] < element) return binary(arr, element, mid + 1, arr.length);
    else return binary(arr, element, 0, mid);
}

const arr = [1, 2, 2, 3, 5, 5];

console.log(binary(arr, 2, 0, arr.length));
