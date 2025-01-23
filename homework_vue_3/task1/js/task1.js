const { createApp } = Vue

createApp({
  data() {
    return {
      speedLimit: null,
      currentSpeed: null,
    }
  },
  methods: {
    // sdf() {
    //   setInterval(() => {
    //     isWarningVisible()
    //   }, interval)
    // },
    // setInterval(() => {
    // }, interval);
  },

  computed: {
    speedColor() {
      let currentSpeedState
      if (this.currentSpeed) {
        if (this.currentSpeed < this.speedLimit * 0.5)
          currentSpeedState = "less50"
        else if (
          this.currentSpeed >= this.speedLimit * 0.5 &&
          this.currentSpeed <= this.speedLimit
        )
          currentSpeedState = "from50to100"
        else currentSpeedState = "over100"
      }
      return currentSpeedState
    },
    isWarningVisible() {
      return this.currentSpeed > this.speedLimit * 0.9
    },
  },
}).mount("#app")
