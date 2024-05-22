import { useTranslation } from "react-i18next";
import { useMemo } from "react";

import styles from "./company.module.scss";
import tokens from "../../translations/tokens";
import UnderlinedContent from "../../components/ui/atoms/UnderlinedText";

const Company = () => {
    const { t } = useTranslation();
    const title = t(tokens.page.companies.title).split(" ");
    
    const underlined = useMemo(() => {
        if (title.length >= 2) {
            return title.pop();
        }

        return false;
    }, [title])

    return <>
        <div className={styles.banner}>
            <h1>{underlined && title.join(' ')} <UnderlinedContent>{underlined || title.join(' ')}</UnderlinedContent></h1>
            <p>{t(tokens.page.companies.description)}</p>
        </div>
        <div className={styles.content}>

        </div>
    </>
}

export default Company;
