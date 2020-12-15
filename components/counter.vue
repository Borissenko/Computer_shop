<template>
  <div class="counter">
    <div @click="PUT_PRODUCT_TO_BASKET(id)"> - </div>
    <div>{{GET_PRODUCT_AMOUNT(id)}}</div>
    <div @click="PUT_PRODUCT_TO_BASKET(-id)"> + </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";
import {mapMutations, mapGetters} from "vuex";
import {Product} from "~/types";

export default Vue.extend({
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'GET_PRODUCT_AMOUNT'
    ])
  },
  methods: {
    ...mapMutations([
      'PUT_PRODUCT_TO_BASKET'
    ])
  },
})
</script>

<style scoped lang="scss">

</style>
