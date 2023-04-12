function findRotationCount(arr) {

    // index of the smallest element will be the n of rotations//

    let leftIdx = 0;
    let rightIdx = arr.length - 1
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)

        //check if current or next element is the first element
        if (arr[middleIdx] < arr[middleIdx - 1]) {
            return middleIdx
        } else if (arr[middleIdx] > arr[middleIdx + 1]) {
            return middleIdx + 1
        }
        if (arr[middleIdx] > arr[leftIdx]) {
            leftIdx = middleIdx + 1
        } else {
            (arr[middleIdx] < arr[rightIdx])
            rightIdx = middleIdx - 1 
        } 
    }
    return 0
}
findRotationCount([15,18,2,3,6,12])

module.exports = findRotationCount