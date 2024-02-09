function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num); 
    if (firstIdx === -1){ 
        return -1;
    }
    let lastIdx = findLast(arr, num);

    return lastIdx - firstIdx + 1;
}

function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstOcc = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === num) {
            firstOcc = mid;
            right = mid - 1;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return firstOcc;
}

function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let lastOcc = -1; 

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === num) {
            lastOcc = mid;
            left = mid + 1; 
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return lastOcc; 
}

module.exports = sortedFrequency;
