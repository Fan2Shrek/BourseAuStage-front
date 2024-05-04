import {CiFacebook, CiInstagram, CiLinkedin, CiTwitter} from "react-icons/ci";

import styles from './styles.module.scss';

const Footer = () => {
    return <div className={styles.footer}>
        <div className={styles.content}>
            <div className={styles.column}>
                <img
                    src="/images/logo_inverted.svg"
                    alt="Logo"
                    className={styles.logo}
                />
                <p>
                    Première plateforme dédiée à la recherche de stages et d’alternance qui relie automatiquement les étudiants et les entreprises.
                </p>
            </div>

            <div className={styles.column}>
                <a>Accueil</a>
                <a>Offres</a>
                <a>Entreprises</a>
                <a>Etudiants</a>
            </div>

            <div className={styles.column}>
                <a>Blog</a>
                <a>Sponsor</a>
                <a>Mentions légales</a>
                <a>Données personnelles</a>
                <a>Nous contacter</a>
            </div>

            <div className={styles.column}>
                <p>Étudiants, créez votre compte</p>
                <p>Recevez automatiquement par email les offres qui vous intéressent !</p>
            </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
            <p>2024 © Bourse aux Stages - Tous droits réservés</p>

            <div className={styles.links}>
                <CiFacebook />
                <CiInstagram />
                <CiLinkedin />
                <CiTwitter />
            </div>
        </div>
    </div>
}

export default Footer;
