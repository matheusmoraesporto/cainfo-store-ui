<script lang="ts">
import { getFullName, handleValue, type DTOProduct } from '@/models/product'
export default {
  props: {
    product: {
      type: Object as () => DTOProduct,
      required: true
    }
  },
  data() {
    return {
      displayValue: handleValue(this.product),
      fullName: getFullName(this.product),
      // TODO: Use image from product
      thumbPhoto:
        'https://res.cloudinary.com/dqhrdutte/image/upload/fl_preserve_transparency/v1715637419/white-1_tugwvy.jpg?_s=public-apps'
    }
  }
}
</script>

<template>
  <div class="card-container">
    <img :src="thumbPhoto" />
    <h2>{{ fullName }}</h2>
    <h3>{{ product.course }}</h3>
    <div class="value-container">
      <span>R${{ displayValue }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-direction: column;
  border: solid 1px #909090;
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
  width: 280px;

  &:hover {
    transform: scale(1.05);
    transition-duration: 500ms;
    border-color: #fdae05;
    cursor: pointer;
  }

  img {
    margin-bottom: 20px;
  }

  h2 {
    font-weight: 700;
  }

  h3 {
    color: #6d6d6e;
    font-weight: 500;
  }

  .value-container {
    margin-top: auto;

    span {
      color: #fdae05;
      font-weight: 900;
      font-size: 22px;
    }
  }
}
</style>
