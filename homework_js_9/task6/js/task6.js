const minV = 1
const maxV = 15
const numbersQuantity = parseInt(prompt("Enter numbers quantity", "5"))
let numbers = []
for (let i = 0; i < numbersQuantity; i++) {
  const number = minV + Math.floor(Math.random() * (maxV - minV + 1))
  numbers.push(number)
}
document.write(`Numbers range: ${numbers}<br>`)

// function getNumsBiggerThanFirst(number) {
//   if (number > numbers[0])
//     document.write(`Number bigger than first: ${number}<br>`)
// }

// for (let i = 0; i < numbers.length; i++) {
//   getNumsBiggerThanFirst(numbers[i])
// }

numbers.forEach((number) => {
  if (number > numbers[0])
    document.write(`Number bigger than first * 2 = ${number * 2}<br>`)
})
