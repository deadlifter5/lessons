function getTemperature() {
  const minTemp = -10
  const maxTemp = 10
  let lowTepmSum = 0
  for (let temp = 1; temp <= 10; temp++) {
    let randomTemp =
      minTemp + Math.floor(Math.random() * (maxTemp - minTemp + 1))

    if (randomTemp < 0) lowTepmSum++
    document.write(`Temperature ${temp} = ${randomTemp}<br>`)
  }
  document.write(`Low temperatures sum = ${lowTepmSum}`)
}
getTemperature()
