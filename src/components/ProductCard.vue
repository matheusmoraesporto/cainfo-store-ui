<script lang="ts">
import { type DTOProduct } from '@/models/product'
import productUtils from '@utils/product'
export default {
  props: {
    product: {
      type: Object as () => DTOProduct,
      required: true
    }
  },
  data() {
    return {
      displayValue: productUtils.getDisplayValue(this.product),
      fullName: productUtils.getNameAndGenre(this.product)
    }
  }
}
</script>

<template>
  <RouterLink
    :to="{
      name: 'product',
      params: {
        id: product.id
      }
    }"
    v-bind:props="{ id: product.id }"
    class="card-container"
  >
    <img :src="product.thumbPhoto" />
    <h2>{{ fullName }}</h2>
    <h3>{{ product.course }}</h3>
    <div class="value-container">
      <span>R${{ displayValue }}</span>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-direction: column;
  border: solid 1px var(--light-grey);
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
  width: 280px;
  text-decoration: none;
  color: var(--black);
  background-color: var(--white);

  &:hover {
    transform: scale(1.05);
    transition-duration: 500ms;
    border-color: var(--yellow);
    cursor: pointer;
    z-index: 2;
  }

  img {
    margin-bottom: 20px;
  }

  h2 {
    font-weight: 700;
  }

  h3 {
    color: var(--dark-grey);
    font-weight: 500;
  }

  .value-container {
    margin-top: auto;

    span {
      color: var(--yellow);
      font-weight: 900;
      font-size: 22px;
    }
  }
}
</style>
