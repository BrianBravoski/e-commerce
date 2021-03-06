import React from 'react'
//import Product from '../components/Product'
import products from '../product'
import { useParams } from 'react-router-dom';
import Product from '../components/Product';


export default function ProductDescription() {

  const { id } = useParams();
  const product = products.find((p) => p._id === (id));


  return (
    <div>
      <h1>Product Description</h1>
      <h2>{id}</h2>
      {(product).name}
    </div>
  );
}
