<script setup lang="ts">
import ProductDetails from '@/components/ProductDetails.vue'
defineProps({ id: Number })
</script>

<template>
  <ProductDetails :id="id" />
</template>
