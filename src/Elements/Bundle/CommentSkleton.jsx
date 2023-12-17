import "../../css/Home/skleton-comment.css"
import chel from "../../assets/ornament/Bulat1.svg"

const CommentSkleton = () => {
    return (
        <div className="comment-field skleton">
            <div className="comment-head">
                <div className="fotoprofile"></div>
                <div className="name">
                    <h2>
                    </h2>
                    <p></p>
                </div>
                <h3></h3>
            </div>
            <p className="comment-field"></p>
        </div>
    );
};

export default CommentSkleton;
