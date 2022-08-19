import { useEffect, useState } from "react";
import { SignIn } from "../../routes/sign-in/signIn.component";
import { createNewUserWithEmailAndPassword, createUserFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

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

        const response = await createNewUserWithEmailAndPassword(email, password);
        console.log(response);

    }
    useEffect(() => console.log(fieldValues), [fieldValues]);

    return (
        <div>
            <h1>I do not have an account</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' name='username' value={username} onChange={handleChange}></input>
                <label>Email</label>
                <input type='email' name='email' value={email} onChange={handleChange}></input>
                <label>Password</label>
                <input type='password' name='password' value={password} onChange={handleChange}></input>
                <label>Confirm password</label>
                <input type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
            <SignIn />
        </div>

    )
}