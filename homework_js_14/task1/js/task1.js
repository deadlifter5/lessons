alert("Result in console")

const webSiteDevCompArr = [
  {
    companyName: "Starlight",
    companyOwner: "James Goodman",
    sponsors: [
      { surName: "Wright", firstName: "Jack", inversion: 50000 },
      { surName: "White", firstName: "Alan", inversion: 100000 },
    ],
    productionYear: 2001,
    totalCost: 150000,
  },
  {
    companyName: "Supernova",
    companyOwner: "Alan Bradley",
    sponsors: [
      { surName: "Ross", firstName: "Elon", inversion: 150000 },
      { surName: "Moore", firstName: "Jake", inversion: 70000 },
    ],
    productionYear: 2009,
    totalCost: 220000,
  },
  {
    companyName: "Aurus",
    companyOwner: "Barry James",
    sponsors: [
      { surName: "Johnson", firstName: "Aaron", inversion: 50000 },
      { surName: "Gordon", firstName: "Antony", inversion: 45000 },
    ],
    productionYear: 2011,
    totalCost: 95000,
  },
  {
    companyName: "Normandy",
    companyOwner: "Duglas Williamson",
    sponsors: [
      { surName: "Wayne", firstName: "Bruce", inversion: 8000 },
      { surName: "Kent", firstName: "Clark", inversion: 1500 },
    ],
    productionYear: 2008,
    totalCost: 9500,
  },
  {
    companyName: "Mery&Co",
    companyOwner: "Mery Taylor",
    sponsors: [
      { surName: "Bolton", firstName: "Lance", inversion: 200000 },
      { surName: "Jason", firstName: "Amamnda", inversion: 100000 },
    ],
    productionYear: 2019,
    totalCost: 300000,
  },
  {
    companyName: "Omnilab",
    companyOwner: "William Connolly",
    sponsors: [
      { surName: "Scrooge", firstName: "Russel", inversion: 10000 },
      { surName: "James", firstName: "Moris", inversion: 50000 },
    ],
    productionYear: 2007,
    totalCost: 60000,
  },
  {
    companyName: "Crytech",
    companyOwner: "Elizabeth Vaughan",
    sponsors: [
      { surName: "Watson", firstName: "Jeremy", inversion: 1300 },
      { surName: "Irons", firstName: "Albert", inversion: 1200 },
    ],
    productionYear: 2015,
    totalCost: 2500,
  },
]

// ==========================================================================================
// Знайти:
// 1. загальну вартість усіх сайтів.

let allSitesTotalCost = webSiteDevCompArr.reduce(
  (prevCost, webSite) => prevCost + webSite.totalCost,
  0
)
console.log(`1.Total cost of all web sites: ${allSitesTotalCost}`)

// ==========================================================================================
// 2. кількість сайтів, що було зроблено між 2000 та 2009 рр.

const between2000And2009Count = webSiteDevCompArr.reduce(
  (prevCount, webSite) =>
    webSite.productionYear > 2000 && webSite.productionYear < 2009
      ? prevCount + 1
      : prevCount,
  0
)
console.log(
  `2.Websites developed between 2000 and 2009: ${between2000And2009Count}`
)

// ==========================================================================================
// 3.кількість сайтів, де сума спонсорських вкладень була більшою за 100000..

const greater100000Count = webSiteDevCompArr.reduce((count, { sponsors }) => {
  const currentTotalInversion = sponsors.reduce(
    (prevSum, object) => prevSum + object.inversion,
    0
  )
  return currentTotalInversion > 100000 ? count + 1 : count
}, 0)

console.log(
  `3.Projects with inversion greater than 100000: ${greater100000Count}`
)

// ==========================================================================================
// 4.створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
function sponsorsList() {
  return webSiteDevCompArr.map((el) => el.sponsors)
}
console.log("4.")
console.log(sponsorsList())

// ==========================================================================================
// 5.знайти рік, коли прибуток був найбільшим
const maxProfitYear = webSiteDevCompArr.reduce(
  (maxYear, webSite) =>
    webSite.totalCost > maxYear.totalCost ? webSite : maxYear,
  webSiteDevCompArr[0]
).productionYear

console.log(`5.Year with max profit: ${maxProfitYear}`)

// ==========================================================================================
// 6.упорядкувати список за спаданням прибутку
function getSortedList() {
  const profitSortedList = webSiteDevCompArr.sort((el1, el2) => {
    if (el1.totalCost > el2.totalCost) return -1
    else if (el1.totalCost < el2.totalCost) return 1
    else return 0
  })
  return profitSortedList
}
getSortedList()
console.log("6.")
console.log(getSortedList())

// ==========================================================================================
// 7.Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
console.log("7.1")
const less10000List = webSiteDevCompArr.filter((el) => el.totalCost > 10000)
console.log(less10000List)

console.log("7.2")
const more10000List = webSiteDevCompArr.filter((el) => el.totalCost < 10000)
console.log(more10000List)
