<template>
  <div class="container">
    <div class="img-container">
      <a target="_blank" :href="itemData.link">
        <img :src="itemData.imgSrc" />
      </a>
    </div>
    <div class="name-container">
      <h2>
        <a target="_blank" :href="itemData.link"> {{ itemData.name }} </a>
      </h2>
      <p>
        Ваша економія: <span>{{ moneySaving() }} ₴ </span>
      </p>
      <h3>{{ itemData.oldPrice }} ₴</h3>
      <div class="bottom-container">
        <h1>{{ itemData.newPrice }} ₴</h1>
        <button>Купити</button>
      </div>
    </div>
  </div>
  <hr />
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
  methods: {
    moneySaving() {
      return this.itemData.oldPrice - this.itemData.newPrice
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
  margin-top: 30px;

  img {
    width: 400px;
  }
}
.name-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  text-align: left;
  min-width: 550px;
  h2 {
    font-size: 24px;
  }
  h3 {
    text-decoration: line-through;
    color: grey;
    margin: 0;
  }
  h1 {
    color: red;
  }
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    height: 35px;
  }
  button:hover {
    background-color: #45a049;
  }
  span {
    color: red;
  }
}

.bottom-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
