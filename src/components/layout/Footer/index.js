import {Link} from "react-router-dom";
import {CiFacebook, CiInstagram, CiLinkedin, CiTwitter} from "react-icons/ci";

import styles from './Footer.module.scss';
import path from "../../../path";

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
                <Link to={path.home}>Accueil</Link>
                <Link to="/">Offres</Link>
                <Link to="/">Entreprises</Link>
                <Link to="/">Etudiants</Link>
            </div>

            <div className={styles.column}>
                <Link to="/">Blog</Link>
                <Link to="/">Sponsor</Link>
                <Link to="/">Mentions légales</Link>
                <Link to="/">Données personnelles</Link>
                <Link to="/">Nous contacter</Link>
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
