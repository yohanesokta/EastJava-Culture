import Navbar from "../Components/Navbar"
import Footer from "../Components/bundle/Footer"
import GayaHidup from "../Components/bundle/GayaHidup/GayaHidup"
import Title from "../Components/title"
const PageGayaHidup = () =>{
    return(<>
            <Title string="East Java Culture | Gaya Hidup" />
        <Navbar/>
        <div className="nav-gap"></div>
        <GayaHidup/>
        <Footer/>
    </>)
}
export default PageGayaHidup