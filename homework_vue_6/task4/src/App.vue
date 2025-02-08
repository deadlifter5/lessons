<template>
  <user-input
    v-model:userName.inputColor="userName"
    v-model:userAge.inputColor="userAge"
  />
</template>

<script>
import UserInput from "@/components/UserInput.vue"

export default {
  name: "App",
  components: {
    UserInput,
  },
  data() {
    return {
      userName: null,
      userAge: null,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
