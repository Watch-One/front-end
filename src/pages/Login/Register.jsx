import React from 'react';
import "./Login.css"


const Register = () => {
    return (
        <div className="login-page">
        <div className="form">
            
            <form className="login-form">
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password" />
                <input type="text" placeholder="email address"/>
                <button>create</button>
                <p className="message">Already registered? <a href="/login">Sign In</a></p>
            </form>
        </div>
    </div>
    );
}

export default Register;