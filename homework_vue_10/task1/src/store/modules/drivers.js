import { commonMutations } from '../helpers/commonMethods'

export default {
    namespaced: true,
    state: () => ({
        driversList: [
            {
                id: 1,
                name: 'Іванов І.І.',
                experience: 7,
                busId: 1,
            },
            {
                id: 2,
                name: 'Григоренко П.А.',
                experience: 6,
                busId: 2,
            },
            {
                id: 3,
                name: 'Шевченко Д.І.',
                experience: 11,
                busId: 3,
            },
            {
                id: 4,
                name: 'Черник Я.С.',
                experience: 9,
                busId: 4,
            },
            {
                id: 5,
                name: 'Шпак М.В.',
                experience: 12,
                busId: 5,
            },
        ],
    }),
    getters: {
        getDriversList: ({ driversList }) => driversList,
        getDriverById:
            ({ driversList }) =>
            (driverId) =>
                driversList.find((driver) => driver.id == driverId),

        getPopulatedDriversList: (state, getters, rootState, rootGetters) => {
            const busGetter = rootGetters['buses/getBusById']
            return state.driversList
                .filter((driver) => driver.busId)
                .map((driver) => ({
                    ...driver,
                    busPlate: busGetter(driver.busId).plate,
                }))
        },
    },
    mutations: {
        editDriver: commonMutations.editItem,
        addDriver(state, driverData) {
            state.driversList.push(driverData)
        },
        deleteDriver: commonMutations.deleteItem,

        setNewAssignment(state, assignmentData) {
            state.driversList.find((driver) => driver.id == assignmentData.driverId).busId = assignmentData.busId
        },
        deleteAssignment(state, driverId) {
            state.driversList.find((driver) => driver.id == driverId).busId = null
        },
    },
    actions: {
        editDriver({ commit }, driverObjData) {
            commit('editDriver', driverObjData)
        },
        addDriver({ commit }, driverData) {
            commit('addDriver', {
                id: new Date().getTime(),
                busId: null,
                ...driverData,
            })
        },
        deleteDriver({ commit }, driverId) {
            commit('deleteDriver', driverId)
        },
        setNewAssignment({ commit }, AssignmentData) {
            commit('setNewAssignment', AssignmentData)
        },
        deleteAssignment({ commit }, driverId) {
            commit('deleteAssignment', driverId)
        },
    },
}
