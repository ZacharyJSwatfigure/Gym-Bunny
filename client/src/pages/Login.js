import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations/login';

import '../style/Login.css';

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loginMutation,] = useMutation(LOGIN);
    const newUser = '';
    console.log()

    return (
        <div className="loginAllHolder">
            <section className="greetingHolder">
                <h1 className="greeting">Login</h1>
            </section>

            <section className='loginInfoHolder'>

                <input className='userInput' type="Text" placeholder='Username' onChange={event => setUsername(event.target.value)} />

                <input className='userInput' type="Password" placeholder='Password' onChange={event => setPassword(event.target.value)} />

                <button className='loginBtn' type='submit' onClick={(username, password, newUser) => {
                    newUser = {
                        username,
                        password
                    };

                }} >Log In</button>

            </section>
        </div>
    );
}