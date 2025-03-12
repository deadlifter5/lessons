export const commonMutations = {
    editItem(state, dataObj) {
        const currentIndex = state[dataObj.propTitle].findIndex((item) => item.id == dataObj.propValue.id)
        state[dataObj.propTitle][currentIndex] = { ...dataObj.propValue }
    },
    deleteItem(state, objData) {
        state[objData.propTitle] = state[objData.propTitle].filter((item) => item.id != objData.propValue)
    },
}
