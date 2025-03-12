<template>
    <div class="container">
        <h3>Дані про водія:</h3>
        <label>
            ПІБ:
            <input v-model="driverData.name" type="text" />
        </label>
        <br />
        <label>
            Стаж:
            <input v-model="driverData.experience" type="number" /> </label
        ><br />
        <div class="button">
            <button @click="onSave">Зберегти</button>
            <button @click="onCancel">Назад</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'DriverEdit',
    data() {
        return {
            driverData: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriverById']),
        driverId() {
            return this.$route.params.driverId
        },
    },
    created() {
        if (this.driverId) this.driverData = { ...this.getDriverById(this.driverId) }
    },
    methods: {
        ...mapActions('drivers', ['editDriver', 'addDriver']),

        onSave() {
            if (this.driverId) this.editDriver({ propTitle: 'driversList', propValue: this.driverData })
            else this.addDriver(this.driverData)
            this.$router.push({ name: 'drivers' })
        },
        onCancel() {
            this.$router.push({ name: 'drivers' })
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
