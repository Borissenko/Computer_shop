import Vue from 'vue'
import {MutationTree, ActionTree, GetterTree} from 'vuex'
import {RootState, Product} from '~/types';

export const state = () => ({
  products: [],
  clientBasket: []
}) as RootState

export const getters = {
  GET_PRODUCTS: (state: RootState): Product[] => state.products,
  GET_PRODUCT: (state: RootState) => (id: number): Product => {
    let productIndex = state.products.findIndex(item => item.id === id)
    return state.products[productIndex]
  },
  GET_BASKET_PRODUCTS: (state: RootState): Product[] => {
    let basketProduct = [] as Product[]
    for (let id of state.clientBasket) {
      let item = state.products.find(item => item.id === id)
      if (item != null)
        basketProduct.push(item)
    }
    return basketProduct
  },
  GET_PRODUCT_AMOUNT: (state: RootState) => (id:number) => state.clientBasket.filter(itemId => itemId === id).length
} as GetterTree<RootState, {}>

export const mutations = {
  SET_PRODUCTS(state: RootState, products: Product[]) {
    state.products = products
  },
  PUT_PRODUCT_TO_BASKET(state: RootState, id: number) {
    if (id > 0)
      state.clientBasket.push(id)
    if (id < 0) {  //удаляем 1 экземпляр из корзины
      let deletedProductIndex = state.clientBasket.findIndex(itemId => itemId === Math.abs(id))
      Vue.delete(state.clientBasket, deletedProductIndex)
    }
  },
  CLEAR_BASKET(state: RootState) {
    console.log('CLEAR_BASKET ===')
    state.clientBasket = []
  },
} as MutationTree<RootState>

export const actions = {
  async nuxtServerInit({commit}: any, {$axios}: any) {
    await $axios.$get('/API_data/data.json')
      .then(
        (response: Product[]) => commit('SET_PRODUCTS', response),
        (error: any) => console.log()
      )
  }
} as ActionTree<RootState, {}>





