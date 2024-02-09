function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    
    while(leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if(middleVal === 1) {
            leftIdx = middleIdx + 1; 
        } else {
            rightIdx = middleIdx - 1; 
        }
    }

    return arr.length - leftIdx; 
}

module.exports = countZeroes;






// function binarySearch (arr, val) {
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;

//     while(leftIdx <= rightIdx){
//         let middleIdx = Math.floor((leftIdx + rightIdx)/2)
//         let middleVal = arr[middleIdx]
//         if(middleVal < val){
//             leftIdx = middleIdx + 1;
//         }
//         else if( middleVal > val) {
//             rightIdx = middleIdx - 1;
//         }
//         else {
//             return middleIdx
//         }
//     }
//     return -1
    
// }