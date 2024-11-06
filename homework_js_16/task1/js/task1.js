class TDate {
  #day
  #month
  #year
  constructor(initDay, initMonth, initYear) {
    this.Day = initDay
    this.Month = initMonth
    this.Year = initYear
  }

  get Day() {
    return this.#day
  }
  set Day(newDay) {
    if (newDay < 1 || newDay > 31)
      throw new Error("Introduced value is not correct!")
    this.#day = newDay
  }

  get Month() {
    return this.#month
  }
  set Month(newMonth) {
    if (newMonth < 1 || newMonth > 12)
      throw new Error("Introduced value is not correct!")
    this.#month = newMonth
  }

  get Year() {
    return this.#year
  }
  set Year(newYear) {
    if (newYear < 1) throw new Error("Introduced value is not correct!")
    this.#year = newYear
  }

  addDays(days) {
    this.#day += days
    if (this.#day > 31) {
      const months = Math.floor(this.#day / 31)
      this.#day = ((this.#day - 1) % 31) + 1
      this.addMonths(months)
    } else this.#day
  }
  subDays(days) {
    this.#day -= days
    if (this.#day < 1) {
      const months = Math.ceil(Math.abs((this.#day - 1) / 31))
      this.#day = 31 - (Math.abs(this.#day) % 31)
      this.subMonths(months)
    }
  }

  addMonths(months) {
    this.#month += months
    if (this.#month > 12) {
      const years = Math.floor(this.#month / 12)
      this.#month = ((this.#month - 1) % 12) + 1
      this.addYears(years)
    } else this.#month
  }
  subMonths(months) {
    this.#month -= months
    if (this.#month < 1) {
      const years = Math.ceil(Math.abs((this.#month - 1) / 12))
      this.#month = 12 - (Math.abs(this.#month) % 12)
      this.subYears(years)
    }
  }
  addYears(years) {
    this.#year += years
  }
  subYears(years) {
    this.#year -= years
  }

  toString() {
    return `${this.Day}.${this.Month}.${this.Year}`
  }
}

try {
  const date = new TDate(31, 10, 2024)

  document.write(date)
} catch (error) {
  alert(error.message)
}
