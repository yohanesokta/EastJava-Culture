import { GoogleLogin } from "react-google-login";
const ClientID = "649924286661-uug7ckbh0oi8ck108abfqj5pocfpks2g.apps.googleusercontent.com"

function onSuccess(){
    console.log("logout from google")
}

function Logout(){
    return(<>
        <GoogleLogin
            clientId={ClientID}
            buttonText={"Logout"}
            onSuccess={onSuccess}
        />
    </>)
}