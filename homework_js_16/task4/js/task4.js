class TBankomat {
  constructor() {
    this.nominals = []
  }
  getMaxCash() {
    return this.nominals.reduce(
      (prevSum, nominals) => prevSum + nominals.Nominal * nominals.Number,
      0
    )
  }

  toString() {
    return `Nominal 5: ${this.nominals[0].Number}<br>
	Nominal 10: ${this.nominals[1].Number}<br>
	Nominal 20: ${this.nominals[2].Number}<br>
	Nominal 50: ${this.nominals[3].Number}<br>
	Nominal 100: ${this.nominals[4].Number}<br>
	Nominal 200: ${this.nominals[5].Number}<br>`
  }
}
class Bill {
  #nominal
  #number
  constructor(nominal, number) {
    this.Nominal = nominal
    this.Number = number
  }
  get Nominal() {
    return this.#nominal
  }
  set Nominal(newNominal) {
    if (newNominal <= 0) {
      throw new Error("Wrong nominal!")
    } else this.#nominal = newNominal
  }

  get Number() {
    return this.#number
  }
  set Number(newNumber) {
    if (newNumber < 0) {
      throw new Error("Number can not be lower than 0!")
    } else this.#number = newNumber
  }
}
try {
  const bank = new TBankomat()
  const n5 = new Bill(5, 77)
  const n10 = new Bill(10, 55)
  const n20 = new Bill(20, 44)
  const n50 = new Bill(50, 33)
  const n100 = new Bill(100, 22)
  const n200 = new Bill(200, 11)
  bank.nominals.push(n5, n10, n20, n50, n100, n200)

  document.write(`${bank}`)
  document.write(`Maximum cash to withdraw: ${bank.getMaxCash()} UAH`)
} catch (error) {
  console.log(error.message)
}
