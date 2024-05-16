<script lang="ts">
import type { DTOProduct } from '@/models/product'
import productService from '@/service/product.service'
import productUtils from '@utils/product'
import { onMounted, ref } from 'vue'

export default {
  props: {
    id: Number
  },
  setup({ id }) {
    const product = ref({} as DTOProduct)
    const title = ref('')

    onMounted(async () => {
      product.value = (await productService.getProduct(id as number)) as DTOProduct
      title.value = productUtils.getFullName(product.value)
    })

    return {
      product,
      title
    }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ product }}</p>
</template>
