
export interface ProductsList {
    categories: Category[]
  }
  
   export interface Category {
    id: string
    name: string
    products: Product[]
  }
  
   export interface Product {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
  } 