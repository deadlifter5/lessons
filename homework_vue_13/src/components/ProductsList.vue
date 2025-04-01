<template>
  <div class="product-list">
    <p v-for="product in getProductsList" :key="product.id">
      <product-card :product="product" />
    </p>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue"
import { mapGetters } from "vuex"
export default {
  name: "ProductsList",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(["getProductsList"]),
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  margin-bottom: 20px;
}
</style>
