import React from 'react';
import { useState, useEffect } from 'react';
import '../components/product.css';
import { add, remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Product = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            console.log(data, 'data');
            setProducts(data);


        }
        fetchProducts();
    }, [])


    const handleAdd = (data) => {
        dispatch(add(data));
    }

    const handleRemove = (data) => {
        dispatch(remove(data));
    }

    return (
        <div className="product-container">
            {console.log(products)}
            {products.map((data) => (
                <div key={data.id} className="product-item">
                    <h1 className="product-title">{data.title}</h1>
                    <p className="product-category">{data.category}</p>
                    <p className="product-price">${data.price}</p>
                    <img alt="img" className="product-image" src={data.image} />
                    <button onClick={() => handleAdd(data)} className="product-button">Add to Cart</button>
                    <button onClick={() => handleRemove(data)}> Remove </button>
                </div>
            ))}
        </div>
    )
}

export default Product