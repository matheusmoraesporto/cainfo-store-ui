<script lang="ts">
import IconCart from '@icons/IconCart.vue'
import { useCartStore } from '@store/CartStore'
export default {
  components: {
    IconCart
  },
  computed: {
    isCartEmpty() {
      const store = useCartStore()
      return store.cart.length === 0
    },
    cartItems() {
      const store = useCartStore()
      return store.cart.reduce((prev, curr) => {
        return prev + curr.amount
      }, 0)
    }
  }
}
</script>

<template>
  <header>
    <RouterLink class="logo-container" to="/">
      <img class="logo cainfo-logo" src="@assets/cainfo-logo.png" />
      <img class="logo unisinos-logo" src="@assets/unisinos-logo.png" />
    </RouterLink>
    <div class="cart-container">
      <div v-if="!isCartEmpty" class="notification">
        {{ cartItems }}
      </div>
      <RouterLink class="logo-container" to="/purchase">
        <IconCart :color="'--white'" />
      </RouterLink>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  background-color: var(--black);
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

    .notification {
      background-color: var(--yellow);
      width: 15px;
      height: 15px;
      border-radius: 50%;
      z-index: 2;
      position: absolute;
      font-weight: bold;
      color: var(--white);
      font-size: 10px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
