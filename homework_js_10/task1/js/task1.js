// let arr = [10, 9, 5, 13, 7, 16, 18, 19, 21, 11, 7, 4]
// let res = arr.reduce((prevMax, el) => (el > prevMax ? el : prevMax))
// document.write(`${res}`)

// let arr = [10, -9, 5, 13, 7, 16, -18, 19, -21, 11, 7, 4]
// let res = arr.reduce(
//   (prevMax, el) => (el < 0 && el > prevMax ? el : prevMax),
//   -Infinity
// )
// document.write(`${res}`)
// let arr = [10, -9, 5, 13, 7, 16, -18, 19, -21, 11, 7, 4]
// arr.sort((el1, el2) => {
//   if (el1 > el2) return 1
//   if (el1 < el2) return -1
//   else return 0
// })
// document.write(`${arr}`)
// let arr = [10, -9, 5, 13, 7, 16, -18, 19, -21, 11, 7, 4]
// arr.sort((el1, el2) => el1 - el2)
// document.write(`${arr}`)

const pricesNum = parseInt(prompt("Enter prices number", "15"))
const min = 1
const max = 10000
let actionsPricesArr = []
for (let i = 0; i < pricesNum; i++) {
  let actionPrice = min + Math.floor(Math.random() * (max - min + 1))
  actionsPricesArr.push(actionPrice)
}
document.write(`Actions prices: ${actionsPricesArr}<br>`)

let onlyGreaterThan1000 = actionsPricesArr.filter((element) => element > 1000)
document.write(`Prices greater than 1000: ${onlyGreaterThan1000}`)
