import React from 'react'
//import Product from '../components/Product'
import products from '../product'
import { Params, useParams } from 'react-router-dom';

export default function ProductDescription({match}) {

    const {id} = useParams();
    const product = products.find((p) => p._id === (id));
 

  return (
    <div>
        <h1>Product Description</h1>
        <h2>{id}</h2>
        <h2>{product.name}</h2>
            
    </div>
  )
}
