let investedMoney = parseFloat(prompt("Ввести суму вкладення (тис. грн.)"))
const interestPerYear = 20
let totalIncome = 0
for (let yearNum = 0; yearNum < 20; yearNum++) {
  const incomePerYear = (investedMoney * interestPerYear) / 100
  totalIncome += incomePerYear
}
document.write(`Сума доходу за 20 років = ${totalIncome} грн.`)
