const totalCustomersNumber = parseInt(
  prompt("Enter number of customers", "100")
)

const dailyCustomersNumber = []
for (let i = 1; i <= 7; i++) {
  const customersNumberPerDay = Math.floor(
    Math.random() * totalCustomersNumber + 1
  )
  dailyCustomersNumber.push(customersNumberPerDay)
}
// ======================================================================

function getLessThan20(dailyCustomersNumber) {
  let lessThan20 = 0
  for (let i = 0; i < dailyCustomersNumber.length; i++) {
    if (dailyCustomersNumber[i] < 20) lessThan20++
  }
  return lessThan20
}
const les20 = getLessThan20(dailyCustomersNumber)
document.write(`Days with less than 20 customers: ${les20}<br>`)
// ======================================================================

function getMin(dailyCustomersNumber) {
  let min = dailyCustomersNumber[0]
  for (let i = 1; i < dailyCustomersNumber.length; i++) {
    if (dailyCustomersNumber[i] < min) min = dailyCustomersNumber[i]
  }
  return min
}
const minCustomers = getMin(dailyCustomersNumber)
document.write(`<br>Least customers day: ${minCustomers}<br>`)

// ======================================================================

function getMax(dailyCustomersNumber) {
  let max = dailyCustomersNumber[0]
  for (let i = 1; i < dailyCustomersNumber.length; i++) {
    if (dailyCustomersNumber[i] > max) max = dailyCustomersNumber[i]
  }
  return max
}
const maxCustomers = getMax(dailyCustomersNumber)
document.write(`<br>Most customers day: ${maxCustomers}<br>`)

// ======================================================================

function getMidWeekCustomersSum(dailyCustomersNumber) {
  let midWeekCustomersSum = 0
  for (let i = 0; i <= 4; i++) {
    midWeekCustomersSum += dailyCustomersNumber[i]
  }
  return midWeekCustomersSum
}
const midWeekCustomers = getMidWeekCustomersSum(dailyCustomersNumber)
document.write(`<br>Midweek customers number: ${midWeekCustomers}<br>`)

// ======================================================================

function getWeekendCustomersSum(dailyCustomersNumber) {
  let weekendCustomersSum = 0
  for (let i = 5; i <= 6; i++) {
    weekendCustomersSum += dailyCustomersNumber[i]
  }
  return weekendCustomersSum
}
const weekendCustomers = getWeekendCustomersSum(dailyCustomersNumber)
document.write(`<br>Weekend customers number: ${weekendCustomers}<br>`)

// ======================================================================

document.write(`<br>Daily customers count: ${dailyCustomersNumber}`)
