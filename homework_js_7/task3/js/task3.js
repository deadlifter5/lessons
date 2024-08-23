function getDayType(dayNumber) {
  let dayType
  switch (dayNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      dayType = "Working day"
      break
    case 6:
    case 7:
      dayType = "Free day"
      break
  }
  return dayType
}
let dayNumber = parseInt(prompt("Enter day number(1 to 7)"))
let day = getDayType(dayNumber)
document.write(`Day type: ${day}`)
