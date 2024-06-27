import { useTranslation } from 'react-i18next'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import styles from './Error.module.scss'
import path from '../../path'
import ErrorCodeEnum from '../../enum/ErrorCodeEnum'
import Container from "../../components/ui/atoms/Container"
import Button from '../../components/ui/atoms/Button'

const Error = ({ code }) => {
    const { t } = useTranslation()
    const is403 = code === 403

    return <Container inline className={styles.error}>
        <h1>{code}</h1>
        <p>{t(ErrorCodeEnum[code])}</p>
        <Button
            label={is403 ? t('actions.login') : t('errors.actions.back')}
            icon={is403 ? <FaArrowRight /> : <FaArrowLeft />}
            rightIcon={is403}
            redirectTo={is403 ? path.login : path.home}
        />
    </Container>
}

export default Error
