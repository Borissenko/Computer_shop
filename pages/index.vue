<template>
  <div class="wrapper">
    <div v-for="(product, ind) of GET_PRODUCTS" :key="ind"
         @click="onShowThisOne(product.id)"
         class="cart"
    >
      <product-cart :product="product"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from 'vuex'
import productCart from '@/components/productCart.vue'

export default Vue.extend({
  components: {
    productCart
  },
  computed: {
    ...mapGetters([
      'GET_PRODUCTS'
    ])
  },
  methods: {
    onShowThisOne(id: number): void {
      this.$router.push(`product/${id}`)
    }
  },
})
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-flow: row wrap;
  margin: rem(10) 0 rem(60);
  justify-content: space-around;

  .cart {
    margin-top: rem(10);
    cursor: pointer;
  }
}
</style>
