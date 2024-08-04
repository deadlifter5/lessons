//Введення даних
let productPrice = parseFloat(prompt("Ввести ціну:", "0"))
let productQuantity = parseFloat(prompt("Ввести кількість:", "0"))

//Розрахуноk
const totalValue = productQuantity * productPrice
const pdv = totalValue * 0.05
//Вивід результату
document.write(`<h1>Результат: ціна одиниці товару = ${productPrice}, кількість товару = ${productQuantity}</h1>
<ul>
    <li>Загальна вартість = ${totalValue}</li> 
	<li>ПДВ = ${pdv}</li>
</ul>`)
