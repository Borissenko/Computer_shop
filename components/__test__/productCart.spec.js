import { mount } from '@vue/test-utils'
import productCart from '../productCart.vue'

describe('productCart', () => {
  it('firstTest', () => {

    let wrapper = mount(productCart, {
      propsData: {
        product: {
          "id": 22134646,
          "name": "Book",
          "description": "fine",
          "price": 33000,
          "img": "/API_data/imgs/nout2.jpeg",
          "specification": {
            "guarantee": 24,
            "release": 2005,
            "color": "желтый",
            "screenDiagonal": 16
          }
        }
      }
    })

    const el = wrapper.find('.cart__name').element
    expect(el.text()).toContain('Book')
  })
})
