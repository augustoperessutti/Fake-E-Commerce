import React, { useState } from 'react';

import './CardProduct.scss';

export const CardProduct = ({ image, title, description, price, id }) => {
    const [cart, setCart] = useState("nothing");

    const addCart = (pId) => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));

        if (storedCart === null) {
            const newCart = [];
            newCart.push(pId);
            localStorage.setItem("cart", JSON.stringify(newCart));
            setCart("done")
        } else {
            storedCart.push(pId);
            localStorage.setItem("cart", JSON.stringify(storedCart));
            setCart("done")
        }
    }

    return (
        <>
            <div className="card__container">
                <div className="card__image-box">
                    <img src={image} alt={title} className="card__image" />
                    <div className="card__price-box">
                        <span className="card__price">{price}</span>
                    </div>
                </div>
                <div className="card__info-box">
                    <a href="#" className="card__title">{title}</a>
                    <p className="card__description">{description?.substr(0, 70)}...</p>
                    <button
                        disabled={cart === "done" ? true : false}
                        className={cart === "nothing"
                            ? "card__add-cart"
                            :
                            [cart === "done" ? "card__add-cart card__add-cart-fine" : null]
                        }
                        onClick={() => addCart(id)}>{cart === "nothing"
                            ? "AÑADIR AL CARRITO"
                            :
                            [cart === "done" ? "AÑADIDO CORRECTAMENTE!" : null]
                        }
                    </button>
                </div>
            </div>
        </>
    )
}
