let userNumber = parseInt(prompt("Enter number of items"))
for (let ulNumber = 0; ulNumber < 1; ulNumber++) {
  document.write("<ul>")

  for (let liNumber = 1; liNumber <= userNumber; liNumber++) {
    document.write("<li>")

    let randomNumber = 1 + Math.floor(Math.random() * 100)

    document.write(`${randomNumber}</li>`)
  }
  document.write("</ul>")
}
