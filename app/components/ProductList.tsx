export default function ProductList({ products }: {
  products: Array<Product>
}){
  return (
    <div>
      { products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price} JPY</p>
        </div>
        ))
      }
    </div>
  )
}