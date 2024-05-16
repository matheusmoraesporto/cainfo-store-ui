import type { DTOColor } from '@models/color'
import type { DTOPhoto } from '@models/photo'
import type { DTOSize } from '@models/size'

export interface DTOProduct {
  id: number
  name: string
  genre: string
  course: string
  value: number
  sizes: DTOSize[]
  colors: DTOColor[]
  photos: DTOPhoto[]
  thumbPhoto: string
}
