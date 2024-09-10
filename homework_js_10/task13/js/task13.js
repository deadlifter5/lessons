const pricesNum = parseInt(prompt("Enter prices number", "20"))
const min = 1
const max = 10000
let actionsPricesArr = []
for (let i = 0; i < pricesNum; i++) {
  let actionPrice = min + Math.floor(Math.random() * (max - min + 1))
  actionsPricesArr.push(actionPrice)
}
document.write(`Actions prices: ${actionsPricesArr}<br>`)

const lastPriceGreaterThan1000Index = actionsPricesArr.findLastIndex(
  (element) => element > 1000
)

document.write(
  `Index of last price greater than 1000 = ${lastPriceGreaterThan1000Index}`
)
