<template>
  <div>
    <h2>Задача 1. Спробуйте відтворити використовуючи відповідні компоненти</h2>
    <comparison-list :itemsData="comparisonItemsList" />
    <last-viewed-list :itemsData="lastViewedItemsList" />
  </div>
</template>

<script>
import ComparisonList from "./components/ComparisonList"
import LastViewedList from "./components/LastViewedList"

import { items1 } from "./constants/data_comparison"
import { items2 } from "./constants/data_last_viewed"

export default {
  name: "App",
  components: { ComparisonList, LastViewedList },
  computed: {
    comparisonItemsList() {
      return items1
    },
    lastViewedItemsList() {
      return items2
    },
  },
}
</script>

<style></style>
