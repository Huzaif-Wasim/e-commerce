import { createContext, useState } from 'react';

export const CartContext = createContext({
    DropdownDisplay: null,
    setDropdownDisplay: () => null
});

export const CartProvider = ({ children }) => {
    const [DropdownDisplay, setDropdownDisplay] = useState(false);
    const value = { DropdownDisplay, setDropdownDisplay };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}