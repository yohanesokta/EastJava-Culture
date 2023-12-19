import { GoogleLogout } from "react-google-login";

const ClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID

function onSuccess() {
    window.location.href = "/feedback"
}

function Logout() {
    return (<>
        <GoogleLogout
            clientId={ClientID}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
        />
    </>)
}

export default Logout