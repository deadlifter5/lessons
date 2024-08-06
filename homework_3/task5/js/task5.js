//Введення даних
let driverLicenceCategory = prompt("Ввести категорію (A, B або С):", "А")

//Розрахуноk
if (driverLicenceCategory === "A") alert(`Можна керувати мотоциклом!`)
else if (driverLicenceCategory === "B") alert(`Можна керувати автомобілем!`)
else if (driverLicenceCategory === "C") alert(`Можна керувати вантажівкою!`)
else alert(`!Некорекне значення!`)
