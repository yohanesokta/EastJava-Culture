import Images from "../../../assets/GayaHidup/sedekahBumi.png";
import CardGayaHidup from "./CardGayaHidup";
import "../../../style/GayaHidup/GayaHidup.css";
import ImagePawon from "../../../assets/GayaHidup/pawon.png";
import ImageKeben from "../../../assets/GayaHidup/Kemben.png"
import ImagePetani from "../../../assets/GayaHidup/Petani.png"

export default function GayaHidup() {
   return (
      <>
         <div className="gaya-hidup" id="gayaHidup">
            <div className="images">
               <div className="image-top">
                  <img src={Images} alt="" />
                  <div className="col-text">
                     <p>Gaya Hidup Tradisional Masyarakat Jawa Timur</p>
                  </div>
               </div>
            </div>
            <div className="two-col">
               <p>
                  Masyarakat Jawa Timur hidup dalam budaya tradisional yang
                  masih kental. Masyarakat disini masih melestarikan adat
                  istiadat di setiap daerahnya masing-masing, memiliki kehidupan
                  pedesaan yang kuat dan agraris. Tradisi upacara adat seperti
                  slametan, sedekah desa, masih tetap di jaga di kehidupan
                  masyarakat Jawa Timur.
               </p>
            </div>
            <div className="three-text">
               <p>
                  Berikut Gaya Hidup Tradisional Yang Masih Sering Dijumpai di
                  Jawa Timur
               </p>
            </div>
         </div>
         <div className="container-card">
            <div className="card-field">
               <CardGayaHidup image={ImagePawon} text="Memasak menggunakan kayu bakar masih kerap di jumpai di kehidupan masyarakat Jawa Timur terutama di daerah dataran tinggi dan daerah-daerah pedesaan lainnya." />
               <CardGayaHidup image={ImagePetani} text="Bertani menjadi mata pencarian  sebagian besar penduduk Jawa Timur mayoritas warga yang bermata pencarian sebagai petani berada di wilayah kabupaten atau pedesaan." />
               <CardGayaHidup image={ImageKeben} text="Sebagian masyarakat masih mengenakan kebaya atau kemben zaman dahulu, yang masih memakai pakaian tersebut ialah orang yang sudah berusia lanjut." />
            </div>
         </div>
      </>
   );
}
