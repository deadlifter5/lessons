//Введення даних
let productPrice = parseFloat(prompt("Ввести ціну:", "0"))
let moneyQuantity = parseFloat(prompt("Ввести кількість грошей:", "0"))
const lotteryPrice = 4

//Розрахуноk
if (moneyQuantity < productPrice) {
  document.write(`Недостатньо грошей!!!`)
} else if (lotteryPrice + productPrice <= moneyQuantity) {
  document.write(`Дякуємо за покупку!!! Пропонуємо придбати лотерею!!!`)
} else document.write(`Дякуємо за покупку!!!`)
