import { useState } from "react"
import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"

import styles from './LoginForm.module.scss'
import tokens from "../../../translations/tokens"
import cn from '../../../utils/classnames'
import apiClient from "../../../api/ApiClient"
import path from "../../../path"
import Input from "../../../components/ui/molecules/Input"
import Button from "../../../components/ui/atoms/Button"
import Container from "../../ui/atoms/Container"

const LoginForm = () => {
    const [form, setForm] = useState({})
    const [error, setError] = useState(null)
    const { t } = useTranslation()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        apiClient.login(form.email, form.password)
            .then(response => {
                if (!response.token) {
                    // a changer par notif
                    setError('Email ou mot de passe incorrect')
                } else {
                    setError(null)
                    navigate(path.profil)
                }
            })
    }

    return <Container inline className={styles.form}>
        <Input name='email' onChange={handleChange} required label={t(tokens.page.login.form.email)} />
        <Input name='password' type="password" onChange={handleChange} required label={t(tokens.page.login.form.password)} />
        {error && <div className={cn(styles.error)}>{error}</div>}
        <Button label={t(tokens.page.login.form.submit)} onClick={handleSubmit}></Button>
    </Container>
}

export default LoginForm
