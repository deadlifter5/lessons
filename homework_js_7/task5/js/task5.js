function getResults(num1 = 1, num2 = 2, num3 = 3) {
  let evenNumbersCount = 0
  if (num1 % 2 === 0) evenNumbersCount++
  if (num2 % 2 === 0) evenNumbersCount++
  if (num3 % 2 === 0) evenNumbersCount++

  let positiveNumbersCount = 0
  if (num1 > 0) positiveNumbersCount++
  if (num2 > 0) positiveNumbersCount++
  if (num3 > 0) positiveNumbersCount++

  let numbersGreater100 = 0
  if (num1 > 100) numbersGreater100++
  if (num2 > 100) numbersGreater100++
  if (num3 > 100) numbersGreater100++

  return { evenNumbersCount, positiveNumbersCount, numbersGreater100 }
}
let num1 = parseFloat(prompt("Enter number 1"))
let num2 = parseFloat(prompt("Enter number 2"))
let num3 = parseFloat(prompt("Enter number 3"))
let result = getResults(num1, num2, num3)
document.write(
  `Even numbers: ${result.evenNumbersCount}<br>Positive numbers: ${result.positiveNumbersCount}<br>Numbers greater than 100: ${result.numbersGreater100}`
)
