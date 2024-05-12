<script lang="ts">
import type { DTOProduct } from '@/models/product'
import api from '@/service/api'
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const products = ref([] as DTOProduct[])

    const getProducts = async () => {
      const response = await api.get('/product')
      products.value = response.data
    }

    onMounted(getProducts)
    return { products }
  }
}
</script>

<template>
  <p>{{ products }}</p>
</template>
