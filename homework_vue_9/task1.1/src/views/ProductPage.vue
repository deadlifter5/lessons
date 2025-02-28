<template>
    <div class="product-item">
        <img class="product-img" :src="currentProduct.img" />
        <div class="product-data">
            <h2 class="product-title">{{ currentProduct.title }}</h2>
            <h2 class="product-price">{{ currentProduct.price }} грн.</h2>
        </div>
    </div>
    <div class="edit-btn">
        <button :current-category="currentProduct.category" @click="onEdit(currentProduct.id)">Редагувати</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ProductPage',
    computed: {
        ...mapGetters(['getProductById']),
        productId() {
            return this.$route.params.productId
        },
        currentProduct() {
            return this.getProductById(this.productId)
        },
    },
    methods: {
        onEdit(productId) {
            this.$router.push({
                name: 'edit',
                params: { productId },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.product-item {
    display: flex;
    background-color: rgba(125, 125, 125, 0.579);
    width: 300px;
    margin-bottom: 15px;
    padding: 15px;
    font-size: 12px;
    border-radius: 5px;
    margin: 0 auto;
}
.product-data {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 10px;
}
.product-img {
    min-width: 150px;
    height: 120px;
    margin-bottom: 10px;
}

.product-title {
    font-size: 14px;
    max-height: 40px;
}
.product-price {
    font-size: 16px;
    font-weight: bold;
}
</style>
