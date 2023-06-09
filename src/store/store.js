import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userData: {
            user: {},
            token: null,
        },
        count: 0,
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})