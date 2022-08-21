import { useEffect, useState } from "react";
import { SignIn } from "../../routes/sign-in/signIn.component";
import { FormInput } from "../form-input/form-input.component";
import { createNewUserWithEmailAndPassword, createUserFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import './sign-up.styles.scss';
import { Button } from '../button/button.component.jsx';

const defaultValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const SignUp = () => {
    const logGoogleUser = async () => {
        const userDetails = await signInWithGooglePopup();
        console.log(userDetails);
        const createdUser = await createUserFromAuth(userDetails.user);
        console.log(createdUser);
    }



    const [fieldValues, setFieldValues] = useState(defaultValues);
    const resetFields = () => {
        setFieldValues(defaultValues);
    }
    const { username, email, password, confirmPassword } = fieldValues;
    const handleChange = (event) => {

        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setFieldValues({ ...fieldValues, [name]: value });
        console.log("Inside event");
        console.log(fieldValues);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("Password mismatch");
            return;
        }

        try {
            const response = await createNewUserWithEmailAndPassword(email, password);
            console.log(response);
            await createUserFromAuth({ ...response.user, ['displayName']: username });
            resetFields();
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }

    }
    useEffect(() => console.log(fieldValues), [fieldValues]);

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <form onSubmit={handleSubmit}>
                <FormInput label='Name' type='text' name='username' value={username} onChange={handleChange} />
                <FormInput label='Email' type='email' name='email' value={email} onChange={handleChange} />
                <FormInput label='Password' type='password' name='password' value={password} onChange={handleChange} />
                <FormInput label='Confirm password' type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} />
                <Button type='submit'>Sign Up</Button>
            </form>

        </div>

    )
}