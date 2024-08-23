function getTemperature() {
  const minTemp = -10
  const maxTemp = 10
  let tempSum = 0
  for (let temp = 1; temp <= 10; temp++) {
    let randTemp = minTemp + Math.floor(Math.random() * (maxTemp - minTemp + 1))
    if (randTemp > 0) tempSum++
    document.write(`Temperature ${temp} = ${randTemp}<br>`)
  }
  document.write(`High temperature sum = ${tempSum}`)
}
getTemperature()
