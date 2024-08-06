//Введення даних
let firstChildName = prompt("Ввести імя першої дитини:", "ххх")
let firstChildCandies = parseInt(
  prompt("Ввести кількість цукерок першої дитини:", "0")
)
let secondChildName = prompt("Ввести імя другої дитини:", "xxx")
let secondChildCandies = parseInt(
  prompt("Ввести кількість цукерок другої дитини:", "0")
)

//Розрахуноk
if (firstChildCandies > secondChildCandies) {
  alert(`Виграла перша дитина!!!`)
} else if (firstChildCandies < secondChildCandies) {
  alert(`Виграла друга дитина!!!`)
} else alert(`Нічия!!!`)
