const { createApp } = Vue

const listLoginPasword = [
  { login: "ivan", password: "111" },
  { login: "bbb", password: "222" },
  { login: "ccc", password: "333" },
  { login: "ddd", password: "444" },
]

createApp({
  data() {
    return {
      login: "",
      password: "",
      welcome:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png",
    }
  },
  methods: {
    go() {
      return listLoginPasword.find(
        (user) => user.login === this.login && user.password === this.password
      )
    },
  },

  computed: {
    isDataValid() {
      return this.login && this.password
    },
    isDataCorrect() {
      return listLoginPasword.find(
        (user) => user.login === this.login && user.password === this.password
      )
    },
    colorError() {
      if (this.login === "ivan") return "error-blue"
      else return "error-red"
    },
  },
}).mount("#app")
