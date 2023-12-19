import KerajinanTangan from "../../Components/Home/KerajinanTangan";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/bundle/Footer";
import Title from "../../Components/title";
export default function Kerajinan() {
    return (<>
        <Title string="East Java Culture | Kerajinan" />
        <Navbar />
        <div className="nav-gap"></div>
        <KerajinanTangan />
        <Footer />
    </>)
}