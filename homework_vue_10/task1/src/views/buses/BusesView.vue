<template>
    <div class="container">
        <h3>Наші автобуси:</h3>
        <div class="bus-title">
            <h4>Номер</h4>
            <h4>Кількість місць</h4>
        </div>
        <div v-for="bus in getBusesList" :key="bus.id" class="bus-data">
            <div class="plate">{{ bus.plate }}</div>
            <div class="seats">{{ bus.seats }}</div>
            <div class="button">
                <div class="button-edit">
                    <button @click="onBusEdit(bus.id)">Редагувати</button>
                </div>
                <div class="button-delete">
                    <button @click="deleteBus({ propTitle: 'busesList', propValue: bus.id })">Видалити</button>
                </div>
            </div>
        </div>
        <div class="button-add">
            <button @click="onAddBus">Додати автобус</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'BusesView',
    computed: {
        ...mapGetters('buses', ['getBusesList']),
    },
    methods: {
        ...mapActions('buses', ['deleteBus']),

        onBusEdit(busId) {
            this.$router.push({
                name: 'bus-edit',
                params: {
                    busId,
                },
            })
        },

        onAddBus() {
            this.$router.push({
                name: 'bus-edit',
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
.bus-title {
    display: flex;
}
.bus-title :first-child {
    margin-right: 70px;
}

.bus-data {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.button {
    display: flex;
}
.button-edit {
    margin-right: 5px;
}
.button-add {
    margin-top: 40px;
    margin-right: 288px;
}
</style>
