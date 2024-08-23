let monthNumber = parseInt(prompt("Enter month number(1 to 12)"))
function getMonthTitle() {
  let monthTitle
  switch (monthNumber) {
    case 1:
      monthTitle = "January"
      break
    case 2:
      monthTitle = "February"
      break
    case 3:
      monthTitle = "March"
      break
    case 4:
      monthTitle = "April"
      break
    case 5:
      monthTitle = "May"
      break
    case 6:
      monthTitle = "June"
      break
    case 7:
      monthTitle = "July"
      break
    case 8:
      monthTitle = "August"
      break
    case 9:
      monthTitle = "September"
      break
    case 10:
      monthTitle = "October"
      break
    case 11:
      monthTitle = "November"
      break
    case 12:
      monthTitle = "December"
      break
  }
  return monthTitle
}
let month = getMonthTitle()
document.write(`Month: ${month}`)
