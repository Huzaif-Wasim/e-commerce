import { createContext, useState } from "react";
import PRODUCTS from '../shop-data.json';
export const ProductContext = createContext({
    products: null,
    setProducts: () => null
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const values = { products, setProducts };
    return (
        <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
    )
}