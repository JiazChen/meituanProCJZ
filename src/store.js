import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    position: '北京',
    nearCity: [],
    userName: ''
}

const mutations = {
    setPosition(state, value) {
        state.position = value;
    },
    setNearCity(state, value) {
        state.nearCity = value;
    },
    setUserName(state, value) {
        state.userName = value;
    }
}

const actions = {
    setPosition({ commit }, value) {
        commit('setPosition', value)
    },
    setNearCity({ commit }, value) {
        commit('setNearCity', value)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})