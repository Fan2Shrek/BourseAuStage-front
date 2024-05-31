import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import path from "../../path";
import styles from "./Offers.module.scss"
import tokens from "../../translations/tokens";
import OfferTypeEnum from "../../enum/OfferTypeEnum"
import Banner from "../../components/layout/Banner";
import UnderlinedContent from "../../components/ui/atoms/UnderlinedText";
import Container from "../../components/ui/atoms/Container";
import ApiCollectionList from "../../components/ui/molecules/ApiCollectionList";
import { alphabeticalSortAZ, alphabeticalSortZA } from "../../sortings";

const Offers = ({ type }) => {
    const { t } = useTranslation();
    const title = t(tokens.page.offers[type].title).split(" ");

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
            label: t(tokens.breadCrumb.offers.base),
            link: null
        },
        {
            label: t(tokens.breadCrumb.offers[type]),
            link: null
        },
    ], [t, type])

    return <div className={styles.offers}>
        <Banner breadCrumb={breadCrumb}>
            <h1>{underlined && title.join(' ')} <UnderlinedContent>{underlined || title.join(' ')}</UnderlinedContent></h1>
            <p>{t(tokens.page.offers.description)}</p>
        </Banner>

        {[OfferTypeEnum.INTERNSHIP, OfferTypeEnum.WORKSTUDY].includes(type) && <Container>
            <ApiCollectionList
                url={`/offers/${type}`}
                // withFacets
                itemsPerPage={8}
                foundLabel={t(tokens.page.offers[type].apiCollectionList.foundLabel)}
                sortings={[
                    alphabeticalSortAZ({
                        name: 'alphabetical-AZ-offerName',
                        property: 'name',
                        propertyTranslation: t(tokens.entities.offer.name),
                        clarificationTranslation: t(tokens.sortings.clarifications.alphabeticalSortAZ),
                    }),
                    alphabeticalSortZA({
                        name: 'alphabetical-ZA-offerName',
                        property: 'name',
                        propertyTranslation: t(tokens.entities.offer.name),
                        clarificationTranslation: t(tokens.sortings.clarifications.alphabeticalSortZA),
                    }),
                ]}
                defaultSort={'alphabetical-AZ-offerName'}
                renderItem={offer => <p>{offer.name}</p>}
            />
        </Container>}
    </div>
}

export default Offers
