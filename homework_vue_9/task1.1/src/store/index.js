import { createStore } from 'vuex'
import { products } from '../constants/productsData'
import { categories } from '../constants/categories'

export default createStore({
    state: {
        productsList: [],
        categoriesList: [],
    },
    getters: {
        getProductsList: ({ productsList }) => productsList,
        getCategoriesList: ({ categoriesList }) => categoriesList,
        getProductsListByCategory:
            ({ productsList }) =>
            (currentCategory) =>
                productsList.filter((prod) => prod.category === currentCategory),
        getProductById:
            ({ productsList }) =>
            (productId) =>
                productsList.find((prod) => prod.id == productId),
    },
    mutations: {
        setProductsData(state, productsData) {
            state.productsList = productsData
        },
        setCategoriesData(state, categoriesData) {
            state.categoriesList = categoriesData
        },
        editProduct(state, productData) {
            const currentIndex = state.productsList.findIndex((prod) => prod.id == productData.id)
            state.productsList[currentIndex] = { ...productData }
        },
        createProduct(state, productData) {
            state.productsList.push(productData)
        },
        deleteProduct(state, productId) {
            state.productsList = state.productsList.filter((prod) => prod.id != productId)
        },
    },
    actions: {
        loadProductsData({ commit }) {
            commit('setProductsData', products)
        },
        loadCategoriesData({ commit }) {
            commit('setCategoriesData', categories)
        },
        editProduct({ commit }, productData) {
            commit('editProduct', productData)
        },
        createProduct({ commit }, productData) {
            commit('createProduct', {
                id: new Date().getTime(),
                ...productData,
            })
        },
        deleteProduct({ commit }, productId) {
            commit('deleteProduct', productId)
        },
    },
})
