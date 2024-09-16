let arr = [
  [1, 25, 5, 26, 41, 22, 9, 1],
  [1, 2, 1, 82, 71, 52, 91, 7],
  [1, 14, 55, 2, 21, 22, 9, 1],
  [1, 61, 5, 26, 17, 2, 99, 2],
  [0, 1, 23, 29, 18, 21, 9, 4],
  [0, 1, 75, 22, 11, 32, 9, 3],
  [1, 1, 54, 21, 14, 2, 19, 7],
  [14, 11, 54, 21, 1, 2, 9, 5],
]

let sum1 = 0
for (let rowNum = 0; rowNum < 4; rowNum++) {
  for (let colNum = 0; colNum < 4; colNum++) {
    sum1 += arr[rowNum][colNum]
  }
}
document.write(`Sum 1 = ${sum1}<br>`)

// ===========================================================

let sum2 = 0
for (let rowNum = 0; rowNum < 4; rowNum++) {
  for (let colNum = 4; colNum < 8; colNum++) {
    sum2 += arr[rowNum][colNum]
  }
}
document.write(`Sum 2 = ${sum2}<br>`)

// ===========================================================

let sum3 = 0
for (let rowNum = 4; rowNum < 8; rowNum++) {
  for (let colNum = 0; colNum < 4; colNum++) {
    sum3 += arr[rowNum][colNum]
  }
}
document.write(`Sum 3 = ${sum3}<br>`)

// ===========================================================

let sum4 = 0
for (let rowNum = 4; rowNum < 8; rowNum++) {
  for (let colNum = 4; colNum < 8; colNum++) {
    sum4 += arr[rowNum][colNum]
  }
}
document.write(`Sum 4 = ${sum4}<br>`)

// ===========================================================

let sum5 = 0
for (let rowNum = 0; rowNum < 8; rowNum++) {
  for (let colNum = 0; colNum < 8; colNum++) {
    if (rowNum % 2 === 0) sum5 += arr[rowNum][colNum]
  }
}
document.write(`Sum 5 = ${sum5}<br>`)

// ===========================================================

let sum6 = 0
for (let rowNum = 0; rowNum < 8; rowNum++) {
  for (let colNum = 0; colNum < 8; colNum++) {
    if (colNum % 2 !== 0) sum6 += arr[rowNum][colNum]
  }
}
document.write(`Sum 6 = ${sum6}<br>`)

// ===========================================================

let sum7 = 0
for (let rowNum = 0; rowNum < 8; rowNum++) {
  for (let colNum = 0; colNum < 8; colNum++) {
    if (rowNum % 2 === 0 && colNum % 2 !== 0) sum7 += arr[rowNum][colNum]
    if (rowNum % 2 !== 0 && colNum % 2 === 0) sum7 += arr[rowNum][colNum]
  }
}
document.write(`Sum 7 = ${sum7}<br>`)
