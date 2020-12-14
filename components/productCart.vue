<template>
  <div class="cart">
    <div class="cart__img"
         :style="{backgroundImage: `url(${product.img})`}"
    ></div>
    <div class="cart__name">{{product.name}}</div>
    <div class="cart__description">{{product.description}}</div>
    <div class="cart__price">{{product.price}} <span>₽</span></div>
    <div class="cart__btn">Купить</div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    product: {
      type: Object,
      required: true
    },
    computed: {
      img() {
        return 5
      }
    }
  }

})
</script>

<style scoped lang="scss">
.cart {
  width: rem(270);
  height: fit-content;
  box-sizing: border-box;
  padding: rem(10);
  border: $grey 1px solid;

  &__img {
    width: 100%;
    height: rem(200);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: red 1px solid;
  }

  &__name, &__description {
    margin-top: rem(5);
    color: $grey;
    font-size: rem(16);

  }
}


</style>
