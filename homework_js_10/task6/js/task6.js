const pricesNum = parseInt(prompt("Enter prices number", "15"))
const min = 1
const max = 10000
let actionsPricesArr = []
for (let i = 0; i < pricesNum; i++) {
  let actionPrice = min + Math.floor(Math.random() * (max - min + 1))
  actionsPricesArr.push(actionPrice)
}
document.write(`Actions prices: ${actionsPricesArr}<br>`)

if (actionsPricesArr.some((actionPrice) => actionPrice < 1000))
  document.write("There is price less than 1000")
else document.write("There is not price less than 1000 ")
