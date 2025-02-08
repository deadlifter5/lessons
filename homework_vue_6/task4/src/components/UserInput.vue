<template>
  <div>
    <label>
      User name:
      <input type="text" :class="stateName" v-model="userNameValue" />
    </label>
    <label>
      User age:
      <input type="number" :class="stateAge" v-model="userAgeValue" />
    </label>
  </div>
</template>

<script>
export default {
  name: "UserInput",

  props: {
    userName: { type: String },
    userNameModifiers: { default: () => ({}) },
    userAge: { type: Number },
    userAgeModifiers: { default: () => ({}) },
  },

  data() {
    return {
      stateName: "red",
    }
  },

  computed: {
    userNameValue: {
      get() {
        return this.userName
      },

      set(newVal) {
        if (this.userNameModifiers.inputColor && newVal === null) {
          this.stateName = "red"
        } else {
          this.stateName = null
        }
        this.$emit("update:userName", newVal)
      },
    },

    userAgeValue: {
      get() {
        return this.userAge
      },
      set(newVal) {
        if (this.userAgeModifiers.inputColor && newVal < 18) {
          this.stateAge = "red"
        } else {
          this.stateAge = "green"
        }
        this.$emit("update:userAge", newVal)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.red {
  background-color: red;
}
.green {
  background-color: green;
}
</style>
