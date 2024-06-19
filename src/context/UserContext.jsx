import { createContext, useEffect, useState } from "react";
import { getCookie } from "../utils/cookies";
import apiClient from "../api/ApiClient";

export const UserContext = createContext({
    user: null,
    setUser: () => {},
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getCookie('token')

        if (!token) {
            return
        }

        apiClient.me.get()
            .then(response => setUser(response))
    }, [])

    return <UserContext.Provider value={{
        user,
        setUser,
    }}>
        {children}
    </UserContext.Provider>;
};
