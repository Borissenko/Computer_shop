<template>
  <div class="main-wrapper">
    <div class="main-wrapper__header">
      computer store
    </div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
body {
  background: $liteGrey;
}
.main-wrapper {
  max-width: rem(1200);
  margin: 0 auto;

  &__header {
    height: rem(40);
    margin-top: rem(20);
    border-top: $grey 1px solid;
    border-bottom: $grey 1px solid;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-transform: uppercase;
  }
}
</style>
