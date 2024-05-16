import type { DTOProduct } from '@/models/product'
import api from './api'

const path = '/product'

export default {
  async listProducts(): Promise<DTOProduct[] | undefined> {
    try {
      const { data } = await api.get(path)
      return data
    } catch (err) {
      console.log(err)
    }
  },

  async getProduct(id: number): Promise<DTOProduct | undefined> {
    try {
      const { data } = await api.get(`${path}/${id}`)
      return data
    } catch (err) {
      console.log(err)
    }
  }
}
