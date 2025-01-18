const { createApp } = Vue

createApp({
  data() {
    return {
      totalCount: 0,
      usdRate: 41,
      eurRate: 44,
      creditVal: 0,
      withdrawVal: 0,
      serviceInterestVal: 0.03,
    }
  },
  methods: {
    creditToAccount() {
      if (this.creditVal > 0) {
        let amountToAdd = this.creditVal * 0.97
        this.totalCount += amountToAdd
      }
    },
    withdraw() {
      if (this.withdrawVal > 0 && this.withdrawVal <= this.totalCount) {
        let amountToWithdraw = this.withdrawVal * 0.97
        this.accountAmount -= amountToWithdraw
      } else if (this.withdrawVal > this.totalCount)
        alert("Insufficient credits!")
    },
  },
  computed: {
    serviceInterest() {
      return (
        (this.creditVal + this.withdrawVal) * this.serviceInterestVal.toFixed(2)
      )
    },
    exchangeEur() {
      return (this.totalCount / this.eurRate).toFixed(2)
    },
    exchangeUsd() {
      return (this.totalCount / this.usdRate).toFixed(2)
    },
  },
}).mount("#app")
