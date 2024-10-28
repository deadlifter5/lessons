const rabbitsFieldArr = [0, 1, 0, 1, 0, 0, 1, 0]
class ShootingRoom {
  constructor(rabbitsFieldArr) {
    this.rabbitsFieldArr = rabbitsFieldArr
  }
  getUserShot() {
    let userShot = parseInt(prompt(`Enter number from 0 to 7`))
    return userShot
  }
  getShotCount(count = 0) {
    do {
      let userShot = this.getUserShot()
      if (userShot >= 0 && userShot <= 7) {
        if (this.rabbitsFieldArr[userShot] === 1) {
          count++
          alert(`You've got a rabbit!`)
        } else {
          alert(`You missed!`)
        }
      } else {
        alert(`Wrong number! Try again!`)
      }
    } while (count < 3)
    alert(`There is no rabbits left, you've got them all!`)
  }
}

const shootingField = new ShootingRoom(rabbitsFieldArr)
shootingField.getShotCount()
