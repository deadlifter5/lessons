//Введення даних
let product1Price = parseFloat(prompt("Ввести ціну товару 1:", "0"))
let product2Price = parseFloat(prompt("Ввести ціну товару 2:", "0"))
let product3Price = parseFloat(prompt("Ввести ціну товару 3:", "0"))
let product1Quantity = parseInt(prompt("Ввести кількість товару 1:", "0"))
let product2Quantity = parseInt(prompt("Ввести кількість товару 2:", "0"))
let product3Quantity = parseInt(prompt("Ввести кількість товару 3:", "0"))

//Розрахуноk
const product1Value = product1Price * product1Quantity
const product2Value = product2Price * product2Quantity
const product3Value = product3Price * product3Quantity
const totalValue = product1Value + product2Value + product3Value
//Вивід результату
document.write(`
<ul>
    <li>Вартість товару номер 1: ${product1Value} грн.</li>
	<li>Вартість товару номер 2: ${product2Value} грн.</li>
	<li>Вартість товару номер 3: ${product3Value} грн.</li>
	<li>Загальна вартість: ${totalValue} грн.</li>
</ul>`)
