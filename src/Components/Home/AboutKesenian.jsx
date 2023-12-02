import Background from "../../assets/bg-wayang-kulit.png"
import "../../style/componets_style/aboutKesenian.css"


export default function AboutKesenian(){

    function fAboutKesenian(){
        window.location.href = "https://google.com"
    }
    window.addEventListener("scroll",(event)=>{
        let scroll = window.scrollY;
        if (scroll >= 900 ){
            document.querySelector('#aboutkesenian').classList.remove('disable')
        }else{
            document.querySelector('#aboutkesenian').classList.add('disable')
        }
    })

    return(
        <>
            <div className="about-kesenian disable" id="aboutkesenian">
                <img src={Background} alt="background" />
                <div className="text-field">
                    <h1>Explorasi Kesenian Tradisional</h1>
                    <p>Jelajahi keindahan seni di setiap klik! Temukan kisah-kisah kreatif dan pengalaman seni yang tak terlupakan. Ayo, mulailah petualangan seni Anda sekarang!</p>
                    <div className="flex-container">
                        <button className="about-button">Explore Lebih Lanjut</button>
                    </div>
                </div>
            </div>
            <div className="about-kesenian-field" onClick={fAboutKesenian}>

            </div>
        </>
    )
    
    
}