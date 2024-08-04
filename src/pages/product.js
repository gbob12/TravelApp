import React from 'react';

import '../styles/product.css';

const Product = () => {
    const products = [
        {
            id: 1,
            name: 'Waterfalls',
            description: 'take a deep of refreshment ' ,
            price: 199.99,
            image: '/emerald_pool_dominica-1.jpg'

        },
        {
            id: 2,
            name: 'Mountains',
            description: 'hike your worries away ',
            price: 299.99,
            image: '/boilinglake.jpeg'

        },
        {
            id: 3,
            name: 'Hotsprings',
            description: 'regovinate mind , body and soul',
            price: 399.99,
            image: '/th (2).jpg'


        },

    ];





    return (
        <div className="products-page">
            <h1>Our Products</h1>
            <div className="products-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <button className="btn btn-primary">Add to Cart</button>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Product;










