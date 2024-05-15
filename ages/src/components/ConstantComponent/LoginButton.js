import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}
                className="btn btn-primary btn-lg"
                style={{
                    marginBottom: "10px",
                    width: "100%",
                    backgroundColor: "red",
                }}>
                Login
            </button>
        ))
}

export default LoginButton;