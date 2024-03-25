import React from 'react'
import { products } from "../../helper/data"

function ProductCard() {

    console.log(products)

  return (
    <div className='product-container'>
      
      <div className='cards'>
    {products.map(product=>(
        <div key={product.id} className='product-card' > 
       <img src={product.image} alt={product.title}/>
        <div className='price'><h3>{product.price}$</h3></div>
        <div className='product-title'><h2>{product.title}</h2></div>
        </div>

    ))}

      </div>


    </div>
  )
}

export default ProductCard
