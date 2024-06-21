import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { NotificationContext } from "./NotificationContext"
import { getCookie } from "../utils/cookies"
import apiClient from "../api/ApiClient"
import tokens from "../translations/tokens"

export const UserContext = createContext({
    user: null,
    setUser: () => {},
})

export const UserContextProvider = ({ children }) => {
    const [user, setUserState] = useState(null)
    const { addNotification } = useContext(NotificationContext)
    const { t } = useTranslation()

    useEffect(() => {
        const token = getCookie('token')

        if (!token) {
            return
        }

        apiClient.me.get()
            .then(response => setUserState(response))
    }, [])

    const setUser = useCallback(user => {
        if (user) {
            addNotification({
                message: t(tokens.notifications.login, {
                    name: `${user.firstName} ${user.lastName}`,
                }),
                type: 'success',
            })
        } else if (user === null) {
            addNotification({
                message: t(tokens.notifications.logout),
                type: 'warning',
            })
        }

        setUserState(user)
    }, [addNotification, t])

    return <UserContext.Provider value={{
        user,
        setUser,
    }}>
        {children}
    </UserContext.Provider>
}
