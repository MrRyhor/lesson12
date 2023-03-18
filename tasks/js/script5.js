const namesList = ['John', 'Adam', 'Kate', 'Olga', 'Paul', 'Peter']

const sortNameList = namesList.sort()
console.log(sortNameList)

function binarySearch(arr, searchElement) {
    let start = 0,
        end = arr.length - 1
    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        if (arr[middle] === searchElement) return 'YES'
        if (arr[middle] < searchElement) start = middle + 1
        else end = middle - 1
    }
    return 'NO'
}

function binaryIndexSearch(arr, searchElement) {
    let start = 0,
        end = arr.length - 1
    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        if (arr[middle] === searchElement) return middle
        if (arr[middle] < searchElement) start = middle + 1
        else end = middle - 1
    }
    return -1
}

const searchingName = binarySearch(sortNameList, 'Olga')
const searchingIndexName = binaryIndexSearch(sortNameList, 'Olga')

result1.innerHTML = `Есть ли имя 'Olga': <span>${searchingName}</span><br> Индекс имени в массиве = <span>${searchingIndexName}</span>`