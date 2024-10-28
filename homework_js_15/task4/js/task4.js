const imgObjArr = [
  {
    image: '<img src="../task4/img/img1.jpeg">',
    link: "https://www.pexels.com/photo/lake-and-mountain-417074/",
  },
  {
    image: '<img src="../task4/img/img2.jpeg">',
    link: "https://www.pexels.com/photo/scenic-view-of-mountains-during-dawn-1266810/",
  },
  {
    image: '<img src="../task4/img/img3.jpeg">',
    link: "https://www.pexels.com/photo/green-tree-268533/",
  },
  {
    image: '<img src="../task4/img/img4.jpeg">',
    link: "https://www.pexels.com/photo/brown-wooden-dock-414612/",
  },
  {
    image: '<img src="../task4/img/img5.jpeg">',
    link: "https://www.pexels.com/photo/dock-under-cloudy-sky-in-front-of-mountain-206359/",
  },
  {
    image: '<img src="../task4/img/img6.jpeg">',
    link: "https://www.pexels.com/photo/green-hill-near-body-of-water-462162/",
  },
]

class Baner {
  constructor(imgObjArr) {
    this.imgObjArr = imgObjArr
  }
  getRandomImg() {
    let randomElement = Math.floor(Math.random() * this.imgObjArr.length)
    return this.imgObjArr[randomElement]
  }
  upBaner() {
    let randomImg = this.getRandomImg()
    return document.write(
      `<div><a href="${randomImg.link}" target="_blank">${randomImg.image}</a></div>`
    )
  }
}
const res = new Baner(imgObjArr)
res.upBaner()
