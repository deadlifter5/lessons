//Введення даних
let a = parseFloat(prompt("Ввести число a:", "0"))
let b = parseFloat(prompt("Ввести число b:", "0"))
let c = parseFloat(prompt("Ввести число c:", "0"))

//Розрахуноk
const S1 = a + 12 + b
const S2 = Math.sqrt((a + b) / (2 * a))
const S3 = Math.cbrt((a + b) * c)
const S4 = Math.sin(a / -b)

//Вивід результату
document.write(`<h1>Результат a=${a}, b=${b}, c=${c}</h1>
  <ol>
    <li>S1=${S1}</li>
    <li>S2=${S2}</li>
    <li>S3=${S3}</li>
    <li>S4=${S4}</li>
  </ol>`)
