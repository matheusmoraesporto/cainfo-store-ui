<script setup lang="ts">
import IconCart from '@icons/IconCart.vue'
</script>

<template>
  <header>
    <RouterLink class="logo-container" to="/">
      <img class="logo cainfo-logo" src="@assets/cainfo-logo.jpg" />
      <img class="logo unisinos-logo" src="@assets/unisinos-logo.png" />
    </RouterLink>
    <div class="cart-container">
      <IconCart />
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;

  .logo-container {
    display: flex;
    align-items: center;

    .logo {
      margin: 10px;
    }

    .cainfo-logo {
      width: 45px;
      height: 45px;
    }

    .unisinos-logo {
      width: 96px;
      height: 25px;
    }
  }

  .cart-container {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
