import React from 'react';
import '../style/SignUp.css';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations/createUser';
import Auth from '../utils/auth';




export default function SignUp() {

    const [formState, setFormState] = React.useState({
        email: "",
        username: "",
        password: ""
    })

    const [createUser] = useMutation(CREATE_USER);

    const submitForm = async (event) => {
        event.preventDefault();
        const response = await createUser({
            variables: {
                username: formState.username,
                email: formState.email,
                password: formState.password
            }
        })
        const token = response.data.createUser.token
        Auth.login(token)
        setFormState({
            email: "",
            username: "",
            password: ""
        })
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
                <h1 className="greeting">Create Account</h1>
            </section>

            <form className='signupInfoHolder' onSubmit={submitForm}>

                <input name='email' className='userInput' type="Text" placeholder='Email Address' onChange={handleChange} />

                <input name='username' className='userInput' type="Text" placeholder='Username' onChange={handleChange} />

                <input name='password' className='userInput' type="Password" placeholder='Password' onChange={handleChange} />

                <button className='signupBtn' type='submit'

                    

                >
                    Register Account</button>



            </form>
        </div>
    );
}