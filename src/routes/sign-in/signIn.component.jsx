import { useEffect, useState } from "react";
import { createUserFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import { SignUp } from "../../components/sign-up/sign-up.component";



export const SignIn = () => {
    const logGoogleUser = async () => {
        const userDetails = await signInWithGooglePopup();
        console.log(userDetails);
        const createdUser = await createUserFromAuth(userDetails.user);
        console.log(createdUser);
    }




    return (
        <div>
            <h1>Sign In using Google</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>

    )
}