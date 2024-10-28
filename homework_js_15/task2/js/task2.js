class Car {
  constructor(carBrand, tankSize, availableFuel, seatsNum, passangersNum) {
    this.carBrand = carBrand
    this.tankSize = tankSize
    this.availableFuel = availableFuel
    this.seatsNum = seatsNum
    this.passangersNum = passangersNum
  }

  getRefuel(litersRefuel) {
    if (litersRefuel > this.tankSize - this.availableFuel)
      alert(`Error! The tank size is ${this.tankSize} liters!`)
    return `15 liters refuel (${
      this.availableFuel
    } + ${litersRefuel}) = ${(this.availableFuel += litersRefuel)}<br>`
  }
  getPassangersNum() {
    return `Passangers quantity = ${this.passangersNum}<br>`
  }
  getPassangersIn(passangersIn) {
    if (passangersIn > this.seatsNum - this.passangersNum)
      alert(`Error! Max passangers number is ${this.seatsNum}`)
    return `Get passangers in (${
      this.passangersNum
    } + ${passangersIn}) = ${(this.passangersNum += passangersIn)}<br>`
  }
  getPassangersOut(passangersOut) {
    return `Get passangers out (${this.passangersNum} - ${passangersOut}) =  ${
      this.passangersNum - passangersOut
    }<br>`
  }
}
const newCar = new Car("Audi", 45, 25, 4, 2)
document.write(
  newCar.getRefuel(parseInt(prompt("Enter liters number to refuel", "15")))
)
document.write(newCar.getPassangersNum())
document.write(
  newCar.getPassangersIn(
    parseInt(prompt("Enter passangers number to get in", "2"))
  )
)
document.write(
  newCar.getPassangersOut(
    parseInt(prompt("Enter passangers number to get out", "1"))
  )
)
