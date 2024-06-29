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

    const setUser = useCallback((usr, isUpdated = false, isReload = false) => {
        if (usr) {
            if (!isReload) {
                addNotification({
                    message: isUpdated
                        ? t(tokens.notifications.accountUpdated)
                        : t(tokens.notifications.login, {
                            name: `${usr.firstName} ${usr.lastName}`,
                        }),
                    type: 'success',
                })
            }
        } else if (usr === null) {
            addNotification({
                message: t(tokens.notifications.logout),
                type: 'warning',
            })
        }

        setUserState(usr)
    }, [addNotification, t, setUserState])

    return <UserContext.Provider value={{
        user,
        setUser,
    }}>
        {children}
    </UserContext.Provider>
}
