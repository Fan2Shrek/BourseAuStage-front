import { useContext, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

import styles from './Navbar.module.scss';
import path from '../../../path';
import { ThemeContext } from '../../../context/ThemeContext';
import ThemeEnum from '../../../enum/ThemeEnum';
import Button from '../../ui/atoms/Button';
import List from '../../ui/atoms/List';
import cn from '../../../utils/classnames'
import Container from '../../ui/atoms/Container';
import tokens from '../../../translations/tokens';
import Dropdown from '../../ui/atoms/Dropdown';

const isCurrentPage = (currentPage, route) => {
    if (route === '/') {
        return currentPage === route;
    }

    if (Array.isArray(route)) {
        return route.some(r => r.type === 'dropdown'
            ? isCurrentPage(currentPage, r.links)
            : currentPage.startsWith(r.url.split('/:')[0])
        );
    }

    return currentPage.startsWith(route.split('/:')[0]);
}

const Navbar = () => {
    const { theme, handleTheme } = useContext(ThemeContext);
    const isLight = theme === ThemeEnum.LIGHT;
    const currentRoute = useLocation().pathname;
    const { t } = useTranslation();

    const links = useMemo(() => [
        { name: t(tokens.navbar['home']), type: 'classic', url: path.home },
        {
            name: t(tokens.navbar['offers']),
            type: 'dropdown',
            links: [
                { name: t(tokens.navbar['internship']), type: 'classic', url: path.internship },
                { name: t(tokens.navbar['workStudy']), type: 'classic', url: path.workStudy },
            ]
        },
        { name: t(tokens.navbar['requests']), type: 'classic', url: '/' },
        { name: t(tokens.navbar['companies']), type: 'classic', url: path.companies },
        { name: t(tokens.navbar['students']), type: 'classic', url: '/' },
        { name: t(tokens.navbar['UI']), type: 'classic', url: path.uiExample },
    ], [t])

    return <Container inline className={styles.navbarBackground}>
        <Container className={styles.navbar}>
            <div className={styles.left}>
                <Link to={path.home} className={styles.logo}>
                    <img
                        src={`/images/logo${isLight ? '' : '_inverted'}.svg`}
                        alt='Logo'
                    />
                </Link>

                <List
                    className={styles.links}
                    collection={links}
                    uniqueAttr={({ name }) => name}
                    renderItem={({ name, type, url, links }) => {
                        if (type === 'dropdown') {
                            return <Dropdown
                                label={t(tokens.navbar[name]) || name}
                                links={links}
                                className={cn(
                                    styles.link,
                                    {
                                        [styles['link-active']]: isCurrentPage(currentRoute, links)
                                    }
                                )}
                                linkClassName={url => cn(
                                    styles.link,
                                    {
                                        [styles['link-active']]: isCurrentPage(currentRoute, url)
                                    }
                                )}
                            />
                        }

                        return <Link
                            to={url}
                            className={cn(
                                styles.link,
                                {
                                    [styles['link-active']]: isCurrentPage(currentRoute, url)
                                }
                            )}
                        >
                            {name}
                        </Link>
                    }}
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
        </Container>
    </Container>
}

export default Navbar;
