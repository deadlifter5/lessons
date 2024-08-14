let oddNumber = 0
let evenNumber = 0
for (let i = 1; i <= 100; i++) {
  let randomNumber = 1 + Math.floor(Math.random() * 1000)

  if (randomNumber % 2 === 0) {
    evenNumber++
  } else {
    oddNumber++
  }
}
if (evenNumber > oddNumber) {
  alert(`Парних чисел більше. Парних= ${evenNumber}, Непарних= ${oddNumber}`)
} else if (evenNumber < oddNumber) {
  alert(`Непарних чисел більше. Непарних= ${oddNumber}, Парних= ${evenNumber}`)
} else alert("Нічия")
