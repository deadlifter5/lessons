<template>
  <div>
    <message-form-comp
      v-for="message in messagesList"
      :key="message.id"
      :message="messageText"
      @sendMessage="addToMessagesList"
    />
    <likes-comp />
  </div>
</template>

<script>
import MessageFormComp from "./components/MessageFormComp.vue"
import LikesComp from "./components/LikesComp.vue"

export default {
  components: { MessageFormComp, LikesComp },
  name: "App",
  data() {
    return {
      messagesList: [],
    }
  },
  methods: {
    addToMessagesList(messageText) {
      return this.messagesList.push(messageText)
    },
  },
}
</script>

<style></style>
