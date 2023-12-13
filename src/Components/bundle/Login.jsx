import { GoogleLogin } from "react-google-login";

const ClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID

function onSuccess(res) {
    console.log("sukses", res.profileObj);
    document.getElementById("login-container").style.display = "none"
}
function onFailure(res) {
    console.log("Falure | ", res)
    document.getElementById("login-container").style.display = "none"
}

function Login() {
    return (
        <>
            <GoogleLogin
                clientId={ClientID}
                buttonText="Lanjut Dengan Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </>
    )
}

export default Login