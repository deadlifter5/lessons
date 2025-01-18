const { createApp } = Vue

createApp({
  data() {
    return {
      rangeStart: 0,
      rangeEnd: 0,
    }
  },
  computed: {
    isButtonDisabled() {
      return this.rangeStart === 0 && this.rangeEnd === 0
    },
  },
  methods: {
    getRandomNumber() {
      return (
        this.rangeStart +
        Math.floor(Math.random() * (this.rangeEnd - this.rangeStart + 1))
      )
    },
    onClear() {
      this.rangeStart = 0
      this.rangeEnd = 0
    },
  },
}).mount("#app")
