import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss'
import cn from '../../utils/classnames'
import getPicturePath from '../../utils/getPicturePath';
import tokens from '../../translations/tokens';
import apiClient from '../../api/ApiClient';
import Banner from '../../components/layout/Banner';
import Container from '../../components/ui/atoms/Container';
import Button from '../../components/ui/atoms/Button';
import List from '../../components/ui/atoms/List';

const Home = () => {
    const [highlightedCompanies, setHighlightedCompanies] = useState([])
    const { t } = useTranslation()

    useEffect(() => {
        apiClient.company.getHighlight()
            .then(response => {
                if (response.status === 404) {
                    return;
                }

                setHighlightedCompanies(response['hydra:member']);
            })
    }, []);

    return <Container inline className={styles.content}>
        <Banner>
            <h1>Home</h1>
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
                <h3>{t(tokens.page.home.incentive.title)}</h3>
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
    </Container>
}

export default Home;
