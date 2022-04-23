import React from 'react'
import { Link } from 'react-router-dom'


export default function Product({ product }) {
    return (
        <div className='col-md-3 m-5 card p-2'>
            <div >
                <Link to={`product/${product.id}`}>
                <img src={product.image} alt="" className="img-fluid" />
                <h3>{product.name}</h3>
                <h3>Rating: {product.rating}</h3>
                <h3>price: {product.price}</h3>
                </Link>
            </div>
        </div>
    )
}
