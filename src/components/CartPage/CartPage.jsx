import React, { useState, useEffect } from 'react';

import { CardProductCart } from '../CardProductCart/CardProductCart';

import { getProducts } from '../../api/requests';

import './CartPage.scss';

export const CartPage = () => {
    const [productsCart, setProductsCart] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);

    const fetchProducts = async () => {
        const resProd = await getProducts();

        const storedCart = JSON.parse(localStorage.getItem("cart"));

        const arrayProducts = [];

        resProd.forEach((e) => {
            if (storedCart.includes(e.id)) {
                arrayProducts.push(e);
            }
        })

        setProductsCart(arrayProducts);

        let total = 0;
        arrayProducts.forEach((e) => {
            total = total + e.price
        })
        setTotalPrice(total);
    }


    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="global__container">
            <div className="cartpage__container">
                <h1 className="cartpage__title">Tu Carrito!</h1>
                {productsCart ?
                    productsCart.map((e) => (
                        <CardProductCart
                            id={e.id}
                            name={e.title}
                            image={e.image}
                            price={e.price}
                        />))
                    :
                    null
                }
                <div className="cartpage__total-container">
                    <span className="cartpage__total">TOTAL: {totalPrice}</span>
                    <button className="cartpage__pay">PAGAR AHORA</button>
                </div>
            </div>
        </div>
    )
}
