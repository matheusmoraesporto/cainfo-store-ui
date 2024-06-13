<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useCartStore } from '@store/CartStore'
import MainFooter from '@components/shared/MainFooter.vue'
import MainHeader from '@components/shared/MainHeader.vue'
const store = useCartStore()
store.loadItemsFromLocalStorage()
</script>

<template>
  <MainHeader />
  <main>
    <RouterView />
  </main>
  <MainFooter />
</template>

<style lang="scss">
main {
  margin: 20px;
}
</style>
