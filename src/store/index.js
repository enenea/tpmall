import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'
import {register, login, logout, getInfo} from '@/network/Profile'

Vue.use(Vuex)


const state = {
  token: getToken(),
}

const getters = {

  GET_TOKEN(state){
    return state.token
  },

}

const mutations = {

  SET_TOKEN(state, token){
    state.token = token
  },

  SET_ROLES(state, roles){
    state.roles = roles
  },

  SET_NAME(state, name){
    state.name = name
  },

  SET_AVATAR(state, avatar){
    state.avatar = avatar
  },

}

const actions = {
  // 异步请求操作
  // user register
  register({ commit }, userInfo) {
    const { phone, password } = userInfo
    return new Promise((resolve, reject) => {
      register({ phone: phone, password: password}).then(response => {
        const { data } = response
        // console.log(response);
        // return false;
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },


  // login
  login({ commit }, userInfo) {
    const { phone, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ phone: phone, password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },


  logout({ commit, state }) {
    // 返回一个Promise出去外面继续then/catch 与resolve和reject对应
    return new Promise((resolve, reject) => {
      // 实际请求方法
      logout(state.token).then(res =>{
        commit('SET_TOKEN', '')
        // commit('SET_ROLES', [])
        removeToken()
        // resetRouter() 暂无
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },


  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { roles, name, avatar } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          // reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  removeToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  resetToken({ commit }, token) {
    return new Promise( resolve =>{
      commit('SET_TOKEN', token)
      setToken(token)
      resolve()
    })
  }






  // register({commit, state},){

  // }
}

const module = {
  // 抽离
}



const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  module
})

export default store
