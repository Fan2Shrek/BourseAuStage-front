import {useContext} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FaRegMoon} from "react-icons/fa";
import {FaRegSun} from "react-icons/fa";

import styles from './Navbar.module.scss';
import path from '../../../path';
import {ThemeContext} from '../../../context/ThemeContext';
import {ThemeEnum} from '../../../enum/ThemeEnum';
import Button from '../../ui/atoms/Button';
import List from '../../ui/atoms/List';
import cn from '../../../utils/classnames'
import Container from '../../ui/atoms/Container';
import { useTranslation } from 'react-i18next';
import tokens from '../../../translations/tokens';

const links = {
    home: path.home,
    offers: '/',
    requests: '/',
    companies: '/',
    students: '/',
    UI: path.uiExample
}


const Navbar = () => {
    const {theme, handleTheme} = useContext(ThemeContext);
    const isLight = theme === ThemeEnum.LIGHT;
    const currentRoute = useLocation().pathname;
    const { t } = useTranslation();

    return <Container>
        <div className={styles.navbar}>
            <div className={styles.left}>
                <Link to={path.home}>
                    <img
                        src={`/images/logo${isLight ? '' : '_inverted'}.svg`}
                        alt='Logo'
                        className={styles.logo}
                    />
                </Link>

                <List className={styles.links}
                    collection={Object.entries(links)}
                    uniqueAttr={btn => btn.identifier}
                    renderItem={([name, l], index) => (
                        <Link 
                            to={l} 
                            key={index}
                            className={cn(styles.link,  l === currentRoute ? styles['link-active'] : '')}
                        > 
                            {t(tokens.navbar[name]) || name}
                        </Link>
                    )}
                />
            </div>


            <div className={styles.login}>
                <Link to='/'><Button label={t(tokens.actions.login)} withoutBorder transparent inverted /></Link>
                <div className={styles.divider} />
                <Link to='/'><Button label={t(tokens.actions.createAccount)} /></Link>
            </div>

            {/* TEMPORAIRE (en attente d'un vrai switch) */}
            <div className={styles.themeSwitcher} onClick={handleTheme}>
                {isLight ? <FaRegMoon /> : <FaRegSun />}
            </div>
        </div>
    </Container>
}

export default Navbar;
