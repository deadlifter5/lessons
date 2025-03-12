export default {
    namespaced: true,
    state: () => ({
        nameFilter: null,
        minExperience: null,
        maxExperience: null,
    }),
    getters: {
        getNameFilter: (state) => state.nameFilter,
        getMinExperience: (state) => state.minExperience,
        getMaxExperience: (state) => state.maxExperience,
        isDriverSatisfiedFilter: (state) => (driver) =>
            (!state.nameFilter || driver.name.toLowerCase().includes(state.nameFilter)) &&
            (!state.minExperience || driver.experience >= state.minExperience) &&
            (!state.maxExperience || driver.experience <= state.maxExperience),

        getFilteredDriversList: (state, getters, rootState, rootGetters) => {
            return rootGetters['drivers/getDriversList'].filter((driver) => getters.isDriverSatisfiedFilter(driver))
        },
    },
    mutations: {
        changeNameFilter(state, newVal) {
            state.nameFilter = newVal
        },
        changeMinExperience(state, newVal) {
            state.minExperience = newVal
        },
        changeMaxExperience(state, newVal) {
            state.maxExperience = newVal
        },
    },

    actions: {
        changeNameFilter({ commit }, newVal) {
            commit('changeNameFilter', newVal)
        },
        changeMinExperience({ commit }, newVal) {
            commit('changeMinExperience', newVal)
        },
        changeMaxExperience({ commit }, newVal) {
            commit('changeMaxExperience', newVal)
        },
    },
}
