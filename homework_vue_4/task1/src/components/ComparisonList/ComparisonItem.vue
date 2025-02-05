<template>
  <div class="img-container">
    <a target="_blank" :href="itemData.link">
      <img :src="itemData.imgSrc" />
    </a>
  </div>
</template>

<script>
export default {
  name: "ComparisonItem",
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.img-container {
  display: inline-block;

  img {
    width: 150px;
  }
}
</style>
