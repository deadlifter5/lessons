const minBill = 50
const maxBill = 100
let billsDuringYear = []
for (let i = 1; i <= 12; i++) {
  const monthBill =
    minBill + Math.floor(Math.random() * (maxBill - minBill + 1))
  document.write(` Month Nº${i} bill = ${monthBill}<br>`)
  billsDuringYear.push(monthBill)
}

// =============================================================================

function getAnnualBillSum(billsDuringYear) {
  let annualBillSum = 0
  for (let i = 0; i < 12; i++) annualBillSum += billsDuringYear[i]

  return annualBillSum
}
const annualBill = getAnnualBillSum(billsDuringYear)
document.write(`<br>Annual bill = ${annualBill}`)

// =============================================================================

function getFirstSemesterBillSum(billsDuringYear) {
  let firstSemesterBillSum = 0
  for (let i = 0; i < 6; i++) firstSemesterBillSum += billsDuringYear[i]

  return firstSemesterBillSum
}
const firstSemesterBill = getFirstSemesterBillSum(billsDuringYear)
document.write(`<br>First semester bills sum = ${firstSemesterBill}`)

// =============================================================================

function getSecondSemesterBillSum(billsDuringYear) {
  let secondSemesterBillSum = 0
  for (let i = 6; i < 12; i++) secondSemesterBillSum += billsDuringYear[i]

  return secondSemesterBillSum
}
const secondSemesterBill = getSecondSemesterBillSum(billsDuringYear)
document.write(`<br>Second semester bills sum = ${secondSemesterBill}`)

// =============================================================================

function getSummerBillSum(billsDuringYear) {
  let summerBillSum = 0
  for (let i = 5; i < 8; i++) summerBillSum += billsDuringYear[i]

  return summerBillSum
}
const summerBill = getSummerBillSum(billsDuringYear)
document.write(`<br>Summer bills sum = ${summerBill}`)

// =============================================================================

function getSecondQuarterBillSum(billsDuringYear) {
  let secondQuarterBillSum = 0
  for (let i = 3; i < 6; i++) secondQuarterBillSum += billsDuringYear[i]

  return secondQuarterBillSum
}
const secondQuarterBill = getSecondQuarterBillSum(billsDuringYear)
document.write(`<br>Second quarter bills sum = ${secondQuarterBill}`)

// =============================================================================

function getEvenMonthBillSum(billsDuringYear) {
  let evenMonthBillSum = 0
  for (let i = 0; i < 12; i++)
    if ((i + 1) % 2 === 0) {
      evenMonthBillSum += billsDuringYear[i]
    }

  return evenMonthBillSum
}
const evenMonthBill = getEvenMonthBillSum(billsDuringYear)
document.write(`<br>Even month bills sum = ${evenMonthBill}`)

// =============================================================================

function getSeasonFirstMonthBillSum(billsDuringYear) {
  let seasonFirstMonthBillSum = 0
  for (let i = 0; i < 12; i++) {
    seasonFirstMonthBillSum =
      billsDuringYear[2] +
      billsDuringYear[5] +
      billsDuringYear[8] +
      billsDuringYear[11]
  }
  return seasonFirstMonthBillSum
}
const seasonFirstMonthBill = getSeasonFirstMonthBillSum(billsDuringYear)
document.write(`<br>Season first month bills sum = ${seasonFirstMonthBill}`)
