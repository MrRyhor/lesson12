function getRandomNum(minVal, maxVal) {
    return minVal + Math.floor(Math.random() * maxVal)
}

function createRandomArr(arrLength, minVal, maxVal) {
    const arr = []
    for (let i = 0; i < arrLength; i++) {
        const randomNum = getRandomNum(minVal, maxVal)
        arr.push(randomNum)
    }
    return arr
}

const minVal = 1,
    maxVal = 100,
    arrLength = 30

//============================= Task 3 ================================================

const testArr = createRandomArr(arrLength, minVal, maxVal)

let key, i, counter = 0

for (let k = 1; k < testArr.length; k++) {
    key = testArr[k]
    i = k - 1
    while (i >= 0 && testArr[i] > key) {
        testArr[i + 1] = testArr[i]
        i -= 1
        counter++
    }
    testArr[i + 1] = key
}

result1.innerHTML = `[${testArr}]<br>Кол-во перемещений = <span>${counter}</span>`



