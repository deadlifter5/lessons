let totalBoxNumber = 15

while (totalBoxNumber > 0) {
  const userBoxNumber = parseInt(
    prompt("Ввести кількість ящиків для завантаження")
  )
  if (userBoxNumber <= totalBoxNumber) {
    alert(`Залишається ${totalBoxNumber - userBoxNumber} ящиків`)
    totalBoxNumber -= userBoxNumber
  } else alert("Недостатньо ящиків!")
}
