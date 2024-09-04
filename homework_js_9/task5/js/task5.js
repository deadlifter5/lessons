const minV = -10
const maxV = 10
const numbersQuantity = parseInt(prompt("Enter numbers quantity", "5"))
let numbers = []
for (let i = 0; i < numbersQuantity; i++) {
  const number = minV + Math.floor(Math.random() * (maxV - minV + 1))
  numbers.push(number)
}
document.write(`Numbers range: ${numbers}<br>`)

let productOfPositiveNumbers = 1
numbers.forEach((number) => {
  if (number > 0) productOfPositiveNumbers *= number
})
document.write(`Product of positive numbers = ${productOfPositiveNumbers}`)
