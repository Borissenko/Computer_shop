export interface Product {
  id: number,
  name: string,
  description: string,
  price: string,
  img: string,
  specification: Specification
}

interface Specification {
  guarantee: number
  release: number
  color: string
  screenDiagonal: number
}

export interface RootState {
  products: Product[],
  clientBasket: number[]
}

