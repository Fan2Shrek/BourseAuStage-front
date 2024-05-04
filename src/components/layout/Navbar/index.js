import {useContext} from 'react';
import {FaRegMoon} from "react-icons/fa";
import {FaRegSun} from "react-icons/fa";

import styles from './Navbar.module.scss';
import path from '../../../path';
import {ThemeContext} from '../../../context/ThemeContext';
import {ThemeEnum} from '../../../enum/ThemeEnum';

const Navbar = () => {
    const {theme, handleTheme} = useContext(ThemeContext);
    const isLight = theme === ThemeEnum.LIGHT;

    return <div className={styles.navbar}>
        <img
            src={`/images/logo${isLight ? '' : '_inverted'}.svg`}
            alt='Logo'
            className={styles.logo}
        />

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

        {/* TEMPORAIRE (en attente d'un vrai switch) */}
        <div className={styles.themeSwitcher} onClick={handleTheme}>
            {isLight ? <FaRegMoon /> : <FaRegSun />}
        </div>
    </div>
}

export default Navbar;
