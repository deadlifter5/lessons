<template>
  <div class="supplier-container">
    <img :src="supplier.img" class="supplier-img" />
    <div class="supplier-title">{{ supplier.title }}</div>
    <div class="icons-list">
      <p v-for="(icon, index) in supplier.icons" :key="index">
        <img :src="icon" class="icon-img" />
      </p>
    </div>
    <button class="card-btn">Купити</button>
  </div>
</template>

<script>
export default {
  name: "SupplierCard",
  props: {
    supplier: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.supplier-container {
  display: flex;
  flex-direction: column;
  width: 140px;
  margin-right: 15px;
  padding: 20px;
  border: 2px solid green;
  border-radius: 8px;

  .supplier-img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }

  .icons-list {
    padding: 0;
    p {
      display: inline-block;
      margin-right: 3px;
      list-style: none;
      .icon-img {
        width: 25px;
        height: 20px;
      }
    }
  }
  .card-btn {
    width: 100px;
    padding: 5px;
    border-radius: 8px;

    cursor: pointer;
  }
}
</style>
