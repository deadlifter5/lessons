<template>
    <div class="container">
        <h3>Призначення</h3>

        <div class="title">
            <h4>Водій</h4>
            <h4>Номер автобуса</h4>
        </div>
        <div v-for="driver in getPopulatedDriversList" :key="driver.id" :driver="driver" class="item">
            <div class="name">{{ driver.name }}</div>
            <div class="plate">{{ driver.busPlate }}</div>

            <div class="button">
                <button @click="deleteAssignment(driver.id)">Видалити</button>
            </div>
        </div>
    </div>
    <new-assignment />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NewAssignment from '@/components/NewAssignment.vue'
export default {
    name: 'AssignmentView',
    components: {
        NewAssignment,
    },
    computed: {
        ...mapGetters('drivers', ['getPopulatedDriversList']),
    },
    methods: {
        ...mapActions('drivers', ['deleteAssignment']),
    },
}
</script>

<style lang="scss" scoped>
.container {
    margin: 40px 0 0 80px;
    max-width: 450px;
}
.title {
    display: flex;
}
.title :first-child {
    margin-right: 140px;
}
.item {
    display: flex;
    justify-content: space-between;
}
.name {
    min-width: 120px;
}

.button {
    display: flex;
    margin-bottom: 10px;
}
</style>
