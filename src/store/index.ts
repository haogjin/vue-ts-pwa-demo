// import Vue from 'vue'
// import Vuex from 'vuex'
// // import Cookies from 'js-cookie'
// // import * as types from './mutation-types'
// import a from './modules/a'
// // import b from './modules/b'
// import { GetterTree } from 'vuex'
// import { MutationTree  } from 'vuex'
// import { ActionTree } from 'vuex'
// Vue.use(Vuex)
// interface StateTypes {
//   isCollapse: boolean
//   menuList: Object[],
// }
// const state: StateTypes = {
//   isCollapse: true,// 伸缩
//   menuList: [], // 菜单
// }
// const getters: GetterTree<StateTypes, any> = {
//   isCollapse: (state: StateTypes) => state.isCollapse
// }
// const mutations: MutationTree<StateTypes> = {
//   toggleSideBar(state: StateTypes, data: boolean) {
//     state.isCollapse = data;
//   },
//   setMenuList (state: StateTypes, data: Object[]) {
//     state.menuList = data
//   },
// }
// const actions: ActionTree<StateTypes, any> = {
//   toggleSideBarAsyn({ commit, state: StateTypes}, data: boolean) {
//     commit('toggleSideBar', data);
//   },
//   setMenuListAsyn({ commit, state: StateTypes}, data: Object[]) {
//     commit('setMenuList', data);
//   }
// }
// /* 这里存放根数据 */
// const store = new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
//   // 划分模块
//   modules: {
//     a,
//     // b
//   }
// })

// export default store
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'


Vue.use(Vuex)

const store: Store<any> = new Vuex.Store({
  actions,
  mutations,
  getters,
  state,
  modules: {
    //添加自定义模块
  }
})

export default store
