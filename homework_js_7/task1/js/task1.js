// const firstLetterCode = 65
// const lastLetterCode = 73

// for (let i = firstLetterCode; i <= lastLetterCode; i++) {
//   if (i === firstLetterCode)
//     document.write(
//       `${String.fromCharCode(i)} ${String.fromCharCode(i + 1)}<br>`
//     )
//   else if (i === lastLetterCode)
//     document.write(
//       `${String.fromCharCode(i - 1)} ${String.fromCharCode(i)}<br>`
//     )
//   else
//     document.write(
//       `${String.fromCharCode(i - 1)} ${String.fromCharCode(
//         i
//       )} ${String.fromCharCode(i + 1)}<br>`
//     )
// }
// function name(params) {}

// function getRandomWeekDay() {
//   let dayNum = 1 + Math.floor(Math.random() * (5 - 1 + 1))
//   let dayTitle
//   switch (dayNum) {
//     case 1:
//       dayTitle = "mon"
//       break
//     case 2:
//       dayTitle = "tue"
//       break
//     case 3:
//       dayTitle = "wed"
//       break
//     case 4:
//       dayTitle = "thu"
//       break
//     case 5:
//       dayTitle = "fri"
//       break
//   }
//   return dayTitle
// }
// // for (let i = 1; i <= 2; i++) {
// //   let day = getRandomWeekDay()
// document.write(
//   `<div>Day1: ${getRandomWeekDay()}</div><div>Day2: ${getRandomWeekDay()}</div>`
// )}

// function getTranslatedGreeting(lang) {
//   let resMessege
//   switch (lang) {
//     case "ua":
//       resMessege = "привіт"
//       break
//     case "en":
//       resMessege = "hello"
//       break
//   }
//   return resMessege
// }
// document.write(getTranslatedGreeting("ua"))

// let productNum1 = parseInt(prompt("Enter product number"))
// let productTitle1 = prompt("Enter product title")
// while (productNum1 > 0) {
//   let userProductNumber = parseInt(
//     prompt(`There is ${productNum1} of ${productTitle1}. How many do you want?`)
//   )
//   if (userProductNumber <= productNum1) {
//     alert("Get your product!")
//     productNum1 -= userProductNumber
//   } else alert("There is not so much!")
// }

// function sellProduct(productTitle, productNumber) {
//   while (productNumber > 0) {
//     let userProductNumber = parseInt(
//       prompt(
//         `There is ${productNumber} of ${productTitle} left. How many do you want?`
//       )
//     )
//     if (userProductNumber <= productNumber) {
//       alert("Get your product!")
//       productNumber -= userProductNumber
//     } else alert("There is not so much!")
//   }
//   alert(`Product ${productTitle} sold!!!`)
// }
// let productNumber1 = parseInt(prompt("Enter product 1 number"))
// let productTitle1 = prompt("Enter product 1 title")
// sellProduct(productTitle1, productNumber1)
// let productNumber2 = parseInt(prompt("Enter product 2 number"))
// let productTitle2 = prompt("Enter product 2 title")
// sellProduct(productTitle2, productNumber2)

// function getRandomWeekday() {
//   let dayNumber = 1 + Math.floor(Math.random() * (5 - 1 + 1))
//   let dayTitle
//   switch (dayNumber) {
//     case 1:
//       dayTitle = "mon"
//       break
//     case 2:
//       dayTitle = "tue"
//       break
//     case 3:
//       dayTitle = "wen"
//       break
//     case 4:
//       dayTitle = "thu"
//       break
//     case 5:
//       dayTitle = "fri"
//       break
//   }
//   return dayTitle
// }
// for (let i = 1; i <= 2; i++) {
//   let day = getRandomWeekday()
//   document.write(`Day ${i}: ${day}<br>`)
// }

// function getMax(num1, num2) {
//   return num1 > num2 ? num1 : num2
// }
// document.write(getMax(2, 7))

// function greetings() {
//   while (true) {
//     let userName = prompt("Enter user name")
//     alert(`Congats ${userName}!`)
//     if (userName === "ivan") return
//   }
// }
// greetings()
// document.write(`The end!!!`)

function getSeason() {
  let monthNumber = parseInt(prompt("Enter month number(1 to 12)"))
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
  }
  return season
}

let season = getSeason()
document.write(`Season: ${season}`)
