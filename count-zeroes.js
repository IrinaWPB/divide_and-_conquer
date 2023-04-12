function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1
    let totalZeros = 0
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)

        //check if middle val is 0
        if (arr[middleIdx] === 0) {

            //add amount of element from the right, including middle element
            totalZeros = rightIdx - middleIdx + totalZeros + 1 

            //moving right index 1 step to the left 
            rightIdx = middleIdx - 1

        //if middle index is not 0 moving left index 1 step to the right
        } else leftIdx = middleIdx + 1 
    } 
    console.log(totalZeros)
    return totalZeros
}

countZeroes([1,1,1,11,1,0,0,0,0,0])
module.exports = countZeroes