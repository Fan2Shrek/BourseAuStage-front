import Banner from '../../components/layout/Banner';
import Container from '../../components/ui/atoms/Container';
import styles from './Home.module.scss';

const Home = () => {
    return <Container inline className={styles.container}>
        <Banner>
            <h1>Home</h1>
        </Banner>
    </Container>
}

export default Home;
