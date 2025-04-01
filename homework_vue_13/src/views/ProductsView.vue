<template>
  <main-layout>
    <h2>Оберіть продукти</h2>
    <products-list />
    <router-link :to="{ name: 'selector' }">Обрати товари</router-link>
    <template #footer-right>
      <div>
        <p class="text">Статус: <span>відкрито</span></p>
      </div>
    </template>
  </main-layout>
</template>

<script>
import ProductsList from "@/components/ProductsList.vue"
export default {
  name: "ProductsView",
  components: {
    ProductsList,
  },
}
</script>

<style lang="scss" scoped></style>
