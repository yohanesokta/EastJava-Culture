import KerajinanTangan from "../../Components/Home/KerajinanTangan";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/bundle/Footer";

export default function Kerajinan(){
    return(<>
            <Navbar/>
            <div className="nav-gap"></div>
            <KerajinanTangan />
            <Footer /> 
    </>)
}