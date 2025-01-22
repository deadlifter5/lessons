const { createApp } = Vue

createApp({
  data() {
    return {
      cabinClass: null,
      businessClassOptions: null,
      economyClassOptions: null,
      cognacOptions: null,
    }
  },
  computed: {
    isClassSelected() {
      return this.cabinClass
    },
    isBusinessClass() {
      return this.cabinClass === "business"
    },
    isCognac() {
      return this.businessClassOptions === "cognac"
    },
    cabinClassBackground() {
      return this.isBusinessClass ? "business-background" : "economy-background"
    },
  },
}).mount("#app")
