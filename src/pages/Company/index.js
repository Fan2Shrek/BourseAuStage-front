import { useTranslation } from "react-i18next";
import { useMemo } from "react";

import styles from "./company.module.scss";
import tokens from "../../translations/tokens";
import path from "../../path";
import UnderlinedContent from "../../components/ui/atoms/UnderlinedText";
import Banner from "../../components/layout/Banner";

const Company = () => {
    const { t } = useTranslation();
    const title = t(tokens.page.companies.title).split(" ");

    const underlined = useMemo(() => {
        if (title.length >= 2) {
            return title.pop();
        }

        return false;
    }, [title])

    const breadCrumb = useMemo(() => [
        {
            label: t(tokens.breadCrumb.home),
            link: path.home
        },
        {
            label: t(tokens.breadCrumb.companies),
            link: null
        },
    ], [t])

    return <>
        <Banner breadCrumb={breadCrumb}>
            <h1>{underlined && title.join(' ')} <UnderlinedContent>{underlined || title.join(' ')}</UnderlinedContent></h1>
            <p>{t(tokens.page.companies.description)}</p>
        </Banner>

        <div className={styles.content}>

        </div>
    </>
}

export default Company;
