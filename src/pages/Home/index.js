import { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { FaArrowRight } from "react-icons/fa6";

import styles from './Home.module.scss'
import cn from '../../utils/classnames'
import getPicturePath from '../../utils/getPicturePath';
import tokens from '../../translations/tokens';
import apiClient from '../../api/ApiClient';
import Banner from '../../components/layout/Banner';
import Container from '../../components/ui/atoms/Container';
import Button from '../../components/ui/atoms/Button';
import List from '../../components/ui/atoms/List';
import UnderlinedContent from '../../components/ui/atoms/UnderlinedText';
import { Link } from 'react-router-dom';
import OfferCard from '../../components/offer/OfferCard';
import path from '../../path';
import OfferTypeEnum from '../../enum/OfferTypeEnum';

const Home = () => {
    const [highlightedCompanies, setHighlightedCompanies] = useState([])
    const [lastOffers, setLastOffers] = useState([])
    const { t } = useTranslation()

    useEffect(() => {
        apiClient.company.getHighlight()
            .then(response => {
                if (response.status === 404) {
                    return;
                }

                setHighlightedCompanies(response['hydra:member']);
            })

        apiClient.offer.getLastOffers()
            .then(response => {
                if (response.status === 404) {
                    return;
                }

                setLastOffers(response['hydra:member']);
            })
    }, []);

    return <Container inline className={styles.content}>
        <Banner cornerBottom className={cn(styles.section, styles.hero)}>
            <div className={styles.main}>
                <h1 className={styles.title}>
                    {`${t(tokens.page.home.hero.title.first)} `}
                    <UnderlinedContent>{t(tokens.page.home.hero.title.underlined)}</UnderlinedContent>
                </h1>
                <p className={styles.description}>{t(tokens.page.home.hero.description)}</p>
                <p className={styles.offers}><Trans
                    i18nKey={tokens.page.home.hero.offers}
                    values={{
                        internshipsNumber: "1234",
                        workStudiesNumber: '987',
                    }}
                    components={{ secondary: <span className={styles.secondary} />, bold: <span className={styles.bold} /> }}
                /></p>
            </div>
            <img
                src="/images/home/heroPattern.svg"
                alt="hero pattern"
                className={styles.heroPattern}
            />
            <img
                src="/images/home/man.svg"
                alt="pioupiou"
                className={styles.pioupiou}
            />
        </Banner>

        <Container className={cn(styles.section, styles.highlightedCompanies)}>
            <p>{t(tokens.page.home.highlightedCompanies.title)}</p>

            <List
                collection={highlightedCompanies}
                renderItem={company => <img
                    src={getPicturePath(company.logo)}
                    alt={t(tokens.page.home.highlightedCompanies.image.alt, { company: company.name })}
                />}
            />
        </Container>

        <Container cornerTop cornerBottom className={cn(styles.section, styles.incentive)}>
            <div className={styles.main}>
                <h3 className={styles.title}>{t(tokens.page.home.incentive.title)}</h3>
                <p>{t(tokens.page.home.incentive.text)}</p>
                <Button label={t(tokens.page.home.incentive.cta)} inverted className={styles.cta} />
            </div>
            <div className={styles.image}>
                <img
                    src="/images/home/dashboard.svg"
                    alt="Dashboard"
                />
            </div>
        </Container>

        <Container className={cn(styles.section, styles.lastOffers)}>
            <div className={styles.header}>
                <h2><Trans
                    i18nKey={tokens.page.home.lastOffers.title}
                    components={{ secondary: <span className={styles.secondary} /> }}
                /></h2>
                <Button
                    label={t(tokens.page.home.lastOffers.cta)}
                    secondary
                    inverted
                    withoutBorder
                    icon={<FaArrowRight />}
                    rightIcon
                    className={styles.cta}
                />
            </div>

            <List
                collection={lastOffers}
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
}

export default Home;
