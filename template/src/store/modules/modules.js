import eco from '../../api/eco'
import * as types from '../mutations'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allModules: state => state.all
}

// actions
const actions = {
  getAllModules ({ commit }) {
    eco.getModules(modules => {
      commit(types.SHOW_VUEX_MODULE, { modules })
    })
  }
}

// mutations
const mutations = {
  [types.SHOW_VUEX_MODULE] (state, { modules }) {
    state.all = modules
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
