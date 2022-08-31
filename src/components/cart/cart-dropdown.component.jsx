import { Button } from "../button/button.component"
import { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";
import "./cart.styles.scss";

export const CartDropdown = () => {
    const { DropdownDisplay, setDropdownDisplay } = useContext(CartContext);
    console.log(DropdownDisplay);
    return (
        <div className="cart-dropdown-container"  >

            <div className="cart-items"></div>
            <Button >Checkout</Button>




        </div>
    )
}