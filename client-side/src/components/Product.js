import React from 'react'

export default function Product({ product }) {
    return (
        <div className='col-md-3 m-5 card p-2'>
            <div >
                <img src={product.image} alt="" className="img-fluid" />
                <h3>{product.name}</h3>
                <h3>Rating: {product.rating}</h3>
                <h3>price: {product.price}</h3>
            </div>
        </div>
    )
}
