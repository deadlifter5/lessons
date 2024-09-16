let profits = [
  [103, 255, 56, 266, 41, 22, 96],
  [108, 264, 19, 825, 71, 52, 91],
  [106, 144, 55, 263, 21, 22, 90],
  [100, 615, 54, 267, 17, 28, 99],
  [211, 179, 23, 299, 18, 21, 92],
  [322, 165, 75, 227, 11, 32, 97],
  [421, 164, 54, 216, 14, 29, 19],
  [143, 113, 54, 214, 16, 27, 98],
]

const totalWeekProfits = profits.map((shopProfit) =>
  shopProfit.reduce((totalProfit, profit) => totalProfit + profit, 0)
)
document.write(`1. Total week profit = ${totalWeekProfits}<br>`)

// ==========================================================

let totalProfitMondey = 0
for (let shopNum = 0; shopNum < 8; shopNum++) {
  for (let dayNum = 0; dayNum < 1; dayNum++) {
    totalProfitMondey += profits[shopNum][dayNum]
  }
}
document.write(`2. Monday profit = ${totalProfitMondey}<br>`)

// ==========================================================

let totalProfitTuesday = 0
for (let shopNum = 0; shopNum < 8; shopNum++) {
  for (let dayNum = 1; dayNum < 2; dayNum++) {
    totalProfitTuesday += profits[shopNum][dayNum]
  }
}
document.write(`Tuesday profit = ${totalProfitTuesday}<br>`)

// ==========================================================

let totalProfitWednesday = 0
for (let shopNum = 0; shopNum < 8; shopNum++) {
  for (let dayNum = 2; dayNum < 3; dayNum++) {
    totalProfitWednesday += profits[shopNum][dayNum]
  }
}
document.write(`Wednesday profit = ${totalProfitWednesday}<br>`)

// ==========================================================

let totalProfitThursday = 0
for (let shopNum = 0; shopNum < 8; shopNum++) {
  for (let dayNum = 3; dayNum < 4; dayNum++) {
    totalProfitThursday += profits[shopNum][dayNum]
  }
}
document.write(`Thursday profit = ${totalProfitThursday}<br>`)

// ==========================================================

let totalProfitFriday = 0
for (let shopNum = 0; shopNum < 8; shopNum++) {
  for (let dayNum = 4; dayNum < 5; dayNum++) {
    totalProfitFriday += profits[shopNum][dayNum]
  }
}
document.write(`Friday profit = ${totalProfitFriday}<br>`)

// ==========================================================

let totalProfitSaturday = 0
for (let shopNum = 0; shopNum < 8; shopNum++) {
  for (let dayNum = 5; dayNum < 6; dayNum++) {
    totalProfitSaturday += profits[shopNum][dayNum]
  }
}
document.write(`Saturday profit = ${totalProfitSaturday}<br>`)

// ==========================================================

let totalProfitSunday = 0
for (let shopNum = 0; shopNum < 8; shopNum++) {
  for (let dayNum = 6; dayNum < 7; dayNum++) {
    totalProfitSunday += profits[shopNum][dayNum]
  }
}
document.write(`Sunday profit = ${totalProfitSunday}<br>`)

// ==========================================================

let totalProfitMidweek = 0
for (let shopNum = 0; shopNum < 8; shopNum++) {
  for (let dayNum = 0; dayNum < 5; dayNum++) {
    totalProfitMidweek += profits[shopNum][dayNum]
  }
}
document.write(`3. Midweek profit = ${totalProfitMidweek}<br>`)

// ==========================================================

let totalProfitWeekend = 0
for (let shopNum = 0; shopNum < 8; shopNum++) {
  for (let dayNum = 5; dayNum < 7; dayNum++) {
    totalProfitWeekend += profits[shopNum][dayNum]
  }
}
document.write(`4. Weekend profit = ${totalProfitWeekend}<br>`)

// ==========================================================

const wednesdayMax = Math.max(...profits.map((shopProfit) => shopProfit[2]))
document.write(`5. Wednesday max profit = ${wednesdayMax}<br>`)

// ==========================================================

let profits1 = profits.flat(Infinity)

let profitsGreater20 = profits1.filter((shopProfit) => shopProfit > 200)

document.write(`6. Profit greater than 20 = ${profitsGreater20}<br>`)

// ==========================================================

const sortedWeekProfits = profits.map((shopProfit) =>
  [...shopProfit].sort((profit1, profit2) => profit1 - profit2)
)
document.write(`7. Sorted week profits: ${sortedWeekProfits}<br>`)

// ==========================================================

let maxProfit = profits.reduce(
  (maxProfit, profit) => (profit > maxProfit ? profit : maxProfit),
  profits[0]
)
document.write(`${maxProfit}`)
