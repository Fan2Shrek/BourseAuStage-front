import {useContext} from 'react';
import {Link} from 'react-router-dom';
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
            <Link to={path.home}>Accueil</Link>
            <Link to='/'>Offres</Link>
            <Link to='/'>Demandes</Link>
            <Link to='/'>Entreprises</Link>
            <Link to='/'>Etudiants</Link>
            <Link to={path.uiExample}>UI</Link>
        </div>


        <div className={styles.login}>
            <Link to='/'>Connexion</Link>
            <Link to='/'>Inscription</Link>
        </div>

        {/* TEMPORAIRE (en attente d'un vrai switch) */}
        <div className={styles.themeSwitcher} onClick={handleTheme}>
            {isLight ? <FaRegMoon /> : <FaRegSun />}
        </div>
    </div>
}

export default Navbar;
