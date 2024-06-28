import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

import styles from './apply.module.scss';
import path from "../../../path";
import tokens from "../../../translations/tokens";
import apiClient from "../../../api/ApiClient";
import OfferCard from "../../../components/offer/OfferCard";
import Error from "../../Error";
import Container from "../../../components/ui/atoms/Container";
import Banner from "../../../components/layout/Banner";
import ProfilForm from "../../../components/form/ProfilForm";
import Loader from "../../../components/ui/atoms/Loader";

const Apply = () => {
    const [offer, setOffer] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const { id } = useParams();
    const { t } = useTranslation();

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
            label: t(tokens.breadCrumb.offers[offer?.internship ? 'internship' : 'workStudy']),
            link: path[offer?.internship ? 'internship' : 'workStudy']
        },
        {
            label: offer?.name ?? '',
            link: path.offer.replace(':id', offer?.id)
        },
        {
            label: t(tokens.breadCrumb.apply),
            link: null
        },
    ], [t, offer])

    useEffect(() => {
        setIsFetching(true)
        apiClient.offer.get(id)
            .then(response => {
                setIsFetching(false)

                if (response.status === 404) {
                    return;
                }

                setOffer(response);
            })
    }, [id]);

    if (!isFetching && !offer) {
        return <Error code={404} />
    }

    if (isFetching) {
        return <div className={styles.load}>
            <Loader className={styles.loader} />
        </div>
    }

    return <>
        <Container inline className={styles.header}>
            <Banner breadCrumb={breadCrumb}>
                <OfferCard
                    offer={offer}
                    row
                    withMainTitle
                    withVerticalDivider
                    withBackButton
                    className={styles.card}
                />
            </Banner>
        </Container>

        <Container className={styles.content}>
            <ProfilForm isApplyment />
        </Container>
    </>
}

export default Apply;
