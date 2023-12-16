import Navbar from "../Components/Navbar"
import Footer from "../Components/bundle/Footer"
import "../css/Home/feedback.css"
import chel from "../assets/HomeElements/icon/chel.jpg"
import  CommentElement from "../Elements/Bundle/CommentElement"
import FeedbackField from "../Elements/Bundle/feedback/FeedbackField"
import Logout from "../Components/bundle/Logout"
const FeedBack = () => {
    return(<>
        <Navbar />
        <div className="nav-gap"></div>
        <div className="feedback">
            <input type="hidden" id="username" />
            <input type="hidden" id="userimage" />
            <div className="feedback-container"> 
            <FeedbackField id="questOne" soal="Apa Yang Kamu Sukai Dari Jawa Timur" comment={[
                <CommentElement image={chel} isi="Comment 1" />,
                <CommentElement image={chel} isi="Comment 2" />
            ]}/>
            <FeedbackField id="questTwo" soal="Apa Yang Kamu Sukai Dari Jawa Timur" comment={[
                <CommentElement image={chel} isi="Comment 3" />,
                <CommentElement image={chel} isi="Comment 4" />
            ]}/>
            <FeedbackField id="questThree" soal="Apa Yang Kamu Sukai Dari Jawa Timur" comment={[
                <CommentElement image={chel} isi="Comment 3" />,
                <CommentElement image={chel} isi="Comment 4" />
            ]}/>
            <FeedbackField id="questFour" soal="Apa Yang Kamu Sukai Dari Jawa Timur" comment={[
                <CommentElement image={chel} isi="Comment 3" />,
                <CommentElement image={chel} isi="Comment 4" />
            ]}/>
            </div>
        </div>

        <div className="userprofile">
            <div className="flex-container">
                <img id="userprofile-image" src={chel} referrerpolicy="no-referrer" />
                <p>Yohanes</p>
            </div>
            <Logout/>
        </div>
        <Footer/>
    </>)
}

export default FeedBack