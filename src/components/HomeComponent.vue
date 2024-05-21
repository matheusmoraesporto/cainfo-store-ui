<script lang="ts">
import type { DTOProduct } from '@/models/product'
import productService from '@service/product.service'
import { onMounted, ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  setup() {
    const mainTitle = 'Itens disponíveis para compra:'
    const products = ref([] as DTOProduct[])

    onMounted(async () => {
      products.value = (await productService.listProducts()) as DTOProduct[]
    })

    return {
      mainTitle,
      products
    }
  }
}
</script>

<template>
  <div class="home-container">
    <div class="title-container">
      <h1>{{ mainTitle }}</h1>
    </div>
    <div class="product-list">
      <div class="product" v-for="(product, index) in products" v-bind:key="index">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;

  .title-container {
    display: flex;
    justify-content: center;
    text-align: center;

    h1 {
      color: var(--yellow);
      font-weight: 900;
      font-size: 28px;
      text-transform: uppercase;
      margin: 0 5px 20px 5px;
    }
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .product {
      display: flex;
    }
  }
}
</style>
