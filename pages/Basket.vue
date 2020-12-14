<template>
  <div>
    <h3>Корзина: <span>{{nn | productCounterNameder}}</span></h3>

    <div v-if="GET_BASKET_PRODUCTS.length === 0" class="empty-basket">Корзина пустая</div>
    <div v-else>
      <div v-for="(product, ind) of GET_BASKET_PRODUCTS" :key="ind"
           class="basket"
      >
        <basket-cart :product="product"/>
      </div>

    </div>
    <div @click="$router.push('/')" class="control">Продолжить выбор</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import basketCart from "~/components/basketCart.vue";
import {mapGetters} from "vuex";

export default Vue.extend({
  components: {
    basketCart
  },
  data: () => ({
    nn: 3
  }),
  computed: {
    ...mapGetters([
      'GET_BASKET_PRODUCTS'
    ])
  },
  methods: {},
  filters: {
    productCounterNameder(val: number): string {
      if (val === 1)
        return '1 товар'
      if (val < 5)
        return '2 товара'
      return `${val} товаров`
    }
  }
})

</script>

<style scoped lang="scss">
h3 span {
  color: $grey;
}

.control {
  margin-top: rem(20);
  @extend .btn_common;
  background: $white;
  border: none;
}

</style>
