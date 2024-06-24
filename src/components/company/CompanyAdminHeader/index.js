import { useTranslation } from "react-i18next"
import { FaPlus } from "react-icons/fa6";

import styles from "./CompanyAdminHeader.module.scss"
import tokens from "../../../translations/tokens"
import getPicturePath from "../../../utils/getPicturePath";
import Button from "../../ui/atoms/Button"

const CompanyAdminHeader = ({ name, logoIcon }) => {
    const { t } = useTranslation()

    return <div className={styles.companyAdminHeader}>
        <div className={styles.companyInfos}>
            <img
                src={getPicturePath(logoIcon)}
                alt="logo"
                className={styles.logoIcon}
            />
            <p>{name}</p>
        </div>

        <Button
            label={t(tokens.admin.company.actions.addOffer)}
            icon={<FaPlus />}
            redirectTo={'#'}
        />
    </div>
}

export default CompanyAdminHeader
