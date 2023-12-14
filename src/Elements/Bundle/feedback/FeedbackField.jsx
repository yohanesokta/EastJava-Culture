import Gmaterial from "../../../Components/bundle/GoogleMaterial"
import QuestControl from "./QuestControl"

export default function FeedbackField({id,soal,comment}){
    return(<>
        <div className="feedback-quest" id={id} >
                    <div className="label" onClick={()=>{QuestControl(id)}}>
                        <p>{soal}</p>
                        <Gmaterial name="navigate_next" />
                    </div>
                    <div className="comment-container">
                        {comment}
                    </div>
                    <div className="input-container">
                        <input type="text"/>
                        <button>Kirim</button>
                    </div>
                </div>
    </>)
}