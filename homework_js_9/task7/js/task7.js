const minPrice = 100
const maxPrice = 1500
const pricesNumber = parseInt(prompt("Enter prices number", "5"))
let prices = []

for (let i = 0; i < pricesNumber; i++) {
  let price = minPrice + Math.floor(Math.random() * (maxPrice - minPrice + 1))
  prices.push(price)
}
document.write(`Prices range: ${prices}<br>`)

// ==================================================================================

// prices.forEach((price, index, prices) => {
//   if (price > 1000) prices[index] = prices[index] *= 0.7
// })
// document.write(prices)

// ==================================================================================

for (let i = 0; i < prices.length; i++) {
  if (prices[i] > 1000) prices[i] *= 0.7
}
document.write(`Prices with discount: ${prices}`)

// ==================================================================================

// let pricesWithDiscount = prices.map((price) => {
//   if (price > 1000) price * 0.7
// })
// document.write(`Prices with discount: ${pricesWithDiscount}`)
