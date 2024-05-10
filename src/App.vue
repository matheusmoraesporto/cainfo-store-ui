<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainFooter from '@components/shared/MainFooter.vue'
import MainHeader from '@components/shared/MainHeader.vue'
</script>

<template>
  <MainHeader />
  <RouterView />
  <MainFooter />
</template>
