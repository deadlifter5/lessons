alert("Result in console")

let userDate = {
  day: parseInt(prompt("Enter day number", "30")),
  month: parseInt(prompt("Enter month number", "9")),
  year: parseInt(prompt("Enter year number", "2024")),
}

function getMonthInN({ month }, N) {
  return (Math.floor(month - 1 + N) % 12) + 1
}
console.log(getMonthInN(userDate, parseInt(prompt("Enter number N", "21"))))
