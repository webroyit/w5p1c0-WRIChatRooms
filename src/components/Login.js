import React from 'react';
import { Button } from '@material-ui/core';

import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img src="/logo.png" alt="Logo" />
                <div className="login__text">
                    <h1>Sign in to WRI ChatRoom</h1>
                </div>

                <Button size="large">
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login;
