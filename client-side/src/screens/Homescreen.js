import React from 'react'
import products from '../product'
import Product from '../components/Product'


export default function Homescreen() {
    return (
        <div>
            <h1>Home Screen</h1>

            <div className='row justify-content-center'>
                {products.map(product => {


                    return <Product product= {product} />
                })}
            </div>

        </div>
    )
}
