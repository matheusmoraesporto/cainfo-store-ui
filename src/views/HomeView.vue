<script lang="ts">
import type { DTOProduct } from '@/models/product'
import api from '@/service/api'
import { onMounted, ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  setup() {
    const mainTitle = 'Itens disponíveis para venda:'
    const products = ref([] as DTOProduct[])

    const getProducts = async () => {
      try {
        const { data } = await api.get('/product')
        products.value = data
      } catch (err) {
        console.log(err)
      }
    }

    onMounted(getProducts)

    return {
      mainTitle,
      products
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ mainTitle }}</h1>
    <div class="product-list">
      <div class="product" v-for="(product, index) in products" v-bind:key="index">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  margin: 20px;

  h1 {
    color: #fdae05;
    font-weight: 900;
    font-size: 32px;
    text-transform: uppercase;
    margin: 0 5px 20px 5px;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;

    .product {
      display: flex;
    }
  }
}
</style>
