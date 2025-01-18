const { createApp } = Vue

createApp({
  data() {
    return {
      monthNumber: 1,
    }
  },

  computed: {
    clothesType() {
      if (this.monthNumber < 1 || this.monthNumber > 12) {
        return alert("Invalid value!")
      }

      switch (this.monthNumber) {
        case 12:
        case 1:
        case 2:
          clothes = "winter: Coat"
          break
        case 3:
        case 4:
        case 5:
          clothes = "spring: Shirt"
          break
        case 6:
        case 7:
        case 8:
          clothes = "summer: Shorts"
          break
        case 9:
        case 10:
        case 11:
          clothes = "autumn: Jacket"
          break
      }
      return clothes
    },
    seasonImg() {
      if (this.monthNumber < 1 || this.monthNumber > 12) {
        return alert("Invalid value!")
      }

      switch (this.monthNumber) {
        case 12:
        case 1:
        case 2:
          img = "./img/winter.jpg"
          break
        case 3:
        case 4:
        case 5:
          img = "./img/spring.jpg"
          break
        case 6:
        case 7:
        case 8:
          img = "./img/summer.jpg"
          break
        case 9:
        case 10:
        case 11:
          img = "./img/fall.jpg"
          break
      }
      return img
    },
  },
}).mount("#app")
