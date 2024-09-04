const minV = 1
const maxV = 200
const numbersQuantity = parseInt(prompt("Enter numbers quantity"))
let arr = []
for (let i = 0; i < numbersQuantity; i++) {
  const number = minV + Math.floor(Math.random() * (maxV - minV + 1))
  arr.push(number)
}
for (const number of arr) {
  if (number > 100) document.write(`${number}<br>`)
}
