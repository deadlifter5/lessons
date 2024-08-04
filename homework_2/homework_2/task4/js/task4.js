//Введення даних
let cmLength = parseFloat(prompt("Ввести довжину в см:", "0"))

//Розрахуноk
const meterLength = cmLength / 100
const kmLength = meterLength / 1000
//Вивід результату
document.write(`<h1>Довжина: ${cmLength} сантиметрів</h1
<ul>
    <li>${meterLength} метрів</li> 
	<li>${kmLength} кілометрів</li>
</ul>`)
