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

//=============================== Task 2 =====================================================
const testArr = createRandomArr(arrLength, minVal, maxVal)

let leftIndex = 0,
    rightIndex = testArr.length - 1,
    counter = 0

while (leftIndex < rightIndex) {
    for (let i = leftIndex; i < rightIndex; i++) {
        if (testArr[i] > testArr[i + 1]) {
            let temp = testArr[i]
            testArr[i] = testArr[i + 1]
            testArr[i + 1] = temp
            counter++
        }
    }
    rightIndex--
    for (let i = rightIndex; i > leftIndex; i--) {
        if (testArr[i] < testArr[i - 1]) {
            let temp = testArr[i]
            testArr[i] = testArr[i - 1]
            testArr[i - 1] = temp
            counter++
        }
    }
    leftIndex++      
}

result1.innerHTML = `[${testArr}]<br>Кол-во перемещений = <span>${counter}</span>`




