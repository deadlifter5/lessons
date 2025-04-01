import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ProductsView from "../views/ProductsView.vue"
import SuppliersView from "../views/SuppliersView.vue"
import ContactsView from "../views/ContactsView.vue"
import ShoppingRulesView from "../views/ShoppingRulesView.vue"
import SelectorView from "../views/SelectorView.vue"
import EditorView from "../views/EditorView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/suppliers",
      name: "suppliers",
      component: SuppliersView,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
    },
    {
      path: "/shopping-rules",
      name: "shopping-rules",
      component: ShoppingRulesView,
    },
    {
      path: "/products/selector",
      name: "selector",
      component: SelectorView,
    },
    {
      path: "/products/editor",
      name: "editor",
      component: EditorView,
    },
  ],
})

export default router
