<template>
  <div class="product-container">
    <img :src="product.img" class="product-img" />
    <div class="product-title">{{ product.title }}</div>
    <div>{{ product.price }} грн.</div>
    <button class="buy-btn">Купити</button>
    <router-link :to="{ name: 'editor' }"></router-link>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.product-container {
  display: flex;
  flex-direction: column;
  width: 140px;
  margin-right: 15px;
  padding: 20px;
  border: 2px solid green;
  border-radius: 8px;

  .product-img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }

  .buy-btn {
    width: 100px;
    margin-right: 10px;
    padding: 5px;
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>
