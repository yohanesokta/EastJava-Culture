import "../style/navbar.css";
import Logo from "../assets/logo.png";
import Gmaterial from "./bundle/GoogleMaterial";


const DropdownMenuBudaya = () =>{
    return(
        <div className="dropdown-menu">
            <a href="#">Destinasi Budaya</a>
            <a href="#">Festival Budaya</a>
            <a href="#">Gaya Hidup Tradisional</a>
            <a href="#">Destinasi Budaya</a>
        </div>
    )
}


const Navbar = () => {
  return (
    <>
      <nav className="">
        <img src={Logo} alt="logo" />
        <div className="col-nav">
            <a href="#" ><p>Home</p> <Gmaterial hide="yes" name="fiber_manual_record" /></a>
            <a href="#" ><p>Budaya</p> <Gmaterial name="arrow_drop_down" />
                <DropdownMenuBudaya />
            </a>
            <a href="#"><p>Kesenian</p>  <Gmaterial name="arrow_drop_down" />
                <DropdownMenuBudaya />
            </a>
            <a href="#"><p>Kuliner</p> <Gmaterial hide="yes" name="fiber_manual_record" /></a>
        </div>
        <div className="search">    
            <Gmaterial name="search"/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
