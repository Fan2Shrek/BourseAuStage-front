import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { CiCircleCheck } from "react-icons/ci";
import { format, differenceInDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { FaArrowRightLong } from "react-icons/fa6";

import styles from './Offer.module.scss';
import apiClient from "../../api/ApiClient";
import getPicturePath from "../../utils/getPicturePath";
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
            label: t(tokens.breadCrumb.offers.base),
            link: null
        },
        {
            label: t(tokens.breadCrumb.offers[offer?.internship ? 'internship' : 'workStudy']),
            link: path[offer?.internship ? 'internship' : 'workStudy']
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
    const remainingDays = differenceInDays(available, new Date()) + 1;
    const progress = (remainingDays * 80) / 100;

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
                    <h2>{t(tokens.page.offerDetails.mission)}</h2>
                    <ul>
                        {missions.map((description, index) => (
                            <li key={index}>
                                <CiCircleCheck />
                                {description}
                            </li>
                        ))}
                    </ul>
                    <h2>{t(tokens.page.offerDetails.profile)}</h2>
                    <ul>
                        {profils.map((description, index) => (
                            <li key={index}>
                                <CiCircleCheck />
                                {description}
                            </li>
                        ))}
                    </ul>
                    {/* redirection à faire */}
                    <Button className={styles.link} label='Postuler' redirectTo='' />
                </div>
                <div className={styles.pageContentRight}>
                    <h3>{t(tokens.page.offerDetails.deadlines)}</h3>
                    <div className={styles.progress}>
                        <p>{t(tokens.page.offerDetails.progress[remainingDays > 1 ? 'plural' : 'singular'], {
                            remainingDays
                        })}</p>
                        <ProgressBar value={progress} />
                    </div>
                    <div className={styles.rightText}>
                        <p>{t(tokens.page.offerDetails.availableAt)}</p>
                        <p>{availableAt}</p>
                    </div>
                    <div className={styles.rightText}>
                        <p>{t(tokens.page.offerDetails.createdAt)}</p>
                        <p>{createdAt}</p>
                    </div>
                    <div className={styles.rightText}>
                        <p>{t(tokens.page.offerDetails.typeOffer)}</p>
                        {offer?.internship ? (
                            <p>{t(tokens.page.offerDetails.internship)}</p>
                        ) : (
                            <p>{t(tokens.page.offerDetails.workStudy)}</p>
                        )}
                    </div>
                    <div className={styles.rightText}>
                        <p>{t(tokens.page.offerDetails.payed)}</p>
                        {offer?.payed ? (
                            <p>{t(tokens.page.offerDetails.isPayed)}</p>
                        ) : (
                            <p>{t(tokens.page.offerDetails.isNotPayed)}</p>
                        )}
                    </div>
                    <div className={styles.rightText}>
                        <p>{t(tokens.page.offerDetails.submitted)}</p>
                        {/* a faire */}
                        <p>1</p>
                    </div>
                    <div className={styles.border}></div>
                    <h3>{t(tokens.page.offerDetails.profileJob)}</h3>
                    <ul>
                        {activities.map((activity, index) => (
                            <li key={index}>
                                <Tag label={activity.name} color={activity.color} secondary />
                            </li>
                        ))}
                    </ul>
                    <div className={styles.border}></div>
                    <h3>{t(tokens.page.offerDetails.skills)}</h3>
                    <ul>
                        {skills.map((name, index) => (
                            <li key={index}>
                                <Tag label={name} secondary radius={0} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.separate}></div>
            <div className={styles.pageCompany}>
                <div className={styles.pageCompanyLeft}>
                    <img src={getPicturePath(offer.company.logo)} alt={offer.company.name} />
                    <p>{offer.company.presentation}</p>
                    <a href={`/entreprises/${offer.company.id}`}>{t(tokens.page.offerDetails.more)} {offer.company.name}<span><FaArrowRightLong /></span></a>
                </div>
                <div className={styles.pageCompanyRight}>
                    <div className={styles.left}>
                        {/* photos company */}
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
