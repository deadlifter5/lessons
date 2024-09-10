const pricesNum = parseInt(prompt("Enter prices number", "15"))
const min = 1
const max = 10000
let actionsPricesArr = []
for (let i = 0; i < pricesNum; i++) {
  let actionPrice = min + Math.floor(Math.random() * (max - min + 1))
  actionsPricesArr.push(actionPrice)
}
document.write(`Actions prices: ${actionsPricesArr}<br>`)

let priceChangesCount = actionsPricesArr.reduce(
  (prevCount, element, index, baseArr) =>
    baseArr[index + 1] != baseArr[index] ? prevCount + 1 : prevCount,
  0
)

// for (let i = 0; i < actionsPricesArr.length; i++) {
//   if (actionsPricesArr[i + 1] != actionsPricesArr[i]) priceChangesCount++
// }

document.write(`Action price changes: ${priceChangesCount}`)
