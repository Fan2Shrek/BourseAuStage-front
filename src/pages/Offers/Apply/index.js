import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

import Card from "../../../components/ui/atoms/Card";
import Container from "../../../components/ui/atoms/Container";
import styles from './apply.module.scss';
import tokens from "../../../translations/tokens";
import Tag from "../../../components/ui/atoms/Tag";
import Select from "../../../components/ui/atoms/Select";
import Input from "../../../components/ui/molecules/Input";
import cn from '../../../utils/classnames';
import Button from "../../../components/ui/atoms/Button";
import Banner from "../../../components/layout/Banner";
import Ckeditor from "../../../components/ui/atoms/Ckeditor";
import ProfilForm from "../../../components/form/profilForm";

const Apply = () => {
    const [offer, setOffer] = useState(null);

    const [skills, setSkills] = useState(['Skill 1', 'Skill 2', 'Skill 3']);
    const [languages, setLanguages] = useState(['Langage 1', 'Langage 2', 'Langage 3']);
    const [experiences, setExperiences] = useState(['Experience 1', 'Experience 2', 'Experience 3']);

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
