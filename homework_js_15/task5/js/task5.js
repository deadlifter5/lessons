const boysNames = ["Jack", "John", "Alex", "Walter", "Albert"]
const girlsNames = ["Monica", "Luisa", "Angela", "Ashley", "Grace"]

class DanceHead {
  constructor(boysNamesArr, girlsNamesArr) {
    this.boysNamesArr = boysNamesArr
    this.girlsNamesArr = girlsNamesArr
  }

  getRandBoyName() {
    let randBoyName = Math.floor(Math.random() * this.boysNamesArr.length)
    return this.boysNamesArr[randBoyName]
  }
  getRandGirlName() {
    let randGirlName = Math.floor(Math.random() * this.girlsNamesArr.length)
    return this.girlsNamesArr[randGirlName]
  }
  getDancePartner() {
    let boyName = this.getRandBoyName()
    let girlName = this.getRandGirlName()
    return document.write(`${boyName} + ${girlName} <br>`)
  }
  getExec() {
    return setInterval(() => this.getDancePartner(), 5000)
  }
}
const danceHead = new DanceHead(boysNames, girlsNames)
danceHead.getExec()
