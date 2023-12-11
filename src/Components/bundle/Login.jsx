import { GoogleLogin } from "react-google-login";

const ClientID = "649924286661-uug7ckbh0oi8ck108abfqj5pocfpks2g.apps.googleusercontent.com"

function onSuccess(res){
    console.log("sukses",res.profileObj);
}
function onFailure(res){
    console.log("Falure | ",res)
}

function Login(){
    return(
        <>
            <GoogleLogin
                clientId={ClientID}
                buttonText="Masuk"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </>
    )
}

export default Login