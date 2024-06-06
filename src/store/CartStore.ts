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
      this.cart.push(item)
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
