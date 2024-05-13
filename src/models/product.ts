export interface DTOProduct {
  name: string
  genre: string
  course: string
  value: number
  sizes: DTOSize[]
  colors: DTOColor[]
  photos: DTOPhoto[]
  thumbPhoto: string
}

export interface DTOSize {}

export interface DTOColor {}

export interface DTOPhoto {}

export const handleValue = (product: DTOProduct): string => {
  return product.value.toFixed(2).toString().replace('.', ',')
}

export const getFullName = (product: DTOProduct): string => {
  const genreDescription = getGenreDescription(product)
  return genreDescription ? `${product.name} - ${genreDescription}` : product.name
}

const getGenreDescription = (product: DTOProduct): string => {
  switch (product.genre) {
    case 'M':
      return 'Masculino'
    case 'F':
      return 'Feminino'
    default:
      return ''
  }
}
