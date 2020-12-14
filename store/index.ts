import Vuex, {MutationTree, ActionTree, GetterTree} from 'vuex'
import {RootState, Product} from '~/types';

export const state = () => ({
  products: [],
  clientBasket: []
}) as RootState

export const getters = {
  GET_PRODUCTS: (state: RootState): Product[] => state.products
} as GetterTree<RootState, {}>

export const mutations = {
  SET_PRODUCTS(state: RootState, products: Product[]) {
    state.products = products
  },
} as MutationTree<RootState>

export const actions = {
  async nuxtServerInit({getters, dispatch, commit}: any, {$axios}: any) {
    await $axios.$get('/API_data/data.json')
      .then(
        (response: Product[]) => commit('SET_PRODUCTS', response),
        (error: any) => console.log()
      )
  },
} as ActionTree<RootState, {}>





