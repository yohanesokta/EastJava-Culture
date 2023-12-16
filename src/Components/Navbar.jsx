import "../style/navbar.css";
import Logo from "../assets/logo.png";
import Gmaterial from "./bundle/GoogleMaterial";
import React, { useState } from 'react';
import Login from "./bundle/Login";


const DropdownMenuBudaya = () => {
  return (
    <div className="dropdown-menu">
      <a href="/destinasi">Destinasi Budaya</a>
      <a href="/festival">Festival Budaya</a>
      <a href="/gayahidup">Gaya Hidup Tradisional</a>
    </div>
  );
};

const Navbar = ({noGray}) => {
let prop
  if (noGray) { 
    prop = ""
  }else{
    prop = "nav-gray"

  }
  
  
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
      <nav id="navbar" className={prop}>
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
          <a className="nav-menu" href="/kerajinan">
            <p>Kerajinan</p> <Gmaterial hide="yes" name="arrow_drop_down" />
          </a>
          <a href="/kuliner" className="nav-menu">
            <p>Kuliner</p> <Gmaterial hide="yes" name="fiber_manual_record" />
          </a>
        </div>
        <div className="search">
          <button onClick={()=>{window.location.href = "/feedback"}}>Umpan Balik </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
