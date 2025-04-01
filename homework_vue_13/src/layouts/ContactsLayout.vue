<template>
  <div class="header">
    <router-link :to="{ name: 'home' }">На головну</router-link>
  </div>
  <div class="contacts-inform">
    <slot>
      <h2>Наші контакти:</h2>
      <p>Адреса магазину: біля будинку Баби Галі</p>
      <p>Менеджер: Дід Петро</p>
      <p>Заступник: онука Софійка</p>
    </slot>
    <div class="gallery">
      <h2>Галерея</h2>
      <div class="gallery-img">
        <p v-for="image in getGalleryList" :key="image.id">
          <img :src="image.img" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "ContactsLayout",
  computed: {
    ...mapGetters(["getGalleryList"]),
  },
}
</script>

<style lang="scss" scoped>
.gallery-img {
  padding: 0;
  p {
    display: inline-block;
    margin-right: 20px;

    img {
      width: 120px;
      height: 80px;
    }
  }
}
</style>
