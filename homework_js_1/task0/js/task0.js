const passengersPerBus = 20
const bottlesPerPassenger = 2
const butterbrotsPerPassenger = 3

const { createApp } = Vue

createApp({
  data() {
    return {
      passengersNumber: 0,
    }
  },

  computed: {
    busesNumber() {
      return Math.ceil(this.passengersNumber / passengersPerBus)
    },
    bottlesNumber() {
      return this.passengersNumber * bottlesPerPassenger
    },
    butterbrotsNumber() {
      return this.passengersNumber * butterbrotsPerPassenger
    },
  },
}).mount("#app")
