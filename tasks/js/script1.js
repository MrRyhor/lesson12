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

//================================ Task 1 ========================================================
const testArr = createRandomArr(arrLength, minVal, maxVal)
console.log(testArr)

let changes, counter = 0
do {
    changes = false
    for (let i = 1; i < testArr.length; i++) {
        if (testArr[i - 1] > testArr[i]) {
            let temp = testArr[i - 1]
            testArr[i - 1] = testArr[i]
            testArr[i] = temp
            changes = true
            counter++
        }
    }
} while (changes);


result1.innerHTML = `[${testArr}]<br>Кол-во перемещений = <span>${counter}</span>`


