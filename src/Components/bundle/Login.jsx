import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";

const ClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID

function onSuccess(res) {
    let username = document.getElementById('username')
    let userimage = document.getElementById('userimage')
    let userprofileName = document.getElementById('userprofile-name')
    if (username !== undefined) {
        userimage.value = res.profileObj.imageUrl
        username.value = res.profileObj.name
        userprofileName.innerHTML = res.profileObj.name
        document.getElementById('userprofile-image').src = res.profileObj.imageUrl
        let btnKirim = document.getElementsByClassName('btnKirim')
        Array.from(btnKirim).forEach((element) => {
            element.innerHTML = "Kirim"
        });
        Array.from(document.getElementsByClassName('userprofile')).forEach((e) => {
            e.style.display = "block"
        })
    }
}

function Login() {
    return (
        <>
            <GoogleLogin
                clientId={ClientID}
                buttonText=""
                onSuccess={onSuccess}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </>
    )
}

export default Login