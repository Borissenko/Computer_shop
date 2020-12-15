<template>
  <div>
    <h3>
      Характеристики {{product.specification.screenDiagonal}}" {{product.name}} {{product.specification.color}}
    </h3>
    <div class="anons">
      <div class="anons__img" :style="{backgroundImage: `url(${product.img})`}"></div>
      <div class="anons__price">{{product.price | splitPrice}} <span>₽</span></div>
      <div @click="onPutProductToBasket(product.id)" class="anons__btn">Купить</div>
    </div>

    <div class="specification">
      <div class="specification__title">
        Характеристики {{product.specification.screenDiagonal}}" {{product.name}} {{product.specification.color}}
      </div>

      <div class="specification__section">Заводские данные</div>
      <div>Гарантия</div>
      <div>{{product.specification.guarantee}} месяца</div>

      <div class="specification__section">Классификация</div>
      <div>Тип устройства</div>
      <div>{{product.name}}</div>
      <div>Диагональ экрана</div>
      <div>{{product.specification.screenDiagonal}}"</div>
      <div>Год выпуска</div>
      <div>{{product.specification.release}}</div>

      <div class="specification__section">Внешний вид</div>
      <div>Цвет</div>
      <div>{{product.specification.color}}</div>
      <div>Тип дизайна</div>
      <div>{{product.description}}</div>
    </div>

    <div @click="$router.push('/')" class="btn">Вернуться на главную</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapGetters, mapMutations} from "vuex";
import {Product} from '~/types'

export default Vue.extend({
  data: () => ({
    product: {} as Product
  }),
  computed: {
    ...mapGetters([
      'GET_PRODUCT'
    ])
  },
  filters: {
    splitPrice: function (val: number): string {
      let [a, b, c,...rest] = val.toString().split('').reverse()
      return [rest.reverse().join(''), ' ', c, b, a].join('')
    }
  },
  methods: {
    ...mapMutations([
      'PUT_PRODUCT_TO_BASKET'
    ]),
    onPutProductToBasket(id: number) {
      this.PUT_PRODUCT_TO_BASKET(id)
      this.$router.push('/Basket')
    }
  },
  created() {
    this.product = this.GET_PRODUCT(+this.$route.params.id)
  }
})
</script>

<style scoped lang="scss">
.anons {
  width: 100%;
  height: rem(180);
  margin-top: rem(20);
  @extend .information-place;

  &__img {
    width: 100%;
    height: rem(160);
    grid-area: 1 / 1 / span 8 / 1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &__price {
    grid-area: 1 / 2 / span 4 / 3;
    align-self: center;
    font-size: rem(20);
    font-weight: 700;
    line-height: rem(30);

    & :last-child {
      color: $grey;
      font-weight: 400;
    }
  }

  &__btn {
    grid-area: 5 / 2 / span 4 / 3;
    align-self: start;
    width: 100%;
    @extend .btn_common;
    background: $orange;
    border-color: $orange;
    color: $white;
  }

}

.specification {
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  margin-top: rem(20);
  padding-top: rem(40);
  padding-bottom: rem(40);
  @extend .information-place;
  grid-auto-flow: row;

  &__title {
    grid-column: span 2;
    grid-row: span 2;
    font-size: rem(16);
    font-weight: 700;
    line-height: rem(18);
  }

  &__section {
    grid-column: span 2;
    grid-row: span 2;
    align-self: end;
    font-weight: 700;
  }
}

.btn {
  margin-top: rem(40);
  @extend .btn_common;
  background: $white;
  border-color: $liteGrey;
}

</style>
