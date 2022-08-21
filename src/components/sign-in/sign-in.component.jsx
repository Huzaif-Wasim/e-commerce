import { useEffect, useState } from "react";
import { createUserFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

import { FormInput } from "../../components/form-input/form-input.component";
import { Button } from "../../components/button/button.component";
import { signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils.js";
import './sign-in.styles.scss';

const defaultCreds = {
    email: '',
    password: ''
}


export const SignIn = () => {

    const [creds, setCreds] = useState(defaultCreds);

    const logGoogleUser = async () => {
        try {
            const userDetails = await signInWithGooglePopup();
            console.log(userDetails);
            const createdUser = await createUserFromAuth(userDetails.user);
            console.log(createdUser);
        }
        catch (error) {
            console.log(error.message);
            console.log(error.code);
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log('name', name, 'value', value);
        setCreds({ ...creds, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInUserWithEmailAndPassword(email, password);
            console.log("sign in with email, password", response);
            resetFields();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('You have entered an incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('No user found');
                    break;
                default:
                    console.log(error);

            }
        }
    }

    const resetFields = () => {
        setCreds(defaultCreds);
    }

    const { email, password } = creds;

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput required name='email' value={email} onChange={handleChange} label='Email' type='email'></FormInput>
                <FormInput required name='password' value={password} onChange={handleChange} label='Password' type='password'></FormInput>

                <div className="buttons-container">
                    <Button buttonType={'inverted'} type='submit'>Sign In</Button>
                    <Button buttonType={'google'} type='button' onClick={logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>

    )
}

