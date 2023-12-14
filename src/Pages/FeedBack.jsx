import Navbar from "../Components/Navbar"
import Footer from "../Components/bundle/Footer"
import Gmaterial from "../Components/bundle/GoogleMaterial"
import "../css/Home/feedback.css"
import chel from "../assets/HomeElements/icon/chel.jpg"
const FeedBack = () => {
    return(<>
        <Navbar />
        <div className="nav-gap"></div>
        <div className="feedback">
            <div className="feedback-container">
                <div className="feedback-quest active">
                    <div className="label">
                        <p>Seberapa Menarik Jawa Timur Bagimu ?</p>
                        <Gmaterial name="navigate_next" />
                    </div>
                    <div className="comment-container">
                        <div className="comment-field">
                            <div className="comment-head">
                                <img src={chel} alt="" />
                                <h3>3/10/23</h3>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo est quaerat perspiciatis accusamus autem dolorum dolores, obcaecati vel alias reiciendis vero velit tempora animi molestiae quo hic labore ipsa corrupti sequi et repudiandae architecto consequuntur eveniet ullam. Quod omnis quo </p>
                        </div>
                        <div className="comment-field">
                            <div className="comment-head">
                                <img src={chel} alt="" />
                                <h3>3/10/23</h3>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo est quaerat perspiciatis accusamus autem dolorum dolores, obcaecati vel alias reiciendis vero velit tempora animi molestiae quo hic labore ipsa corrupti sequi et repudiandae architecto consequuntur eveniet ullam. Quod omnis quo </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>)
}

export default FeedBack