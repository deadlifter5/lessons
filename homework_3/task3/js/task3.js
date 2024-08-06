//Введення даних
let min = 1,
  max = 5
//let randomNumber = 1 + Math.floor(Math.random() * (5 - 1 + 1))
const randomNumber = min + Math.floor(Math.random() * (max - 1 + 1))
let userNumber = parseInt(prompt("2 спроби. Ввести число від 1 до 5:"))

//Перевірка
if (userNumber === randomNumber) {
  alert(`Число вгадане з першої спроби!!!`)
} else {
  alert(`Невірно! `)
}
userNumber = parseInt(
  prompt("Залишається одна спроба. Ввести число від 1 до 5:")
)
if (userNumber === randomNumber) {
  alert(`Число вгадане з другої спроби!!!`)
} else {
  alert(`Невірно!`)
}

//Вивід результату
document.write(`<h1>Результат: ${randomNumber}</h1>`)
