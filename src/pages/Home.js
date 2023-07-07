import React from 'react'
import Product from '../components/product'

const Home = () => {
    return (
        <div>
            <h1> Welcome to the Ecommerce Website </h1>
            <section>
                <h3> These are the Products displayed </h3>
                <Product />
            </section>
        </div>
    )
}

export default Home