const CommentElement = ({image , isi}) => {
    return (
        <>
            <div className="comment-field">
                <div className="comment-head">
                    <img src={image} alt="" />
                    <h2>Bu Lely</h2>
                    <h3>3/10/23</h3>
                </div>
                <p>{isi}</p>
            </div>
        </>
    );
};

export default CommentElement
