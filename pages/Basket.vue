<template>
  <div>
    <h3>Корзина: <span>{{GET_BASKET_PRODUCTS.length | productCounterNameder}}</span></h3>
    <div class="basket">
      <div v-for="(product, ind) of noRedundantProduct" :key="ind" class="basket__list">
        <basket-cart :product="product"/>
      </div>
      <div class="basket__underline">
        <div class="basket__outcome">
          Итого: {{GET_BASKET_PRODUCTS.length | productCounterNameder}} на {{price | splitPrice}}
        </div>
        <div class="basket__btn_orange">Купить</div>
      </div>

    </div>

    <div @click="$router.push('/')" class="control">Продолжить выбор</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import basketCart from "~/components/basketCart.vue";
import {Product} from '~/types'
import {mapGetters} from "vuex";

export default Vue.extend({
  components: {
    basketCart
  },
  computed: {
    ...mapGetters([
      'GET_BASKET_PRODUCTS'
    ]),
    noRedundantProduct() {
      return [...new Set(this.GET_BASKET_PRODUCTS)]
    },
    price() {
      let sum = null
      for(let item of this.GET_BASKET_PRODUCTS) {
        sum = sum + item.price
      }
      return sum
    }
  },
  methods: {},
  filters: {
    productCounterNameder(val: number): string {
      if (val === 0)
        return 'пустая'
      if (val === 1)
        return '1 товар'
      if (val < 5)
        return `${val} товара`
      return `${val} товаров`
    },
    splitPrice: function (val: number): string {
      let [a, b, c,...rest] = val.toString().split('').reverse()
      return [rest.reverse().join(''), ' ', c, b, a].join('')
    }
  }
})

</script>

<style scoped lang="scss">
h3 span {
  color: $grey;
}

.basket {
  margin-top: rem(20);
  display: flex;
  justify-content: space-between;


  &__list {
    display: block;
    width: calc(100% - 320px);
  }

  &__underline {
    width: 300px;

    .basket__outcome {
      width: 100%;
      height: rem(60);
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-left: rem(20);

      background: $white;
      font-weight: 700;

    }

    .basket__btn_orange {
      width: 100%;
      max-width: 500px;
      margin-top: rem(20);
      @extend .btn_common;
      background: $orange;
      border-color: $orange;
      color: $white;
    }
  }


}

.control {
  margin-top: rem(20);
  @extend .btn_common;
  background: $white;
  border: none;
}

</style>
