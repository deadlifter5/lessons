let productsTitles = ["Coffee", "Juice", "Tea", "Phone", "Car"]
let productsPrices = [2, 3, 1.5, 500, 20000]
let buyerMoney = parseFloat(prompt("Enter money amount you have", "700"))
for (let i = 0; i < productsPrices.length; i++) {
  if (productsPrices[i] <= buyerMoney)
    document.write(`Buyer can buy: ${productsTitles[i]}<br>`)
}
