import "./assets/main.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import MainLayout from "./layouts/MainLayout.vue"
import ContactsLayout from "./layouts/ContactsLayout.vue"

const app = createApp(App)

app.use(router)
app.use(store)

app.component("MainLayout", MainLayout)
app.component("ContactsLayout", ContactsLayout)

app.mount("#app")
