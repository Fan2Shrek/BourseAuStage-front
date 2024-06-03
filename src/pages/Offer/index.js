import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { Trans, useTranslation } from "react-i18next";
import { CiCircleCheck } from "react-icons/ci";
import { format, differenceInDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from './Offer.module.scss';
import apiClient from "../../api/ApiClient";
import getPicturePath from "../../utils/getPicturePath";
import path from "../../path";
import tokens from "../../translations/tokens";
import Banner from "../../components/layout/Banner";
import Container from '../../components/ui/atoms/Container';
import Button from '../../components/ui/atoms/Button';
import Tag from '../../components/ui/atoms/Tag';
import ProgressBar from '../../components/ui/atoms/ProgressBar';
import OfferCard from "../../components/offer/OfferCard";
import List from "../../components/ui/atoms/List";
import OfferTypeEnum from "../../enum/OfferTypeEnum";

const Offer = () => {
    const [offer, setOffer] = useState(null);
    const [companyPictures, setCompanyPictures] = useState([]);
    const [similarOffers, setSimilarOffers] = useState([]);
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

    useEffect(() => {
        if (!offer) {
            return
        }

        apiClient.company.getPictures(offer.company.id)
            .then(response => {
                if (response.status === 404) {
                    return;
                }

                setCompanyPictures(response['hydra:member']);
            })
    }, [offer]);

    useEffect(() => {
        if (!offer) {
            return
        }

        apiClient.offer.getAll(`isInternship=${offer.internship}` + offer.activities.reduce((acc, cur) => `${acc}&activities.name[]=${cur.name}`, ''))
            .then(response => {
                if (response.status === 404) {
                    return;
                }

                setSimilarOffers(response['hydra:member']);
            })
    }, [offer]);

    if (!offer) {
        return <></>
    }

    const availableAt = format(new Date(offer.availableAt), "dd MMMM yyyy", { locale: fr });
    const createdAt = format(new Date(offer.createdAt), "dd MMMM yyyy", { locale: fr });

    const available = new Date(offer.availableAt);
    const remainingDays = differenceInDays(available, new Date()) + 1;
    const progress = (remainingDays * 100) / 80;

    return <div className={styles.offer}>
        <Banner breadCrumb={breadCrumb}>
            <OfferCard
                offer={offer}
                row
                withMainTitle
                withShare
                className={styles.card}
            />
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
                    <List
                        collection={offer.missions}
                        renderItem={({ description }) => <>
                            <CiCircleCheck />
                            <p>{description}</p>
                        </>}
                    />
                    <h2>{t(tokens.page.offerDetails.profile)}</h2>
                    <List
                        collection={offer.profils}
                        renderItem={({ description }) => <>
                            <CiCircleCheck />
                            <p>{description}</p>
                        </>}
                    />
                    <Button
                        label={t(tokens.page.offerDetails.cta)}
                        redirectTo={path.apply.replace(':id', offer.company.id)}
                        className={styles.link}
                    />
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
                    <div className={styles.tagList}>
                        <List
                            collection={offer.activities}
                            renderItem={({ name, color }) => <Tag
                                label={name}
                                color={color}
                                secondary
                            />}
                        />
                    </div>
                    <div className={styles.border}></div>
                    <h3>{t(tokens.page.offerDetails.skills)}</h3>
                    <div className={styles.tagList}>
                        <List
                            collection={offer.searchSkills}
                            renderItem={({ name }) => <Tag
                                label={name}
                                redius={0}
                                secondary
                            />}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.separate}></div>
            <div className={styles.pageCompany}>
                <div className={styles.pageCompanyLeft}>
                    <Link to={path.company.replace(':id', offer.company.id)}>
                        <img src={getPicturePath(offer.company.logo)} alt={offer.company.name} />
                    </Link>
                    <p>{offer.company.presentation}</p>
                    <Button
                        label={t(tokens.page.offerDetails.more, { company: offer.company.name })}
                        redirectTo={path.company.replace(':id', offer.company.id)}
                        inverted
                        withoutBorder
                        transparent
                        icon={<FaArrowRight />}
                        rightIcon
                        className={styles.cta}
                    />
                </div>
                <div className={styles.pageCompanyRight}>
                    <List
                        collection={companyPictures}
                        renderItem={picture => <img
                            src={getPicturePath(picture.path)}
                            alt={t(tokens.page.companyDetails.images.alt, { company: offer.company.name })}
                            className={styles.picture}
                        />}
                    />
                    <div className={styles.map}>
                        MAP
                    </div>
                </div>
            </div>
        </Container>
        <Container inline cornerTop className={styles.similarOffers}>
            <Container>
                <div className={styles.header}>
                    <h2><Trans
                        i18nKey={tokens.page.offerDetails.similar.title}
                        components={{ secondary: <span className={styles.secondary} /> }}
                    /></h2>
                    <Button
                        label={t(tokens.page.offerDetails.similar.cta)}
                        secondary
                        inverted
                        withoutBorder
                        transparent
                        icon={<FaArrowRight />}
                        rightIcon
                        className={styles.cta}
                    />
                </div>

                <List
                    collection={similarOffers}
                    renderItem={offer => <Link to={path.offer.replace(':id', `${offer.id}`)}>
                        <OfferCard
                            offer={offer}
                            type={offer.internship ? OfferTypeEnum.INTERNSHIP : OfferTypeEnum.WORKSTUDY}
                            withHeader
                            withLocaltion
                            withDescription
                            withActivities
                        />
                    </Link>}
                    className={styles.offerList}
                />
            </Container>
        </Container>
    </div>
}

export default Offer;
