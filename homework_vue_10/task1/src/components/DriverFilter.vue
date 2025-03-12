<template>
    <div class="filter-container">
        Фільтри:
        <div>
            ПІБ
            <input v-model="nameFilterValue" class="name" type="text" />
        </div>
        <div>
            Стаж від
            <input v-model="minExperienceValue" class="experience" type="text" />
            до
            <input v-model="maxExperienceValue" class="experience" type="text" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'DriverFilter',
    computed: {
        ...mapGetters('drivers', ['getNameFilter', 'getMinExperience', 'getMaxExperience']),

        nameFilterValue: {
            get() {
                return this.nameFilter
            },
            set(val) {
                this.changeNameFilter(val)
            },
        },
        minExperienceValue: {
            get() {
                return this.minExperience
            },
            set(val) {
                this.changeMinExperience(val)
            },
        },
        maxExperienceValue: {
            get() {
                return this.maxExperience
            },
            set(val) {
                this.changeMaxExperience(val)
            },
        },
    },
    methods: {
        ...mapActions('filters', ['changeNameFilter', 'changeMinExperience', 'changeMaxExperience']),
    },
}
</script>

<style lang="scss" scoped>
.filter-container {
    display: flex;
    justify-content: flex-end;
}
.name {
    width: 100px;
    margin-right: 15px;
}
.experience {
    width: 32px;
}
</style>
