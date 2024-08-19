let gymGoerNumber = parseInt(prompt("Ввести кількість відвідувачів"))
let oldestGymGoer = 0
let youngestGymGoer = 0
let averageGymGoerAge = 0
let gymGoerAge = 0
let ageSum = 0
for (let num = 1; num <= gymGoerNumber; num++) {
  gymGoerAge = parseInt(prompt(`Ввести вік відвідувача Nº${num}`))
  ageSum += gymGoerAge
}
oldestGymGoer = Math.max(gymGoerAge)
youngestGymGoer = Math.min(gymGoerAge)
averageGymGoerAge = ageSum / gymGoerNumber
document.write(`Кількість відвідувачів за день = ${gymGoerNumber}`)
document.write(
  `<div>Вік наймолодшого відвідувача = ${youngestGymGoer} років</div>`
)
document.write(
  `<div>Вік найстаршого відвідувача = ${oldestGymGoer} років</div>`
)
document.write(
  `<div>Середній вік = ${averageGymGoerAge.toFixed(0)} років</div>`
)
