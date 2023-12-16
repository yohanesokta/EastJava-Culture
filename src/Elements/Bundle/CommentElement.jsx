import verif from "../../assets/verif.svg";
const CommentElement = ({ image, isi, name, day, time }) => {
    // Awokawokawok Panggah Centang Ijo 😄

    let Verif = () => {
        if (String(name).toLocaleLowerCase().includes(import.meta.env.VITE_NAMA_ADMIN)) {
            return <img src={verif} alt="" />;
        } else {
            return <div className="no-div"></div>;
        }
    };

    return (
        <>
            <div className="comment-field">
                <div className="comment-head">
                    <img src={image} alt="" />
                    <div className="name">
                        <h2>{name}<Verif/></h2>
                        <p>{time}</p>
                    </div>
                    <h3>{day}</h3>
                </div>
                <p>{isi}</p>
            </div>
        </>
    );
};

export default CommentElement;
