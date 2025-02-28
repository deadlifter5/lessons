<template>
    <div class="product-container">
        <div v-for="product in currentProductsList" :key="product.id">
            <router-link :to="{ name: 'product', params: { productId: product.id } }" class="product-item">
                <img :src="product.img" class="product-img" />
                <div class="product-data">
                    <h3>{{ product.title }}</h3>
                    <h3>{{ product.price }} грн.</h3>
                </div>
            </router-link>
            <button @click="deleteProduct(product.id)" class="delete-btn">Видалити</button>
        </div>
    </div>
    <router-link :to="{ name: 'store' }" class="home-btn">На головну</router-link>
    <router-link :to="{ name: 'edit' }" class="add-btn">Додати товар</router-link>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ProductsList',
    computed: {
        ...mapGetters(['getProductsListByCategory']),
        currentCategory() {
            return this.$route.params.category
        },
        currentProductsList() {
            return this.getProductsListByCategory(this.currentCategory)
        },
    },
    methods: {
        ...mapActions(['deleteProduct']),
    },
}
</script>

<style lang="scss" scoped>
.product-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto 15px;
    padding: 15px;
    width: 650px;
    background-color: rgb(111, 111, 111);
}
.product-data {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 10px;
}
.product-item {
    display: flex;
    width: 300px;
    margin-bottom: 10px;
    padding: 10px;

    font-size: 12px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.793);
}

.product-img {
    min-width: 120px;
    height: 120px;
    margin-right: 10px;
    object-fit: contain;
}

.product-title {
    max-height: 40px;
    overflow: hidden;
}
.product-price {
    font-size: 13px;
    font-weight: bold;
}
.home-btn,
.add-btn {
    display: inline-block;
    width: 90px;
    height: 20px;
    padding: 5px;
    margin-right: 15px;
    font-size: 13px;
    text-align: center;
    color: black;
    border: 2px solid black;
}
.delete-btn {
    position: relative;
    left: 110px;
    bottom: 35px;
}
</style>
