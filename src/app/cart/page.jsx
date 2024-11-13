"use client"
import React, { useContext, useEffect, useRef, useState } from 'react';
import '../../assets/css/cart.css'
// import '../../assets/css/cart.css';
import { OrderFood } from '../../context/orderContext';
import Image from "next/image";

const Cart = () => {
    const context = useContext(OrderFood);
    // const navigate = useNavigate();
    const { cartItem,totalPrice, handleQuantityChange,removeCartItems} = context;

    return (
        <>
            {/* <div className="cart-Container" ref={mainCont}> */}
            <div className="cart-Container" >
                <h1 className="heading">
                    <span>My</span> Cart
                    <button
                        className="position-absolute top-0 end-0 fs-3 m-4 "
                        id="cart-btn"
                    >
                        {/* <FaXmark /> */}
                    </button>
                </h1>
                <table className='cart-items'>
                    <thead>
                        <tr>
                            <th><label htmlFor="">Food</label></th>
                            <th><label htmlFor="">quantity</label></th>
                            <th><label htmlFor="">price</label></th>
                            <th><label htmlFor="">action</label></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItem.map((item, index) => {
                                const { _id, name, price, image, quantity } = item
                                return (
                                    <tr key={_id}>
                                        <td>
                                            <div className='item-name'>
                                                <Image src={image} alt="" height={60} width={60} />
                                                <span className='items-value'>{name}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <input
                                                className='items-value'
                                                type="number"
                                                name='quantity'
                                                value={quantity}
                                                min={1}
                                                onChange={(e)=>handleQuantityChange(index,e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <span className='items-value'>
                                                {price * quantity} Rs
                                            </span>
                                        </td>
                                        <td>
                                            <div className='action-btn'>
                                                <span id='delete-btn' onClick={()=>removeCartItems(_id)}>cancle</span>
                                                {/* <span>order</span> */}
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="cart-footer">
                    <div className='items'>
                        <label htmlFor="">Total</label>
                        <span className='items-value'>{totalPrice} Rs</span>
                    </div>
                    <button className='btn'>order</button>
                </div>
            </div>
        </>
    );
};

export default Cart;