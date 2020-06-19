import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        add_product: (state, product) => {
            state.products = [...state.products, product]
        }
    },
    actions: {
        add_new_product: (context, product) => {
            context.commit('add_product', product)
        }
    },
    getters: {
        get_products: state => {
            return state.products
        }
    }
})