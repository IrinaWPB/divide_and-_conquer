function sortedFrequency(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1
    let frequency = 0

    const firstIndex = findFisrst(leftIdx, rightIdx, num, arr) 
    const lastIndex = findLast(leftIdx, rightIdx, num, arr)

    if (lastIndex === 0 & firstIndex === 0) {
        frequency = -1
    } else {
        frequency = lastIndex - firstIndex + 1
    }
    return frequency 
}

function findFisrst (l, r, num, arr) {
    let firstIndex = 0
    while (l <= r) {
        let middleIdx = Math.floor((l + r)/2)
        if (arr[middleIdx] < num) {
            l = middleIdx + 1
        } else if (arr[middleIdx] > num) {
            r = middleIdx - 1
        } else {
            if (arr[middleIdx-1] !== num) {
                firstIndex = middleIdx
            }
            r = middleIdx - 1 
        }
    }
    return firstIndex
} 

function findLast (l, r, num, arr) {
    let lastIndex = 0
    while (l <= r) {
        let middleIdx = Math.floor((l + r)/2)
        if (arr[middleIdx] < num) {
            l = middleIdx + 1
        } else if (arr[middleIdx] > num) {
            r = middleIdx - 1
        } else {
            if (arr[middleIdx + 1] !== num) {
                lastIndex = middleIdx
            } 
            l = middleIdx + 1 
        }
    }
    return lastIndex
} 


sortedFrequency([1,1,2,2,2,2,3], 2) 

module.exports = sortedFrequency