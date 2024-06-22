import type { CartItem } from '@/models/cart'
import { defineStore } from 'pinia'

const localStorageCartItems = 'cartItems'

export const useCartStore = defineStore('cart', {
  state() {
    const cart: CartItem[] = []
    return {
      cart
    }
  },
  actions: {
    addItem(item: CartItem) {
      let isDuplicated = false
      for (let i = 0; i < this.cart.length; i++) {
        const currentItem = this.cart[i]
        const currentId = currentItem.id
        const currentIdSize = currentItem.selectedSize.idSize
        const currentIdColor = currentItem.selectedColor.idColor

        if (
          currentId === item.id &&
          currentIdSize === item.selectedSize.idSize &&
          currentIdColor === item.selectedColor.idColor
        ) {
          isDuplicated = true
          this.cart[i].amount++
          break
        }
      }

      if (!isDuplicated) {
        this.cart.push(item)
      }

      this.updateCartItemsIntoLocalStorage()
    },
    loadItemsFromLocalStorage() {
      const localStorageItems = localStorage.getItem(localStorageCartItems)
      if (localStorageItems) {
        const arrItems = JSON.parse(localStorageItems)
        this.cart = arrItems
      }
    },
    updateCartItemsIntoLocalStorage() {
      const itemsStr = JSON.stringify(this.cart)
      localStorage.setItem(localStorageCartItems, itemsStr)
    },
    cleanCartItemsIntoLocalStorage() {
      localStorage.removeItem(localStorageCartItems)
    }
  }
})
