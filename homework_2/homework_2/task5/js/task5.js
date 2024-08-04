//Введення даних
let secondsQuantity = parseInt(prompt("Ввести кількість секунд:", "0"))

//Розрахуноk
const hours = Math.floor(secondsQuantity / 3600)
const minutes = Math.floor((secondsQuantity % 3600) / 60)
const seconds = secondsQuantity % 60

//Вивід результату
document.write(
  `<ul>
  <li>Кількість секунд: ${secondsQuantity}</li>
  <li>Результат = ${hours} годин, ${minutes} хвилин, ${seconds} секунд</li>
  </ul>`
)
