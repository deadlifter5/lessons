function getSeason(monthNumber) {
  let season
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      season = "Winter"
      break
    case 3:
    case 4:
    case 5:
      season = "Spring"
      break
    case 6:
    case 7:
    case 8:
      season = "Summer"
      break
    case 9:
    case 10:
    case 11:
      season = "Autumn"
      break
    default:
      throw new Error("Month is not correct")
  }
  return season
}
let monthNumber = parseInt(prompt("Enter month number"))
try {
  let result = getSeason(monthNumber)
  document.write(`Season: ${result}`)
} catch (error) {
  document.write(`${error.message}`)
} finally {
  document.write(`<br>Bye!`)
}
