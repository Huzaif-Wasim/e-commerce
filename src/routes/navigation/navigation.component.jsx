import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crwn-logo.svg";
import './navigation.styles.scss';
import { UserContext } from "../../contexts/user.context";
import { signUserOut } from "../../utils/firebase/firebase.utils";

export const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const handleClick = async () => {
        await signUserOut();
        setCurrentUser(null);
    }
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to={"/"}>
                    <div>
                        <CrwnLogo />
                    </div>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to={"/shop"}>SHOP</Link>

                    {currentUser ?
                        <span className="nav-link" onClick={handleClick}>SIGN-OUT</span> :
                        <Link className="nav-link" to={"/auth"}>SIGN-IN</Link>
                    }
                </div>

            </div>
            <Outlet />
        </Fragment>
    );
};
