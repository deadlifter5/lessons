let investedMoney = parseFloat(prompt("Ввести суму вкладення (тис. грн.)"))
const interestPerYear1 = 20
const interestPerYear2 = 27
let totalIncome1 = 0
let totalIncome2 = 0
for (let yearNum = 0; yearNum < 20; yearNum++) {
  const incomePerYear1 = (investedMoney * interestPerYear1) / 100
  totalIncome1 += incomePerYear1
}
for (let yearNum2 = 0; yearNum2 < 17; yearNum2++) {
  const incomePerYear2 = (investedMoney * interestPerYear2) / 100
  totalIncome2 += incomePerYear2
}

document.write(`Сума доходу за 20 років = ${totalIncome1 + totalIncome2} грн.`)
