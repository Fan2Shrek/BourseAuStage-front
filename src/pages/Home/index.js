import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss'
import cn from '../../utils/classnames'
import tokens from '../../translations/tokens';
import Banner from '../../components/layout/Banner';
import Container from '../../components/ui/atoms/Container';
import Button from '../../components/ui/atoms/Button';

const Home = () => {
    const { t } = useTranslation()

    return <Container inline className={styles.content}>
        <Banner>
            <h1>Home</h1>
        </Banner>

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
