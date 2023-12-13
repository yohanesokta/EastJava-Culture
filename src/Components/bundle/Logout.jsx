import { GoogleLogin } from "react-google-login";

const ClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID

function onSuccess() {
    console.log("logout from google")
}

function Logout() {
    return (<>
        <GoogleLogin
            clientId={ClientID}
            buttonText={"Logout"}
            onSuccess={onSuccess}
        />
    </>)
}