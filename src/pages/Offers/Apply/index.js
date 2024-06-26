import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";

import Card from "../../../components/ui/atoms/Card";
import Container from "../../../components/ui/atoms/Container";
import styles from './apply.module.scss';
import tokens from "../../../translations/tokens";
import Tag from "../../../components/ui/atoms/Tag";
import Button from "../../../components/ui/atoms/Button";
import Banner from "../../../components/layout/Banner";
import ProfilForm from "../../../components/form/ProfilForm";

const Apply = () => {
    const [offer, setOffer] = useState(null);

    const { t } = useTranslation();

    useEffect(() => {
        // appel api a faire

        setOffer({
            name: 'Offre de stage',
            start: '01/01/2022',
            end: '01/07/2022',
            type: 'stage',
            logo: 'https://projetcartylion.fr/wp-content/uploads/2020/08/Placeholder.png',
            company: {
                name: 'Entreprise',
                city: 'Paris',
                activities: [{
                    name: 'Activité 1',
                    color: '#FF0000'
                }, {
                    name: 'Activité 2',
                    color: '#FF00FF'
                }]
            },
        });

    }, []);

    if (!offer) {
        return <></>;
    }

    return <>
        <Container inline className={styles.header}>
            <Banner breadCrumb={[{ label: t(tokens.navbar.offers), link: '/offers' }, { label: offer.name }]}>
                <Card>
                    <div className={styles.card__content}>
                        <img className={styles.log} src={offer.logo} height='90' width='90' alt='Logo' />
                        <div>
                            <h1>{offer.name}</h1>
                            <p><span>{offer.company.name}</span>{offer.company.city} - {decodeURI(t(tokens.page.apply.duration, { 'start': offer.start, end: offer.end }))} </p>
                            <div className={styles.activities}>
                                <Tag className={styles.offerType} label={offer.type} radius={0} secondary />
                                <div className={styles.verticalDivider}></div>
                                {offer.company.activities.map((activity) => <Tag key={activity.name} label={activity.name} color={activity.color} secondary />)}
                            </div>
                        </div>
                        <div className={styles.verticalDivider}></div>
                        <Button className={styles.backBtn} label={t(tokens.actions.back)} inverted icon={<FaArrowLeft />} />
                    </div>
                </Card>
            </Banner>
        </Container>
        <Container className={styles.content}>
            <ProfilForm isApplyment />
        </Container>
    </>
}

export default Apply;
