<template>
    <div>
        <h1>Список товарів:</h1>
        <router-link
            v-for="category in getCategoriesList"
            :key="category.id"
            :to="{ name: 'products', params: { category: category.id } }"
            class="category-item"
            >{{ category.title }}
        </router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'CategoriesList',
    computed: {
        ...mapGetters(['getCategoriesList']),
    },
}
</script>

<style lang="scss" scoped>
.category-item {
    display: block;
    margin-bottom: 15px;
}
</style>
