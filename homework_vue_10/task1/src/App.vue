<template>
    <nav>
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" :to="{ name: 'drivers' }">Водії</router-link>
        <router-link class="link" :to="{ name: 'buses' }">Автобуси</router-link>
        <router-link class="link" :to="{ name: 'assignment' }">Призначення</router-link>
        <router-link class="link" to="/about">About</router-link>
    </nav>
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

nav {
    margin-left: 60px;
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.link {
    font-size: 20px;
    margin: 5px;
    text-decoration: none;
}
</style>
