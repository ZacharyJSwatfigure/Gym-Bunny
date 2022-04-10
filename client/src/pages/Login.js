import React from 'react';
import '../style/Login.css';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations/login';
import Auth from '../utils/auth';




export default function Login() {

    const [formState, setFormState] = React.useState({
        username: "",
        password: ""
    })

    const [login] = useMutation(LOGIN);

    const submitForm = async (event) => {
        event.preventDefault();
        const response = await login({
            variables: {
                username: formState.username,
                password: formState.password
            }
            
        })
        const token = response.data.login.token
        Auth.login(token)
        setFormState({
            username: "",
            password: ""
        })
        window.localStorage.setItem('username', formState.username);
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value,
        })
    }


    return (
        <div className="loginAllHolder">
            
            <section className="greetingHolder">
                <h1 className="greeting">Login</h1>
            </section>
            

            <form className='loginInfoHolder' onSubmit={submitForm}>


                <input name='username' className='userInput' type="Text" placeholder='Username' onChange={handleChange} />

                <input name='password' className='userInput' type="Password" placeholder='Password' onChange={handleChange} />


                <button className='loginBtn' type='submit'



                >
                    Login</button>



            </form>
        </div>
    );
}