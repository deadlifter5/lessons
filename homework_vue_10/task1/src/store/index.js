import { createStore } from 'vuex'

import drivers from './modules/drivers'
import buses from './modules/buses'
import filters from './modules/filters'

export default createStore({
    modules: {
        drivers,
        buses,
        filters,
    },
})
