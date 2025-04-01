<template>
  <main-layout>
    <h2>Оберіть постачальника</h2>
    <div class="suppliers-list">
      <p v-for="supplier in getSuppliersList" :key="supplier.id">
        <supplier-card :supplier="supplier" />
      </p>
    </div>
    <template #footer-left>
      <div>Найбільш популярний: <span class="footer-accent">Економ</span></div>
    </template>
    <template #footer-right>
      <p class="text">Статус: <span>відкрито</span></p>
    </template>
  </main-layout>
</template>

<script>
import { mapGetters } from "vuex"
import SupplierCard from "@/components/SupplierCard.vue"
export default {
  name: "SuppliersView",
  components: { SupplierCard },
  computed: {
    ...mapGetters(["getSuppliersList"]),
  },
}
</script>

<style lang="scss" scoped>
.suppliers-list {
  display: flex;
}
</style>
