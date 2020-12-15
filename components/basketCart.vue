<template>
  <div class="basket">
    <div class="basket__img" :style="{backgroundImage: `url(${product.img})`}"></div>
    <div class="basket__id">{{product.id}}</div>
    <div class="basket__description">{{product.name}} {{product.description}} {{product.specification.color}}</div>
    <counter :id="product.id"/>
    <div class="basket__price">{{product.price | splitPrice}} <span>₽</span></div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'
import {Product} from '~/types'
import counter from '~/components/counter.vue'

export default Vue.extend({
  components: {
    counter
  },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  filters: {
    splitPrice: function (val: number): string {
      let [a, b, c,...rest] = val.toString().split('').reverse()
      return [rest.reverse().join(''), ' ', c, b, a].join('')
    }
  }

})
</script>

<style scoped lang="scss">
.basket {
  display: grid;
  grid-template-columns: rem(160) 1fr rem(100) rem(100);
  grid-column-gap: rem(20);
  grid-auto-rows: rem(25);
  width: 100%;
  box-sizing: border-box;
  padding: rem(20);
  background: $white;
  background-origin: padding-box;

  &__img {
    grid-area: 1/1/7/1;
    width: 100%;
    height: rem(140);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: #777777 1px solid;
  }

  &__id {
    grid-area: 2/2/2/2;
    font-size: rem(16);
    font-weight: 300;
    line-height: rem(16);
    color: $grey;
  }
  &__description {
    grid-area: 3/2/5/2;
    font-size: rem(20);
    font-weight: 600;
    line-height: rem(25);
  }
  &__price {
    grid-area: 3/4/3/4;
    @extend .price;
    line-height: rem(25);
  }

}
</style>
