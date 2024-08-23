function getSum(num1 = 1, num2 = 2, num3 = 3, num4 = 4) {
  return num1 + num2 + num3 + num4
}
function getMultiplication(num1 = 1, num2 = 2, num3 = 3, num4 = 4) {
  return num1 * num2 * num3 * num4
}
function getAverage(num1 = 1, num2 = 2, num3 = 3, num4 = 4) {
  return (num1 + num2 + num3 + num4) / 4
}
function getMin(num1 = 1, num2 = 2, num3 = 3, num4 = 4) {
  return Math.min(num1, num2, num3, num4)
}
let num1 = parseInt(prompt("Enter number 1", "1"))
let num2 = parseInt(prompt("Enter number 2", "2"))
let num3 = parseInt(prompt("Enter number 3", "3"))
let num4 = parseInt(prompt("Enter number 4", "4"))
let sum = getSum(num1, num2, num3, num4)
let multiplication = getMultiplication(num1, num2, num3, num4)
let average = getAverage(num1, num2, num3, num4)
let min = getMin(num1, num2, num3, num4)
document.write(
  `Sum = ${sum}<br>Multiplication = ${multiplication}<br>Average = ${average}<br>Min = ${min}<br>`
)
