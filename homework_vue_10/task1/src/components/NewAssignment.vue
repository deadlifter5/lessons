<template>
    <div class="container">
        <div>
            <h4>Нове призначення</h4>
            <div>
                Шофер:
                <select v-model="driverId" class="select">
                    <option v-for="driver in getDriversList" :key="driver.id" :value="driver.id">
                        {{ driver.name }}
                    </option>
                </select>
            </div>
            <div>
                Автобус:
                <select v-model="busId" class="select">
                    <option v-for="bus in getBusesList" :key="bus.id" :value="bus.id">
                        {{ bus.plate }}
                    </option>
                </select>
            </div>
        </div>
        <div class="button">
            <button @click="setNewAssignment({ driverId, busId })">Додати</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'NewAssignment',
    data() {
        return {
            driverId: null,
            busId: null,
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriversList', 'getBusesList']),
        ...mapGetters('buses', ['getBusesList']),
    },
    methods: {
        ...mapActions('drivers', ['setNewAssignment', 'deleteAssignment']),
    },
}
</script>

<style lang="scss" scoped>
.select {
    margin-bottom: 10px;
}
</style>
