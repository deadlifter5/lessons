//Введення даних
let birthYear = parseInt(prompt("Ввести рік народження:", "1900"))
let currentYear = parseInt(prompt("Ввести поточний рік:", "2024"))

//Розрахуноk
const age = currentYear - birthYear

// вивід результату
document.write(`Вік = ${age} років`)
