const pricesNum = parseInt(prompt("Enter prices number", "15"))
const min = 1
const max = 10000
let actionsPricesArr = []
for (let i = 0; i < pricesNum; i++) {
  let actionPrice = min + Math.floor(Math.random() * (max - min + 1))
  actionsPricesArr.push(actionPrice)
}
document.write(`Actions prices: ${actionsPricesArr}<br>`)

let greaterThanPreviousArr = []
let greaterThanPrevious = actionsPricesArr.reduce((prevRes, element, index) => {
  if (index > 0 && element > actionsPricesArr[index - 1]) prevRes.push(element)
  return prevRes
}, [])

document.write(`Array of greater than previous: ${greaterThanPrevious}`)
