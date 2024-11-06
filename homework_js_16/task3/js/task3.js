class Service {
  constructor(serviceName, serviceCost, serviceDeadline) {
    this.serviceName = serviceName
    this.serviceCost = serviceCost
    this.serviceDeadline = serviceDeadline
  }
  toString() {
    return `${this.name} - Cost: ${this.serviceCost}<br>Deadline: ${this.serviceDeadline}`
  }
}

class Branch {
  constructor(country, city, street, number) {
    this.country = country
    this.city = city
    this.street = street
    this.number = number
  }
  toString() {
    return `${this.city}, ${this.street}, ${this.number}, ${this.country}`
  }
}

class Company {
  constructor(initName, initMonth, initYear) {
    this.companyName = initName
    this.foundationDate = {
      month: initMonth,
      year: initYear,
    }
    this.services = []
    this.branches = []
  }

  pushServices(service) {
    this.services.push(service)
  }
  pushBranches(branch) {
    this.branches.push(branch)
  }

  getCompanyAge(currentMonth, currentYear) {
    let age = currentYear - this.foundationDate.year
    if (currentMonth < this.foundationDate.month) {
      age -= 1
    }
    return age
  }

  getBranches(city) {}
  getServiceBudgetDuration(budget, duration) {}

  toString() {
    return `${this.companyName}, foundation year: ${this.foundationDate.year}<br>`
  }
}

const comp = new Company("Company-1", 8, 2000)
comp.pushServices(new Service("Service-1", 200, 5))
comp.pushServices(new Service("Service-2", 350, 8))
comp.pushServices(new Service("Service-3", 100, 3))

comp.pushBranches(new Branch("US", "San Francisco", "Street-1", 7))
comp.pushBranches(new Branch("UK", "Liverpool", "Street-2", 86))
comp.pushBranches(new Branch("Canada", "Montreal", "Strret-3", 23))

document.write(comp.toString())

const currentMonth = 11
const currentYear = 2024

document.write(
  `Founded ${comp.getCompanyAge(currentMonth, currentYear)} years ago<br>`
)
