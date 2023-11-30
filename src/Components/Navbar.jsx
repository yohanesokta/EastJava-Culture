import "../style/navbar.css";
import Logo from "../assets/logo.png";
import Gmaterial from "./bundle/GoogleMaterial";
import React, { useState } from 'react';


const DropdownMenuBudaya = () => {
  return (
    <div className="dropdown-menu">
      <a href="#">Destinasi Budaya</a>
      <a href="#">Festival Budaya</a>
      <a href="#">Gaya Hidup Tradisional</a>
      <a href="#">Destinasi Budaya</a>
    </div>
  );
};

const Navbar = () => {

  let drop = false
  const setDrop = () =>{
    if (drop) {
      document.getElementById('navbar').classList.remove('active')
      drop = false
    } else{
      document.getElementById('navbar').classList.add('active')
      drop = true
    }
  }

  return (
    <>
      <nav id="navbar">
        <img src={Logo} alt="logo" />
        <div className="btn-dropdown" onClick={setDrop}>
          <Gmaterial name="segment" />
        </div>
        <div className="col-nav">
          <a href="#" className="nav-menu">
            <p>Home</p> <Gmaterial hide="yes" name="fiber_manual_record" />
          </a>
          <a href="#" className="nav-menu">
            <p>Budaya</p> <Gmaterial name="arrow_drop_down" />
            <DropdownMenuBudaya />
          </a>
          <a href="#" className="nav-menu">
            <p>Kesenian</p> <Gmaterial name="arrow_drop_down" />
            <DropdownMenuBudaya />
          </a>
          <a href="#" className="nav-menu">
            <p>Kuliner</p> <Gmaterial hide="yes" name="fiber_manual_record" />
          </a>
        </div>
        <div className="search">
          {/* <input></input> */}
          <Gmaterial name="search" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
