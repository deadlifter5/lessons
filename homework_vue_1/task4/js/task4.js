const { createApp } = Vue

createApp({
  data() {
    return {
      listLoginPas: [
        { login: "aaa", password: "111" },
        { login: "bbb", password: "222" },
        { login: "ccc", password: "333" },
        { login: "ddd", password: "444" },
      ],
    }
  },
  methods: {
    go() {
      user = this.listLoginPas.find(
        (user) => user.login === this.login && user.password === this.password
      )
      return user ? alert("Welcome!") : alert("Invalid data! Try again.")
    },
  },
  computed: {},
}).mount("#app")
