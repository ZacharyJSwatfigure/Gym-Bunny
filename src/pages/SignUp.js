import React from 'react';
import '../style/SignUp.css';

export default function SignUp() {
    return (
        <div className="loginAllHolder">
            <section className="greetingHolder">
                <h1 className="greeting">Create Account</h1>
            </section>

            <section className='signupInfoHolder'>

                <input className='userInput' type="Text" placeholder='Email Address' />

                <input className='userInput' type="Text" placeholder='Username' />

                <input className='userInput' type="Password" placeholder='Password' />

                <button className='signupBtn' type='submit' >Register Account</button>

            </section>
        </div>
    );
}