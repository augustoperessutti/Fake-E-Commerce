import React, { useState, useEffect } from 'react';

import { CardProduct } from '../CardProduct/CardProduct';

import { getProducts } from '../../api/requests';

import './HomePage.scss';

export const HomePage = () => {
    const [products, setProducts] = useState(null);

    const fetchProducts = async () => {
        const resProd = await getProducts();
        setProducts(resProd);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="global__container">
            <div className="homepage__container">
                <h1 className="homepage__title">Nuestros Productos Gamers!</h1>
                <div className="homepage__products-container">
                    {products === null ?
                        "Cargando..."
                        :
                        products.map((e) => (
                            <CardProduct
                                key={e.id}
                                id={e.id}
                                title={e.title}
                                image={e.image}
                                description={e.description}
                                price={e.price}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
