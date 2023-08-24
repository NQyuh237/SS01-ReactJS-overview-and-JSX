// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/manager-producte/Navbar';
// import Banner from './components/manager-producte/Banner';
// import ListProduct from './components/manager-producte/ListProduct';
// import Footer from './components/manager-producte/Footer';
// import Header from './components/manager-producte/Header';
// import Index_bai6 from "./components/bai6/Index_bai6";

import Shopping_Cart_Template from "./components/4/Shopping_Cart_Template";
import Main_User from "./components/5/Main";
import Style_User from "./components/5/Style_User";

function App() {
  return (
    <>
      {/* <header>
        <h1 style={{ fontSize: "20px" }} className="heading">Day la the header</h1>
        <h2>Nam nay toi {age} tuoi</h2>
        <h2>toi la {user}</h2>
      </header> */}
      {/* <h1>tong cua {x} va {y} la: {sum}</h1> */}
      {/* Bai6 */}
      {/* <Index_bai6 /> */}
      {/* bai4 */}
      {/* <Shopping_Cart_Template/> */}

      {/* bai5 */}
      <Style_User />
      <Main_User/>
    </>
  );
}

export default App;
