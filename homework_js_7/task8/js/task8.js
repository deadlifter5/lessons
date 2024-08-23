function randomImage(image) {
  const randImageIndex = 1 + Math.floor(Math.random() * 4)
  document.write(`<img src="./img/img${randImageIndex}.jpg"/>`)
}
randomImage()
