<template>
    <div class="container">
        <h3>Наші водії:</h3>

        <driver-filter />

        <div class="driver-name">
            <h4>ПІБ</h4>
            <h4>Стаж</h4>
        </div>
        <div v-for="driver in getFilteredDriversList" :key="driver.id" class="driver-data">
            <div class="name">{{ driver.name }}</div>
            <div class="experience">{{ driver.experience }}</div>
            <div class="buttons">
                <div class="button-edit">
                    <button @click="onDriverEdit(driver.id)">Редагувати</button>
                </div>
                <div class="button-delete">
                    <button @click="deleteDriver({ propTitle: 'driversList', propValue: driver.id })">Видалити</button>
                </div>
            </div>
        </div>
        <div class="button-add">
            <button @click="onAddDriver">Додати водія</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DriverFilter from '@/components/DriverFilter.vue'

export default {
    name: 'DriversView',
    components: {
        DriverFilter,
    },
    computed: {
        ...mapGetters('filters', ['getFilteredDriversList']),
    },
    methods: {
        ...mapActions('drivers', ['deleteDriver']),

        onDriverEdit(driverId) {
            this.$router.push({
                name: 'driver-edit',
                params: {
                    driverId,
                },
            })
        },
        onAddDriver() {
            this.$router.push({
                name: 'driver-edit',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
h3 {
    text-align: start;
}
.container {
    margin: 50px 0 0 90px;
    max-width: 450px;
}
.driver-name {
    display: flex;
}
.driver-name :first-child {
    margin-right: 155px;
}
.driver-data {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.name {
    width: 120px;
}

.buttons {
    display: flex;
}
.button-edit {
    margin-right: 5px;
}
.button-add {
    margin-top: 40px;
    margin-right: 354px;
}
</style>
