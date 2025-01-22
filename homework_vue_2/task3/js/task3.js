const { createApp } = Vue

const workersList2 = [
  {
    id: "111",
    name: "Іванов",
    salary: 10000,
  },
  {
    id: "112",
    name: "Петров",
    salary: 20000,
  },
  {
    id: "113",
    name: "Сидоров",
    salary: 50000,
  },
]

createApp({
  data() {
    return {}
  },
  methods: {},

  computed: {
    workersList() {
      return workersList2
    },
  },
}).mount("#app")
