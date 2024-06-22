<script lang="ts">
import type { CartItem } from '@/models/cart'
import { useCartStore } from '@store/CartStore'

export default {
  setup() {
    return {
      cartEmptyMessage: 'O carrinho está vazio!',
      productTitle: 'Product',
      genreTitle: 'Gênero',
      courseTitle: 'Curso',
      individualValueTitle: 'Valor individual',
      amountTitle: 'Quantidade',
      totalValueTitle: 'Valor total',
      colorTitle: 'Cor',
      sizeTitle: 'Tamanho'
    }
  },
  computed: {
    isCartEmpty(): boolean {
      const store = useCartStore()
      return store.cart.length === 0
    },
    cartItems(): CartItem[] {
      const store = useCartStore()
      return store.cart
    }
  }
}
</script>

<template>
  <div v-if="isCartEmpty" class="empty-cart-container">
    <span>{{ cartEmptyMessage }}</span>
  </div>
  <div v-else class="cart-items-container">
    <table>
      <tr>
        <th>{{ productTitle }}</th>
        <th>{{ genreTitle }}</th>
        <th>{{ courseTitle }}</th>
        <th>{{ colorTitle }}</th>
        <th>{{ sizeTitle }}</th>
        <th>{{ amountTitle }}</th>
        <th>{{ individualValueTitle }}</th>
        <th>{{ totalValueTitle }}</th>
      </tr>
      <tr v-for="(item, index) in cartItems" v-bind:key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.genre }}</td>
        <td>{{ item.course }}</td>
        <td>{{ item.selectedColor.value }}</td>
        <td>{{ item.selectedSize.acronym }}</td>
        <td>{{ item.amount }}</td>
        <td>R${{ item.value.toFixed(2).toString().replace('.', ',') }}</td>
        <td>R${{ (item.value * item.amount).toFixed(2).toString().replace('.', ',') }}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
.empty-cart-container {
  display: flex;
  justify-content: center;
  padding: 100px 0;

  span {
    color: var(--yellow);
    font-size: 34px;
    text-transform: uppercase;
    font-weight: bold;
  }
}

.cart-items-container {
  table {
    width: 100%;
    margin-top: 10px;
    background-color: var(--dark-grey);

    tr {
      th {
        text-align: left;
        background-color: var(--yellow);
        padding: 10px 3px;
      }

      td {
        background-color: var(--white);
        padding: 10px 3px;
      }
    }
  }
}
</style>
