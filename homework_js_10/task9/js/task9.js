const pricesNum = parseInt(prompt("Enter prices number", "5"))
const min = 1
const max = 10000
let actionsPricesArr = []
for (let i = 0; i < pricesNum; i++) {
  let actionPrice = min + Math.floor(Math.random() * (max - min + 1))
  actionsPricesArr.push(actionPrice)
}
document.write(`Actions prices: ${actionsPricesArr}<br>`)

let pricesGreaterThan1000Sum = actionsPricesArr.reduce(
  (prevSum, element) => (element > 1000 ? prevSum + element : prevSum),
  0
)
document.write(`Sum of prices greater than 1000 = ${pricesGreaterThan1000Sum}`)
