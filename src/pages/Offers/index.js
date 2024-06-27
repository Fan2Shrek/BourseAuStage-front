import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import path from "../../path";
import styles from "./Offers.module.scss"
import tokens from "../../translations/tokens";
import OfferTypeEnum from "../../enum/OfferTypeEnum"
import Banner from "../../components/layout/Banner";
import UnderlinedContent from "../../components/ui/atoms/UnderlinedText";
import Container from "../../components/ui/atoms/Container";
import ApiCollectionList from "../../components/ui/molecules/ApiCollectionList";
import OfferCard from "../../components/offer/OfferCard";
import { ascSort, descSort } from "../../api/sortings";
import { futureDate, notNull, offerType } from "../../api/filters";

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

    return <Container inline className={styles.offers}>
        <Banner breadCrumb={breadCrumb}>
            <h1>{underlined && title.join(' ')} <UnderlinedContent>{underlined || title.join(' ')}</UnderlinedContent></h1>
            <p>{t(tokens.page.offers.description)}</p>
        </Banner>

        {[OfferTypeEnum.INTERNSHIP, OfferTypeEnum.WORKSTUDY].includes(type) && <Container>
            <ApiCollectionList
                url={`/offers`}
                withFacets
                itemsPerPage={8}
                foundLabel={t(tokens.page.offers[type].apiCollectionList.foundLabel)}
                defaultFilters={[
                    offerType({ type }),
                    notNull({ property: 'deletedAt' }),
                    futureDate({ property: 'availableAt' }),
                ]}
                sortings={[
                    ascSort({
                        name: 'date-ASC-creation',
                        property: 'createAt',
                        propertyTranslation: t(tokens.entities.offer.createdAt.first),
                        clarificationTranslation: t(tokens.sortings.clarifications.dateASC),
                    }),
                    descSort({
                        name: 'date-DESC-creation',
                        property: 'createAt',
                        propertyTranslation: t(tokens.entities.offer.createdAt.first),
                        clarificationTranslation: t(tokens.sortings.clarifications.dateDESC),
                    }),
                    ascSort({
                        name: 'alphabetical-AZ-offerName',
                        property: 'name',
                        propertyTranslation: t(tokens.entities.offer.name),
                        clarificationTranslation: t(tokens.sortings.clarifications.alphabeticalSortAZ),
                    }),
                    descSort({
                        name: 'alphabetical-ZA-offerName',
                        property: 'name',
                        propertyTranslation: t(tokens.entities.offer.name),
                        clarificationTranslation: t(tokens.sortings.clarifications.alphabeticalSortZA),
                    }),
                    ascSort({
                        name: 'date-ASC-available',
                        property: 'availableAt',
                        propertyTranslation: t(tokens.entities.offer.availableAt),
                        clarificationTranslation: t(tokens.sortings.clarifications.dateASC),
                    }),
                    descSort({
                        name: 'date-DESC-available',
                        property: 'availableAt',
                        propertyTranslation: t(tokens.entities.offer.availableAt),
                        clarificationTranslation: t(tokens.sortings.clarifications.dateDESC),
                    }),
                ]}
                defaultSort={'date-ASC-creation'}
                renderItem={offer => <Link to={path.offer.replace(':id', `${offer.id}`)}>
                    <OfferCard
                        offer={offer}
                        row
                        payed={offer.payed}
                        withProgress
                    />
                </Link>}
            />
        </Container>}
    </Container>
}

export default Offers
