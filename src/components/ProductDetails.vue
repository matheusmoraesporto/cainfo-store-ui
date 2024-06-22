<script lang="ts">
import type { DTOProduct } from '@/models/product'
import productService from '@/service/product.service'
import productUtils from '@utils/product'
import { onMounted, ref } from 'vue'
import SizeChart from '@components/SizeChart.vue'
import ToastMessage from '@components/shared/ToastMessage.vue'
import { useCartStore } from '@store/CartStore'
import type { CartItem } from '@/models/cart'

export default {
  components: {
    SizeChart,
    ToastMessage
  },
  props: {
    id: Number
  },
  setup({ id }) {
    const displayValue = ref('')
    const hideToast = ref(true)
    const highlightedPhoto = ref('')
    const highlightedPhotoIndex = ref(0)
    const product = ref({} as DTOProduct)
    const selectedSizeIndex = ref(-1)
    const selectedColorIndex = ref(-1)
    const title = ref('')
    const titleAddProduct = ref('Adicionar item ao carrinho')
    const titleBuyProduct = ref('Comprar item')
    const titleColorList = 'Escolha sua cor:'
    const titleSizeList = 'Escolha seu tamanho:'
    const toastMessage = 'O item foi adicionado ao seu carrinho'

    onMounted(async () => {
      product.value = (await productService.getProduct(id as number)) as DTOProduct
      title.value = productUtils.getFullName(product.value)
      highlightedPhoto.value = product.value.photos[0].url
      displayValue.value = productUtils.getDisplayValue(product.value.value)
    })

    return {
      displayValue,
      hideToast,
      highlightedPhoto,
      highlightedPhotoIndex,
      product,
      selectedColorIndex,
      selectedSizeIndex,
      title,
      titleAddProduct,
      titleBuyProduct,
      titleColorList,
      titleSizeList,
      toastMessage
    }
  },
  computed: {
    canBuyProduct(): boolean {
      return this.selectedColorIndex >= 0 && this.selectedSizeIndex >= 0
    }
  },
  methods: {
    selectPhoto(index: number): void {
      if (index !== this.highlightedPhotoIndex) {
        const selected = this.product.photos[index]
        this.highlightedPhoto = selected.url
        this.highlightedPhotoIndex = index
      }
    },
    selectColor(index: number): void {
      this.selectedColorIndex = index
    },
    selectSize(index: number): void {
      this.selectedSizeIndex = index
    },
    addToCart(): void {
      const { id, name, genre, course, value, sizes, colors } = this.product
      const newCartItem: CartItem = {
        id,
        name,
        genre,
        course,
        value,
        amount: 1,
        selectedColor: colors[this.selectedColorIndex],
        selectedSize: sizes[this.selectedSizeIndex]
      }
      const store = useCartStore()
      store.addItem(newCartItem)
      this.showToast()
    },
    buyItem(): void {
      this.addToCart()
      this.$router.push({ path: '/purchase' })
    },
    showToast(): void {
      this.hideToast = false
      setTimeout(() => {
        this.hideToast = true
      }, 3000)
    }
  }
}
</script>

<template>
  <div class="product-details-container">
    <div class="product-photos">
      <img :src="highlightedPhoto" class="highlighted-photo" width="450" height="450" />
      <div class="product-photos-list">
        <img
          v-for="(photo, index) in product.photos"
          v-bind:key="index"
          @click="selectPhoto(index)"
          :src="photo.url"
          class="product-photo"
          :class="{ 'product-photo-selected': index === highlightedPhotoIndex }"
          width="60"
          height="60"
        />
      </div>
      <SizeChart :sizes="product.sizes" class="size-chart" />
    </div>
    <div class="product-details">
      <h1>{{ title }}</h1>
      <span class="value">R${{ displayValue }}</span>
      <div class="size-list-container">
        <span class="list-title">{{ titleSizeList }}</span>
        <div class="size-list">
          <span
            class="size"
            v-for="(size, index) in product.sizes"
            v-bind:key="index"
            @click="selectSize(index)"
            :class="{ selected: index === selectedSizeIndex }"
          >
            {{ size.acronym }}
          </span>
        </div>
      </div>
      <div class="color-list-container">
        <span class="list-title">{{ titleColorList }}</span>
        <div class="color-list">
          <span
            class="color"
            :class="{ selected: index === selectedColorIndex }"
            :style="{ backgroundColor: color.hexadecimal }"
            v-for="(color, index) in product.colors"
            v-bind:key="index"
            @click="selectColor(index)"
          ></span>
        </div>
      </div>
      <div class="buttons-container">
        <button :disabled="!canBuyProduct" class="primary-button" @click="addToCart()">
          {{ titleAddProduct }}
        </button>
        <button :disabled="!canBuyProduct" class="secondary-button" @click="buyItem()">
          {{ titleBuyProduct }}
        </button>
      </div>
    </div>
  </div>
  <ToastMessage :hidden="hideToast" :message="toastMessage" />
</template>

<style lang="scss">
.product-details-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;

  .product-photos {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .highlighted-photo {
      border: solid 1px var(--light-grey);
      border-radius: 4px;
    }

    .product-photos-list {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 3px;
      margin-top: 15px;

      .product-photo {
        border: solid 1px var(--light-grey);
        border-radius: 2px;
        cursor: pointer;

        &:hover {
          border-color: var(--yellow);
        }

        &.product-photo-selected {
          border-color: var(--yellow);
        }
      }
    }

    .size-chart {
      margin-top: 20px;
    }
  }

  .product-details {
    h1 {
      font-weight: bold;
      max-width: 500px;
    }

    .value {
      color: var(--yellow);
      font-size: 32px;
      font-weight: bold;
    }

    .buttons-container {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      gap: 10px;
    }
  }
}

.color-list-container,
.size-list-container {
  margin-top: 10px;

  .list-title {
    font-size: 16px;
  }

  .color-list,
  .size-list {
    display: flex;
    margin-top: 5px;
    gap: 5px;

    .color,
    .size {
      display: flex;
      align-items: center;
      justify-content: center;
      border: solid 1px var(--light-grey);
      border-radius: 30px;
      -moz-border-radius: 30px;
      -webkit-border-radius: 30px;
      padding: 5px;
      width: 40px;
      height: 40px;
      cursor: pointer;
      transition-duration: 200ms;

      &.selected {
        border-color: var(--yellow);
        border-width: 3px;
        color: var(--yellow);
        font-weight: bold;
      }
    }
  }
}
</style>
