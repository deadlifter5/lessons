<template>
    <nav>
        <router-link to="/">Головна</router-link> | <router-link :to="{ name: 'store' }">Магазин</router-link> |
        <router-link to="/payment">Правила оплати</router-link> |
        <router-link to="/about">Контакти</router-link>
    </nav>
    <router-view />
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'App',

    created() {
        this.loadProductsData()
        this.loadCategoriesData()
    },
    methods: {
        ...mapActions(['loadProductsData', 'loadCategoriesData']),
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
