<template>
  <div>
    <div class="container">
      <router-link to="/">Головна</router-link>
      <router-link :to="{ name: 'products' }">Товари</router-link>
      <router-link :to="{ name: 'suppliers' }">Постачальники</router-link>
      <router-link :to="{ name: 'contacts' }">Контакти</router-link>
      <router-link :to="{ name: 'shopping-rules' }"
        >Правила купівлі</router-link
      >
    </div>

    <slot name="title"></slot>
    <slot></slot>

    <div class="footer">
      <slot name="footer-left">
        <div class="footer-left">
          <p>Рейтинг магазину: 54449</p>
        </div>
      </slot>

      <slot name="footer-right">
        <div class="footer-right">
          <p>Власник: Баба Галя</p>
          <img
            class="baba-img"
            src="https://cdn.fishki.net/upload/post/201501/12/1383701/c102f54c1f58f5932a2ae9cf89a437c2.jpg"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-right {
  display: flex;
  align-items: center;
}
.baba-img {
  width: 70px;
  height: 80px;
  margin-left: 10px;
}

.text {
  font-size: 18px;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 30px;
}
</style>
