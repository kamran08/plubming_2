// import Vuex from 'vuex'
// import axios from 'axios'

export const strict = false
export const state = () => ({
    authUser: false,
    apiUrl:process.env.BASE_URL,
    companyTab:'roomIndex',
    driverInfo:'sss',
})

// common getters
export const getters ={
  getAuthUser(state){
    return state.authUser
  },

  getApiUrl(state){
    return state.apiUrl
  },

  getCompanyTab(state){
    return state.companyTab
  },

  getDriverInfo(state){
    return state.driverInfo
  },
}

//mutations for changing data from action
export const mutations = {
  loginUser(state, data) {
    state.authUser = data
  },

  setCompanyTab(state, data){
    state.companyTab = data
  },

  setDriverInfo(state, data){
    state.driverInfo = data
  },
}

// actionns for commiting mutations
export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    try {
      let { data } = await $axios.get('/auth/getUser')
      console.log('loginUser', data)
      commit('loginUser', data)
    } catch (e) {
        // console.log('an error occured in nuxt init')
    }
  },
}

