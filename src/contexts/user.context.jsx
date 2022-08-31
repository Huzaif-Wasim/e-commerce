import { createContext, useEffect, useState } from "react";
import { authStateListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})
const { setCurrentUser } = UserContext;


export const UserProvider = ({ children }) => {
    useEffect(() => {
        const unsubscribe = authStateListener((user) => {
            setCurrentUser(user);
            console.log("authStateChanged", user);
            return unsubscribe;
        });
    }, []);
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}