const pricesNum = parseInt(prompt("Enter prices number", "10"))
const min = 1
const max = 10000
let actionsPricesArr = []
for (let i = 0; i < pricesNum; i++) {
  let actionPrice = min + Math.floor(Math.random() * (max - min + 1))
  actionsPricesArr.push(actionPrice)
}
document.write(`Actions prices: ${actionsPricesArr}<br>`)

let maxPrice = Math.max(...actionsPricesArr)
// let maxPrice = actionsPricesArr[0]
// for (let i = 1; i <= pricesNum; i++) {
//   if (actionsPricesArr[i + 1] > maxPrice) maxPrice = actionsPricesArr[i + 1]
// }
document.write(`Max action price: ${maxPrice}<br>`)

const percentOfMaxPriceArr = actionsPricesArr.map(
  (element) => (element / maxPrice) * 100
)
document.write(`Percent of max price: ${percentOfMaxPriceArr}<br>`)
