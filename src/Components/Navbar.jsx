import "../style/navbar.css";
import Logo from "../assets/logo.png";
import Gmaterial from "./bundle/GoogleMaterial";
import React, { useState } from 'react';
import Login from "./bundle/Login";


const DropdownMenuBudaya = () => {
  return (
    <div className="dropdown-menu">
      <a href="/#destinasiBudaya">Destinasi Budaya</a>
      <a href="/#festivalBudaya">Festival Budaya</a>
      <a href="/#gayaHidup">Gaya Hidup Tradisional</a>
      <a href="#">Destinasi Budaya</a>
    </div>
  );
};

const DropdownMenuKesenian = () => {
  return (
    <div className="dropdown-menu drop2">
      <a href="#">Kerajinan Tangan</a>
      <a href="#">Bahasa dan Sastra</a>
      <a href="#">Gaya Hidup Tradisional</a>
    </div>
  );
}

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
function LoginButton(){
  document.getElementById('login-container').style.display = "flex"
}

  return (
    <>
      <nav id="navbar">
        <img src={Logo} alt="logo" />
        <div className="btn-dropdown" onClick={setDrop}>
          <Gmaterial name="segment" />
        </div>
        <div className="col-nav">
          <a href="/#" className="nav-menu">
            <p>Home</p> <Gmaterial hide="yes" name="fiber_manual_record" />
          </a>
          <a className="nav-menu">
            <p>Budaya</p> <Gmaterial name="arrow_drop_down" />
            <DropdownMenuBudaya />
          </a>
          <a className="nav-menu">
            <p>Kesenian</p> <Gmaterial name="arrow_drop_down" />
            <DropdownMenuKesenian />
          </a>
          <a href="/#kuliner" className="nav-menu">
            <p>Kuliner</p> <Gmaterial hide="yes" name="fiber_manual_record" />
          </a>
        </div>
        <div className="search">
          <button onClick={LoginButton}>Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
