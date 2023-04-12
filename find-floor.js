function findFloor(arr, x) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1
    let floor = 0;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)

        //if current el is greater then x, ignoring all elements in the right part
        if (arr[middleIdx] > x) {
            rightIdx = middleIdx - 1
        } else if (arr[middleIdx] < x) {
            leftIdx = middleIdx + 1

            //check if current element greater than current floor
            if (arr[middleIdx] > floor) {
                floor = arr[middleIdx]
            }
        } else {
            // if current element matches x return it as floor
            floor = arr[middleIdx]
        }
    } 
    //if floor never changed return -1
    if (floor === 0) return -1
    return floor
}

findFloor([1,2,8,10,10,12,19], 0)

module.exports = findFloor