import React from 'react'
//import Product from '../components/Product'
import products from '../product'

export default function ProductDescription(match) {

    const productid= match.params.id

    const product = products.find(product => product.id === productid)
 

  return (
    <div>
        <h1>Product Description</h1>
        <h2>{productid}</h2>
        <h2>{product.name}</h2>
            
    </div>
  )
}
