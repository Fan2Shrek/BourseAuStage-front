import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import styles from "./Companies.module.scss";
import tokens from "../../translations/tokens";
import path from "../../path";
import { alphabeticalSortAZ, alphabeticalSortZA } from "../../sortings";
import UnderlinedContent from "../../components/ui/atoms/UnderlinedText";
import Banner from "../../components/layout/Banner";
import ApiCollectionList from "../../components/ui/molecules/ApiCollectionList";
import Container from "../../components/ui/atoms/Container";
import CompanyCard from "../../components/company/CompanyCard";

const Companies = () => {
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

    return <div className={styles.companies}>
        <Banner breadCrumb={breadCrumb}>
            <h1>{underlined && title.join(' ')} <UnderlinedContent>{underlined || title.join(' ')}</UnderlinedContent></h1>
            <p>{t(tokens.page.companies.description)}</p>
        </Banner>

        <Container>
            <ApiCollectionList
                url={'/companies'}
                withFacets
                itemsPerPage={8}
                foundLabel={t(tokens.page.companies.apiCollectionList.foundLabel)}
                sortings={[
                    alphabeticalSortAZ({
                        name: 'alphabetical-AZ-companyName',
                        property: 'name',
                        propertyTranslation: t(tokens.entities.company.name)
                    }),
                    alphabeticalSortZA({
                        name: 'alphabetical-ZA-companyName',
                        property: 'name',
                        propertyTranslation: t(tokens.entities.company.name)
                    }),
                ]}
                defaultSort={'alphabetical-AZ-companyName'}
                renderItem={company => <Link to={path.company.replace(':id', `${company.id}`)}>
                    <CompanyCard company={company} />
                </Link>}
            />
        </Container>
    </div>
}

export default Companies;
