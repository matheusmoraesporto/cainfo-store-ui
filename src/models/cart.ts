import type { DTOColor } from '@models/color'
import type { DTOSize } from '@models/size'

export interface CartItem {
  id: number
  name: string
  genre: string
  course: string
  value: number
  amount: number
  selectedSize: DTOSize
  selectedColor: DTOColor
}
