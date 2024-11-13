
"use client"
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { menuimg } from "../../data/Data";
// import data from "../../data/menu"
import { UserAuthContext } from "../../context/foodItemContext";
import Image from "next/image";
import { MdFreeBreakfast } from "react-icons/md";
import { OrderFood } from "../../context/orderContext";


const Menu = () => {
  const foodContext = useContext(UserAuthContext);
  const cartContext = useContext(OrderFood)
  const { getItemsCategory, filterdData } = foodContext
  const { addCartItems, cartItem } = cartContext
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="menutype" id="menulist" >
          {menuimg.map((items, index) => {
            return (
              <>
                <div className="menuitems" key={items.id} onClick={() => getItemsCategory(items.name)}>
                  <span>{items.img}</span>
                  <p>{items.name}</p>
                </div>
              </>
            )
          })}
        </div>
        <div className="box-container">
          {filterdData.map((item, index) => {
            const { _id, name, price, image, description } = item
            return (
              <div className="box" key={_id}>
                <div className="img">
                  <Image src={image} height={50} width={80} alt="alternate img" />
                </div>
                <h3>{name}</h3>
                <h5 className="text-light">{description}</h5>
                <div className="price">
                  {price} .Rs
                </div>
                <button
                  className="btn bg-warning"
                  onClick={() => addCartItems({ _id, name, price, image, quantity: 1 })}
                >Add TO Cart</button>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Menu;
