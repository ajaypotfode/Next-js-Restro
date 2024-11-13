// import Image from "next/image";
import About from "./userPages/About";
import Contact from "./userPages/Contact";
import Menu from "./userPages/Menu";
import Review from "./userPages/Review";
import Home from "./userPages/Home";
import Navbar from "./userPages/Navbar";
import Footer from "./userPages/Footer";

export default function Main() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    <Review/>
    <Contact/>
    <Footer/>

    </>
  );
}
