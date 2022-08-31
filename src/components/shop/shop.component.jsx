import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { ProductContext } from "../../contexts/products.context"
import { Product } from "../product/product.component";
import "./shop.styles.scss";

export const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div>
            <Outlet />
            <div className="products-container">
                {products.map(
                    ({ id, ...others }) => <Product key={id} {...others} />
                )}
            </div>

        </div>

    )
}