import Vue from 'vue'
import Vuex from 'vuex'
import { GetterTree } from 'vuex'
import { MutationTree  } from 'vuex'
import { ActionTree } from 'vuex'
Vue.use(Vuex)
interface StateTypes {
  isCollapse: boolean,
  menuList: Object[],
}
const state: StateTypes = {
  isCollapse: true,// 伸缩
  menuList: [], // 菜单
}
const getters: GetterTree<StateTypes, any> = {
  isCollapse: (state: StateTypes) => state.isCollapse
}
const mutations: MutationTree<StateTypes> = {
  toggleSideBar(state: StateTypes, data: boolean) {
    state.isCollapse = data;
  },
  setMenuList (state: StateTypes, data: Object[]) {
    state.menuList = data
  },
}
const actions: ActionTree<StateTypes, any> = {
  toggleSideBarAsyn({ commit, state: StateTypes}, data: boolean) {
    commit('toggleSideBar', data);
  },
  setMenuListAsyn({ commit, state: StateTypes}, data: Object[]) {
    commit('setMenuList', data);
  }
}

const a: any = ({
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
})

export default a
