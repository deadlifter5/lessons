function table() {
  document.write(`<table border="1">`)
  for (let colNumber = 1; colNumber <= userColNumber; colNumber++) {
    document.write(`<tr>`)
    for (let rowNumber = 1; rowNumber <= userRowsNumber; rowNumber++) {
      document.write(`<td>Carpe diem!</td>`)
    }
    document.write(`</tr>`)
  }
  document.write(`</table>`)
}
let userColNumber = parseInt(prompt("Enter columns number"))
let userRowsNumber = parseInt(prompt("Enter rows number"))
table()
