function findRotatedIndex(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1
    let index = 0
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)
        if (arr[middleIdx] === num) {
            return middleIdx
        } else if (arr[middleIdx] > num) {
            if (arr[middleIdx] < arr[rightIdx]) {
                rightIdx = middleIdx - 1
            }
            console.log('left part problem', middleIdx)
            return middleIdx
        } else {
            if (arr[middleIdx] > arr[leftIdx]) {
                leftIdx = middleIdx + 1
            } 
            console.log('right part problem', middleIdx)
            return middleIdx
            
        }
    } 
    console.log(index)
    return index
}

findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)
module.exports = findRotatedIndex