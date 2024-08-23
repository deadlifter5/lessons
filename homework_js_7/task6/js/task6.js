function getCmToInch() {
  return cm / 2.54
}
function getKgToLbs() {
  return kg / 0.45359237
}
function getKmToMile() {
  return km / 1.609344
}

let cm = parseFloat(prompt("Enter value in cm", "500"))
let kg = parseFloat(prompt("Enter value in kg", "30"))
let km = parseFloat(prompt("Enter value in km", "70"))

let inch = getCmToInch()
let lbs = getKgToLbs()
let mile = getKmToMile()
document.write(`${cm} cm = ${inch.toFixed(2)} inches<br>`)
document.write(`${kg} kg = ${lbs.toFixed(4)} pounds<br>`)
document.write(`${km} km = ${mile.toFixed(3)} miles<br>`)
