import { commonMutations } from '../helpers/commonMethods'

export default {
    namespaced: true,
    state: () => ({
        busesList: [
            {
                id: 1,
                plate: 'КА2517РA',
                seats: 50,
            },
            {
                id: 2,
                plate: 'BС6564AА',
                seats: 40,
            },
            {
                id: 3,
                plate: 'BК8564АE',
                seats: 40,
            },
            {
                id: 4,
                plate: 'АE1534ВС',
                seats: 50,
            },
            {
                id: 5,
                plate: 'АР4521МО',
                seats: 60,
            },
        ],
    }),
    getters: {
        getBusesList: ({ busesList }) => busesList,
        getBusById:
            ({ busesList }) =>
            (busId) =>
                busesList.find((bus) => bus.id == busId),
    },
    mutations: {
        editBus: commonMutations.editItem,
        addBus(state, busData) {
            state.busesList.push(busData)
        },
        deleteBus: commonMutations.deleteItem,
    },
    actions: {
        editBus({ commit }, busObjData) {
            commit('editBus', busObjData)
        },
        addBus({ commit }, busData) {
            commit('addBus', {
                id: new Date().getTime(),
                ...busData,
            })
        },
        deleteBus({ commit }, objData) {
            commit('deleteBus', objData)
        },
    },
}
