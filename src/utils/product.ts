import type { DTOProduct } from '@/models/product'

const genreDescriptions: Record<string, string> = {
  M: 'Masculino',
  F: 'Feminino'
}

export default {
  getDisplayValue(product: DTOProduct): string {
    return product.value.toFixed(2).toString().replace('.', ',')
  },

  getNameAndGenre(product: DTOProduct): string {
    const { name } = product
    const genreDescription = this.getGenreDescription(product)
    return genreDescription ? `${name} - ${genreDescription}` : name
  },

  getFullName(product: DTOProduct): string {
    const { course, name } = product
    const fullName = `${name} ${course.toLowerCase()}`
    const genreDescription = this.getGenreDescription(product)
    return genreDescription ? `${fullName} - ${genreDescription}` : fullName
  },

  getGenreDescription(product: DTOProduct): string {
    return genreDescriptions[product.genre]
  }
}
