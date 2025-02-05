<template>
  <div>
    <h3>Останні переглянуті товари</h3>
    <div>
      <last-viewed-item
        v-for="item in itemsData"
        :key="item.id"
        :img-src="itemsData.imgSrc"
        :in-stock="itemsData.inStock"
        :link="itemsData.link"
        :price="itemsData.price"
        :name="itemsData.name"
        :item-data="item"
      />
    </div>
  </div>
</template>

<script>
import LastViewedItem from "./LastViewedItem.vue"

export default {
  name: "LastViewedList",
  components: {
    LastViewedItem,
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
