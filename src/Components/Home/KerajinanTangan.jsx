import KerajinanBatik from "../KerajinanTanganComponents/Batik"
import KerajinanTop from "../KerajinanTanganComponents/KerajinanTop"
import KerajinanBenda from "../KerajinanTanganComponents/Benda"
const KerajinanTangan = () => {
    return(<>
        
        <KerajinanTop />
        <KerajinanBatik />
        <div className="gap"></div>
        <KerajinanBenda />
        <div className="gap"></div>
    </>)
}
export default KerajinanTangan