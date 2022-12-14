import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crwn-logo.svg";
import './navigation.styles.scss';

export const Navigation = () => {
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
                </div>

            </div>
            <Outlet />
        </Fragment>
    );
};
