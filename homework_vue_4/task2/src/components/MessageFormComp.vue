<template>
  <div>
    <label>
      <input
        type="text"
        placeholder="Type a new message"
        v-model="messageText"
      />
    </label>
    <button @click="onSendMessage">Send</button>
  </div>
</template>

<script>
export default {
  name: "MessageFormComp",
  data() {
    return {
      messageText: null,
    }
  },

  methods: {
    onSendMessage() {
      this.$emit("sendMessage", this.messageText)
      this.messageText = null
    },
  },
}
</script>

<style lang="scss" scoped></style>
