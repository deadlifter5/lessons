//Введення даних
let a = parseFloat(prompt("Ввести число a:", "0"))
let b = parseFloat(prompt("Ввести число b:", "0"))

//Розрахуноk
const sum = a + b
const mult = a * b
const div = a / b

//Вивід результату
document.write(`<h1>Результат a=${a}, b=${b}</h1>
	<ol>
	  <li>Сума=${sum}</li>
	  <li>Добуток=${mult}</li>
	  <li>Частка=${div}</li>
	</ol>`)
