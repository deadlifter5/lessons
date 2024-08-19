for (let i = 0; i < Infinity; i++) {
  let userNumber = parseInt(prompt("Ввести число"))
  let result = Math.pow(userNumber, 2)
  if (!isFinite(result)) break
  document.write(`<div>Результат: ${userNumber}^2 = ${result}</div>`)
}
