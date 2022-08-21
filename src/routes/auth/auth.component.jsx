import { SignIn } from "../../components/sign-in/sign-in.component"
import { SignUp } from "../../components/sign-up/sign-up.component"
import './auth.styles.scss'

export const Auth = () => {
    return (
        <div className="authentication-container">
            <SignIn />
            <SignUp />
        </div>
    )
}