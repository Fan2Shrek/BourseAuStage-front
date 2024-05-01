import styles from './styles.module.scss';
import path from '../../../path';

const Navbar = () => {
    return <>
        <div className={styles.navbar}>
            <img src='/img/logo.png' alt='Logo' />

            <div className={styles.links}>
                <a href={path.home}>Accueil</a>
                <a href='/'>Offres</a>
                <a href='/'>Demandes</a>
                <a href='/'>Entreprises</a>
                <a href='/'>Etudiants</a>
            </div>
            <div className={styles.login}>
                <a href='/'>Connexion</a>
                <a href='/'>Inscription</a>
            </div>
        </div>
    </>
}

export default Navbar;
