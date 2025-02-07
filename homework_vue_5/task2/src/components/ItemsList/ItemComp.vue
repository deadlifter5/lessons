<template>
  <div class="container">
    <div class="img-container">
      <a target="_blank" :href="itemData.link">
        <img :src="itemData.imgSrc" />
      </a>
      <span v-if="itemData.inStock">B наявності</span>
      <h3>
        <a target="_blank" :href="itemData.link"> {{ itemData.name }} </a>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemComp",
  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background: #000;
  display: inline;
  vertical-align: bottom;

  flex-direction: column;
  align-items: center;
  width: 400px;
}
.img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 350px;
    height: 300px;
    border-radius: 10%;
    padding: 12px;
  }
  a {
    color: white;
  }
  span {
    color: green;
  }
}
</style>
