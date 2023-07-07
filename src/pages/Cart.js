import React from 'react'
import '../pages/Cart.css'
import { useSelector } from 'react-redux'

const Cart = () => {
    const products = useSelector(state => state.cart)
    console.log(products, 'sdfsdfds')
    return (
        <div>

            <h3> Cart </h3>
            <div className='cartWrapper'>


            </div>

        </div>
    )
}

export default Cart