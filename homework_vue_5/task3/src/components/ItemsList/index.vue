<template>
  <div>
    <item-comp v-for="item in itemsData" :key="item.id" :item-data="item" />
  </div>
</template>

<script>
import ItemComp from "./ItemComp.vue"
export default {
  name: "ItemsList",
  components: {
    ItemComp,
  },
  props: {
    itemsData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
