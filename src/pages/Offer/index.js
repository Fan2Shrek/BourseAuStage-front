import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import apiClient from "../../api/ApiClient";
import { CiCircleCheck } from "react-icons/ci";
import { format, differenceInDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import getPicturePath from "../../utils/getPicturePath";
import { FaArrowRightLong } from "react-icons/fa6";

import styles from './Offer.module.scss';
import Banner from "../../components/layout/Banner";
import path from "../../path";
import tokens from "../../translations/tokens";
import Container from '../../components/ui/atoms/Container';
import Button from '../../components/ui/atoms/Button';
import Tag from '../../components/ui/atoms/Tag';
import ProgressBar from '../../components/ui/atoms/ProgressBar';

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
            label: offer?.internship ? 'Stage' : 'Alternance',
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
    const profils = offer.profils.map(profil => profil.description);
    const activities = (offer.activities);
    const skills = offer.searchSkills.map(skill => skill.name);
    const availableAt = format(new Date(offer.availableAt), "dd MMMM yyyy", { locale: fr });
    const createdAt = format(new Date(offer.createdAt), "dd MMMM yyyy", { locale: fr });

    const available = new Date(offer.availableAt);
    const remainingDays = differenceInDays(available, new Date());
    const progress = (remainingDays * 90) /100;

    return <div className={styles.offer}>
        <Banner breadCrumb={breadCrumb}>
        </Banner>
        <Container >
            <div className={styles.pageContent}>
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
                    {console.log(offer)}
                    <ul>
                        {profils.map((description, index) => (
                            <li key={index}>
                                <CiCircleCheck />
                                {description}
                            </li>
                        ))}
                    </ul>
                    {/* redirection à faire */}
                    <Button className={styles.link} label='Postuler' redirectTo=''/>
                </div>
                <div className={styles.pageContentRight}>
                    <h3>Échéances</h3>
                    <div className={styles.progress}>
                        <p>Reste {remainingDays} jours pour postuler</p>
                        <ProgressBar value={progress} />
                    </div>
                    <div className={styles.rightText}>
                        <p>Postuler avant le</p>
                        <p>{availableAt}</p>
                    </div>
                    <div className={styles.rightText}>
                        <p>Offre publié le</p>
                        <p>{createdAt}</p>
                    </div>
                    <div className={styles.rightText}>
                        <p>Type d'offre</p>
                        {offer?.internship ? (
                            <p>Stage</p>
                        ) : (
                            <p>Alternance</p>
                        )}
                    </div>
                    <div className={styles.rightText}>
                        <p>Gratification</p>
                        {offer?.payed ? (
                            <p>Obligatoire</p>
                        ) : (
                            <p>Non obligatoire</p>
                        )}
                    </div>
                    <div className={styles.rightText}>
                        <p>Candidatures déposées</p>
                        {/* a faire */}
                        <p>1</p>
                    </div>
                    <div className={styles.border}></div>
                    <h3>Profils métiers</h3>
                    <ul>
                        {activities.map((activity, index) => (
                            <li key={index}>
                                <Tag label={activity.name} color={activity.color} secondary/>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.border}></div>
                    <h3>Compétences recherchées</h3>
                    <ul>
                        {skills.map((name, index) => (
                            <li key={index}>
                                <Tag label={name} color={'#4640DE'} secondary radius={0}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.separate}></div>
            <div className={styles.pageCompany}>
                <div className={styles.pageCompanyLeft}>
                    <img src={getPicturePath(offer.company.logo)} alt={offer.company.name}/> 
                    <p>{offer.company.presentation}</p>
                    <a href={`/entreprises/${offer.company.id}`}>En savoir plus sur {offer.company.name}<span><FaArrowRightLong /></span></a>
                </div>
                <div className={styles.pageCompanyRight}>
                    <div className={styles.left}>
                        <p>j</p>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.map}>
                            MAP
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
}

export default Offer;
