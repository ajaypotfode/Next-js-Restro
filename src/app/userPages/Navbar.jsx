"use client"
import React, { useContext, useRef } from "react";
import Image from "next/image";
import { FaBars, FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const navbarRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
  }

  const handlecart = () => {
    return router.push("/cart")
  }

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
        <Image src="/images/logo.png" alt="Example Image" width={500} height={300} />
          {/* <img src={Logo} alt="" /> */}
        </a>
        <nav className="navbar" ref={navbarRef}>
        {/* <nav className="navbar"> */}
          <ul>
          <li className="link"><a href="#home">home</a></li>
          <li className="link"><a href="#about">about</a></li>
          <li className="link"><a href="#menu">menu</a></li>
          <li className="link"><a href="#review">review</a></li>
          <li className="link"><a href="#contact">contact</a></li>
          <li className="link"><Link href="/login" className="btn">Login</Link></li>
          <li className="link"><Link href="/admin" className="btn">Dashboard</Link></li>
          </ul>
        </nav>
        <div className="icons">
          <div
            // className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={handlecart}
          ><FaCartPlus /><sup className="cartCount"></sup></div>

          <div
            // className="fa-solid fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ><FaBars /></div>
        </div>
      </header>
     {/* <ToastContainer
         position="top-center"
         autoClose={2000}
         hideProgressBar/> */}
    </>

  );
};

export default Navbar;
