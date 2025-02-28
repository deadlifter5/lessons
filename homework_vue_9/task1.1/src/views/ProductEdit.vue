<template>
    <div>
        <div class="edit-container">
            <label
                >Категорія
                <select v-model="productData.category">
                    <option v-for="category in getCategoriesList" :key="category.id" :value="category.id">
                        {{ category.title }}
                    </option>
                </select>
            </label>
            <label
                >Назва товару
                <input v-model="productData.title" type="text" />
            </label>
            <label
                >Зображення
                <input v-model="productData.img" type="text" />
            </label>
            <label
                >Ціна
                <input v-model="productData.price" type="text" />
            </label>
        </div>
        <button class="save-btn" @click="onSave">Зберегти</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ProductEdit',
    data() {
        return {
            productData: {
                category: null,
            },
            categoryProp: 'tv',
        }
    },
    computed: {
        ...mapGetters(['getProductById', 'getCategoriesList']),
        productId() {
            return this.$route.params.productId
        },
    },
    backLink() {
        if (this.productId) return { name: 'product', params: { productId: this.productId } }
        else return { name: 'products', params: { category: this.categoryProp } }
    },
    created() {
        if (this.productId) this.productData = { ...this.getProductById(this.productId) }
    },
    methods: {
        ...mapActions(['editProduct', 'createProduct']),
        onSave() {
            if (this.productId) this.editProduct(this.productData)
            else this.createProduct(this.productData)
            this.$router.push(this.backLink)
        },
    },
}
</script>

<style lang="scss" scoped>
.edit-container {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
}
label {
    margin-bottom: 15px;
}
input {
    width: 100%;
}
</style>
