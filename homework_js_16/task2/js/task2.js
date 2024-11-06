class TMoney {
  #moneyCount
  #exchangeRate
  constructor(initMoneyCount, initExchangeRate) {
    this.MoneyCount = initMoneyCount
    this.ExchangeRate = initExchangeRate
  }
  get MoneyCount() {
    return this.#moneyCount
  }
  set MoneyCount(newMoneyCount) {
    if (newMoneyCount < 0) throw new Error("Introduced value is not correct!")
    this.#moneyCount = newMoneyCount
  }
  get ExchangeRate() {
    return this.#exchangeRate
  }
  set ExchangeRate(newExchangeRate) {
    if (newExchangeRate < 0) throw new Error("Introduced value is not correct!")
    this.#exchangeRate = newExchangeRate
  }

  increaseMoneyCount(increaseValue) {
    this.#moneyCount += increaseValue / this.#exchangeRate
  }
  decreaseMoneyCount(decreaseValue) {
    this.#moneyCount -= decreaseValue / this.#exchangeRate
  }
  toString() {
    return `Money count: ${this.MoneyCount} usd<br> USD to UAH exchange rate: ${this.ExchangeRate}`
  }
}
try {
  const account = new TMoney(300, 40)
  account.increaseMoneyCount(100)
  document.write(account)
} catch (error) {
  alert(error.message)
}
