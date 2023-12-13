import "../style/componets_style/LoginContainer.css"
import Login from "./bundle/Login"

function LoginContainer(){
    return(<>
        <div className="login-container" id="login-container">
            <div className="login-field">
                <Login />
            </div>
        </div>
    </>)

}

export default LoginContainer