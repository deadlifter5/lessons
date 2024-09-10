const pricesNum = parseInt(prompt("Enter prices number", "15"))
const min = 1
const max = 10000
let actionsPricesArr = []
for (let i = 0; i < pricesNum; i++) {
  let actionPrice = min + Math.floor(Math.random() * (max - min + 1))
  actionsPricesArr.push(actionPrice)
}
document.write(`Actions prices: ${actionsPricesArr}<br>`)

if (actionsPricesArr.every((actionPrice) => actionPrice > 1000))
  document.write("All prices are greater than 1000")
else document.write("Not all prices are greater than 1000")
