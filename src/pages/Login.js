import React from 'react';

import '../style/Login.css';

export default function Login() {
    return (
        <div className="loginAllHolder">
            <section className="greetingHolder">
                <h1 className="greeting">Login</h1>
            </section>

            <section className = 'loginInfoHolder'>

                <input className = 'userInput' type="Text" placeholder='Username' />

                <input className = 'userInput' type="Password" placeholder='Password' />

                <button className = 'loginBtn' type='submit' >Log In</button>

            </section>
        </div>
    );
}