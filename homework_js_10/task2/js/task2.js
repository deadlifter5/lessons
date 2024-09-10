const pricesNum = parseInt(prompt("Enter prices number", "15"))
const min = 1
const max = 10000
let actionsPricesArr = []
for (let i = 0; i < pricesNum; i++) {
  let actionPrice = min + Math.floor(Math.random() * (max - min + 1))
  actionsPricesArr.push(actionPrice)
}
document.write(`Actions prices: ${actionsPricesArr}<br>`)

let onlyGreaterThan1000Arr = []
let onlyGreaterThan1000 = actionsPricesArr.reduce((prevRes, element, index) => {
  if (element > 1000) prevRes.push(index)
  return prevRes
}, [])

document.write(`Numbers of greater than 1000: ${onlyGreaterThan1000}`)
