<template>
    <div class="container">
        <h3>Дані про автобус:</h3>
        <label>
            Номер:
            <input v-model="busData.plate" type="text" />
        </label>
        <br />
        <label>
            Кількість місць:
            <input v-model="busData.seats" type="number" /> </label
        ><br />
        <div class="button">
            <button @click="onSave">Зберегти</button>
            <button @click="onCancel">Відміна</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'BusEdit',

    data() {
        return {
            busData: {},
        }
    },
    computed: {
        ...mapGetters('buses', ['getBusById']),
        busId() {
            return this.$route.params.busId
        },
    },

    created() {
        if (this.busId) this.busData = { ...this.getBusById(this.busId) }
    },

    methods: {
        ...mapActions('buses', ['editBus', 'addBus']),

        onSave() {
            if (this.busId) this.editBus({ propTitle: 'busesList', propValue: this.busData })
            else this.addBus(this.busData)
            this.$router.push({ name: 'buses' })
        },
        onCancel() {
            this.$router.push({ name: 'buses' })
        },
    },
}
</script>

<style lang="scss" scoped>
.button {
    display: flex;
    justify-content: start;
    margin: 10px;
    gap: 5px;
}
</style>
