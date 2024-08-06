//Введення даних
let personAge = parseInt(prompt("Ввести вік людини:", "0"))

//Розрахуноk //Вивід результату
if (personAge >= 3 && personAge < 6) {
  document.write(`<h2>Дитина у садочку</h2`)
} else if (personAge < 17) {
  document.write(`<h2>Школяр</h2`)
} else if (personAge < 22) {
  document.write(`<h2>Студент</h2`)
} else if (personAge < 65) {
  document.write(`<h2>Працівник</h2`)
} else if (personAge >= 65) {
  document.write(`<h2>Пенсіонер</h2`)
}
