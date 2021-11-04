import React, { useState, useEffect } from 'react';

import { getQuantity } from '../../utils/functions';

import { FaTrash } from 'react-icons/fa'

import './CardProductCart.scss';

export const CardProductCart = ({ id, name, image, price }) => {
    const [quantity, setQuantity] = useState(0);

    const oneMore = (pId) => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));

        storedCart.push(pId);
        localStorage.setItem("cart", JSON.stringify(storedCart));

        setQuantity(getQuantity(storedCart, pId))
    }

    const oneLess = (pId) => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));

        const prodIndex = storedCart.indexOf(pId);
        storedCart.splice(prodIndex, 1)
        localStorage.setItem("cart", JSON.stringify(storedCart));

        setQuantity(getQuantity(storedCart, pId))
    }

    const deleteItem = (pId) => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));

        while(storedCart.includes(pId)) {
            const prodIndex = storedCart.indexOf(pId);
            storedCart.splice(prodIndex, 1)
        }

        localStorage.setItem("cart", JSON.stringify(storedCart));

        setQuantity(getQuantity(storedCart, pId))
    }

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));

        setQuantity(getQuantity(storedCart, id))
    }, [])

    return (
        <div className="ccart__container">
            <img className="ccart__image" src={image} alt={name} />
            <h3 className="ccart__name">{name}</h3>
            <span className="ccart__price">{price}</span>
            <div className="ccart__quantity-box">
                <span className="ccart__quantity-btn" onClick={() => oneLess(id)}>-</span>
                <span className="ccart__quantity">{quantity}</span>
                <span className="ccart__quantity-btn" onClick={() => oneMore(id)}>+</span>
            </div>
            <FaTrash onClick={() => deleteItem(id)} className="ccart__delete" />
        </div>
    )
}
