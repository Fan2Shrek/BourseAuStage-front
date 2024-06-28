import { useTranslation } from "react-i18next"
import { FaRegCheckCircle } from "react-icons/fa";

import Button from "../../components/ui/atoms/Button";
import path from "../../path";
import tokens from "../../translations/tokens";
import styles from "./Confirmation.module.scss"

const Confirmation = () => {
    const { t } = useTranslation();

    return <div className={styles.content}>
        <FaRegCheckCircle className={styles.icon} />
        <h2>{t(tokens.page.confirmation.text)}</h2>
        <Button redirectTo={path.login} label={t(tokens.page.confirmation.btn)} />
    </div>
}

export default Confirmation
