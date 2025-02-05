<template>
  <h2>Списки порівнянь</h2>
  <div>
    <h3>Мобільні телефони</h3>
    <h4>Кількість товарів: {{ itemsData.length }}</h4>
    <div>
      <comparison-item
        v-for="item in itemsData"
        :key="item.id"
        :img-src="itemsData.imgSrc"
        :link="itemsData.link"
        :item-data="item"
      />
    </div>
  </div>
</template>

<script>
import ComparisonItem from "./ComparisonItem.vue"

export default {
  name: "ComparisonList",
  components: {
    ComparisonItem,
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
