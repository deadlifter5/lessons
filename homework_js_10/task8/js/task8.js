const pricesNum = parseInt(prompt("Enter prices number", "15"))
const min = 1
const max = 10000
let actionsPricesArr = []
for (let i = 0; i < pricesNum; i++) {
  let actionPrice = min + Math.floor(Math.random() * (max - min + 1))
  actionsPricesArr.push(actionPrice)
}
document.write(`Actions prices: ${actionsPricesArr}<br>`)

let pricesGreaterThan1000Count = actionsPricesArr.reduce(
  (prevCount, element) => (element > 1000 ? prevCount + 1 : prevCount),
  0
)
document.write(`Prices greater than 1000: ${pricesGreaterThan1000Count}`)
