import { createStore } from "vuex"
import { productsList } from "@/data/products"
import { suppliersList } from "@/data/suppliers"
import { galleryList } from "@/data/gallery"

const store = createStore({
  state() {
    return {
      productsList: productsList,
      suppliersList: suppliersList,
      galleryList: galleryList,
    }
  },
  getters: {
    getProductsList: ({ productsList }) => productsList,
    getSuppliersList: ({ suppliersList }) => suppliersList,
    getGalleryList: ({ galleryList }) => galleryList,
  },
})

export default store
