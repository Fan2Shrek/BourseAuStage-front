import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import apiClient from "../../api/ApiClient";
import { CiCircleCheck } from "react-icons/ci";

import styles from './Offer.module.scss';
import Banner from "../../components/layout/Banner";
import path from "../../path";
import tokens from "../../translations/tokens";
import Container from '../../components/ui/atoms/Container';

const Offer = () => {

    const { id } = useParams();
    const [offer, setOffer] = useState(null);
    const { t } = useTranslation();

    const breadCrumb = useMemo(() => [
        {
            label: t(tokens.breadCrumb.home),
            link: path.home
        },
        {
            label: t(tokens.breadCrumb.offers),
            //a changer
            link: path.offer
        },
        {
            label: offer?.name ?? '',
            link: null
        },
    ], [t, offer])

    useEffect(() => {
        apiClient.offer.get(id)
            .then(response => {
                if (response.status === 404) {
                    return;
                }

                setOffer(response);
            })
    }, [id]);

    if (!offer) {
        return <></>
    }

    const missions = offer.missions.map(mission => mission.description);
    const skills = offer.searchSkills.map(skill => skill.name);

    return <div className={styles.offer}>
        <Banner breadCrumb={breadCrumb}>
        </Banner>
        <Container className={styles.pageContent}>
            <div className={styles.pageContentLeft}>
                {offer?.internship ? (
                    <h2>{t(tokens.page.offerDetails.presentationInternShip)}</h2>
                ) : (
                    <h2>{t(tokens.page.offerDetails.presentationWork)}</h2>
                )}
                <p>{offer.description}</p>
                <h2>Missions</h2>
                <ul>
                    {missions.map((description, index) => (
                        <li key={index}>
                            <CiCircleCheck />
                            {description}
                        </li>
                    ))}
                </ul>
                <h2>Profil recherché</h2>
                <ul>
                    {skills.map((name, index) => (
                        <li key={index}>
                            <CiCircleCheck />
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    </div>
}

export default Offer;
