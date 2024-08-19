let investedMoney = parseFloat(prompt("Ввести суму вкладення (тис. грн.)"))
const interestPerYear = 20
const taxPerYear = 5
let totalIncome = 0
let totalTax = 0
for (let yearNum = 0; yearNum < 20; yearNum++) {
  const incomePerYear = (investedMoney * interestPerYear) / 100
  totalIncome += incomePerYear
  const yearTax = (incomePerYear * taxPerYear) / 100
  totalTax += yearTax
}
document.write(
  `Сума доходу за 20 років = ${totalIncome} грн., податок склав = ${totalTax} грн.`
)
