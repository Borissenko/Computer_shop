export interface Product {
  name: string,
  description: string,
  price: string,
  img: string,
  specification: Specification
}

interface Specification {
  guarantee: number
  color: string
  screenDiagonal: number
}

export interface RootState {
  products: Product[],
  clientBasket: Product[]
}

