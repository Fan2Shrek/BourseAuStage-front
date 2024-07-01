import { useCallback, useContext, useState } from "react"
import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"

import styles from './LoginForm.module.scss'
import tokens from "../../../translations/tokens"
import apiClient from "../../../api/ApiClient"
import path from "../../../path"
import Input from "../../../components/ui/molecules/Input"
import Button from "../../../components/ui/atoms/Button"
import { NotificationContext } from "../../../context/NotificationContext"
import { UserContext } from "../../../context/UserContext"

const LoginForm = () => {
    const [isFetching, setIsFetching] = useState(false)
    const [form, setForm] = useState({})
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { addNotification } = useContext(NotificationContext)
    const { setUser } = useContext(UserContext)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        if (!isFetching) {
            setIsFetching(true)

            apiClient.login(form.email, form.password)
                .then(response => {
                    setIsFetching(false)

                    if (!response.token) {
                        addNotification({
                            message: t(tokens.page.login.notifications.error),
                            type: 'danger',
                        })
                    } else {
                        if (response.user.deletedAt !== null) {
                            addNotification({
                                message: t(tokens.page.login.notifications.inactive),
                                type: 'warning',
                            })

                            return
                        }

                        setUser(response.user)
                        navigate(path.admin.profil)
                    }
                })
        }
    }, [form, isFetching, addNotification, t, setUser, navigate])

    return <form onSubmit={handleSubmit} className={styles.form}>
        <Input name='email' onChange={handleChange} required label={t(tokens.page.login.form.email)} />
        <Input name='password' type="password" onChange={handleChange} required label={t(tokens.page.login.form.password)} />
        <Button label={t(tokens.page.login.form.submit)} type='submit' />
    </form>
}

export default LoginForm
