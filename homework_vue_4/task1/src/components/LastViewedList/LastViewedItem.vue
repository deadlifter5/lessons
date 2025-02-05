<template>
  <div class="img-container">
    <a target="_blank" :href="itemData.link">
      <img :src="itemData.imgSrc" />
    </a>
    <div>
      <h3>
        <a target="_blank" :href="itemData.link">{{ itemData.name }}</a>
      </h3>
      <a target="_blank" href="">Залишити відгук</a>
      <span v-if="itemData.inStock">Є в наявності</span>
      <span v-else>Немає в наявності</span>
      <h4>{{ itemData.price }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastViewedItem",
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
  display: inline-flex;

  img {
    width: 150px;
  }
}
</style>
