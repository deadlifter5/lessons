<template>
  <p>{{ message }}</p>
  <button @click="onLike">Like</button>
  <button @click="onDislike">Dislike</button>
  <span>Likes: {{ likesCount }}</span>
</template>

<script>
export default {
  name: "LikesComp",
  data() {
    return {
      likesCount: 0,
    }
  },
  props: {
    message: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onLike() {
      this.likesCount += 1
    },
    onDislike() {
      this.likesCount -= 1
    },
  },
}
</script>

<style lang="scss" scoped></style>
