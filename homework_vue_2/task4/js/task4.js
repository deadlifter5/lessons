const { createApp } = Vue

const searchArr = [{ id: 11 }, { id: 12 }, { id: 13 }]

createApp({
  data() {
    return {}
  },
  methods: {},

  computed: {
    seachList() {
      return searchArr
    },
  },
}).mount("#app")
