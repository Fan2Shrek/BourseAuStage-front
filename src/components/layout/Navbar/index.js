import { useCallback, useContext, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaRegMoon, FaRegSun } from "react-icons/fa"
import { PiStudent, PiBuildingOffice } from "react-icons/pi"

import styles from './Navbar.module.scss'
import path from '../../../path'
import tokens from '../../../translations/tokens'
import apiClient from '../../../api/ApiClient'
import { eraseCookie } from '../../../utils/cookies'
import { UserContext } from '../../../context/UserContext'
import { ThemeContext } from '../../../context/ThemeContext'
import ThemeEnum from '../../../enum/ThemeEnum'
import Button from '../../ui/atoms/Button'
import List from '../../ui/atoms/List'
import cn from '../../../utils/classnames'
import Container from '../../ui/atoms/Container'
import Dropdown from '../../ui/atoms/Dropdown'
import Modal from '../../ui/atoms/Modal'

const isCurrentPage = (currentPage, route) => {
    if (route === '/') {
        return currentPage === route
    }

    if (Array.isArray(route)) {
        return route.some(r => r.type === 'dropdown'
            ? isCurrentPage(currentPage, r.links)
            : currentPage.startsWith(r.url.split('/:')[0])
        )
    }

    return currentPage.startsWith(route.split('/:')[0])
}

const Navbar = () => {
    const [displayModal, setDisplayModal] = useState(false)
    const { theme, handleTheme } = useContext(ThemeContext)
    const { user, setUser } = useContext(UserContext)
    const isLight = theme === ThemeEnum.LIGHT
    const currentRoute = useLocation().pathname
    const { t } = useTranslation()

    const links = useMemo(() => [
        { name: t(tokens.navbar.links.home), type: 'classic', url: path.home },
        {
            name: t(tokens.navbar.links.offers),
            type: 'dropdown',
            links: [
                { name: t(tokens.navbar.links.internship), type: 'classic', url: path.internship },
                { name: t(tokens.navbar.links.workStudy), type: 'classic', url: path.workStudy },
            ]
        },
        { name: t(tokens.navbar.links.requests), type: 'classic', url: '#' },
        { name: t(tokens.navbar.links.companies), type: 'classic', url: path.companies },
        { name: t(tokens.navbar.links.students), type: 'classic', url: '#' },
        { name: t(tokens.navbar.links.UI), type: 'classic', url: path.uiExample },
    ], [t])

    const handleLogBtn = useCallback(() => {
        if (user) {
            setUser(null)
            eraseCookie('token')
            apiClient.token = null
        }
    }, [user, setUser])

    return <Container inline className={styles.navbarBackground}>
        <Container className={styles.navbar}>
            <Modal
                title={t(tokens.navbar.modal.title)}
                active={displayModal}
                setDisplayModal={setDisplayModal}
            >
                <div className={styles.modal}>
                    <Button
                        key={t(tokens.navbar.modal.student)}
                        label={t(tokens.navbar.modal.student)}
                        inverted
                        transparent
                        icon={<PiStudent size={35} />}
                        redirectTo={path.studentRegistration}
                    />
                    <Button
                        key={t(tokens.navbar.modal.company)}
                        label={t(tokens.navbar.modal.company)}
                        inverted
                        transparent
                        icon={<PiBuildingOffice size={35} />}
                        redirectTo={path.companyRegistration}
                    />
                </div>
            </Modal>

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
                <Button
                    label={t(tokens.actions[user ? 'logout' : 'login'])}
                    withoutBorder
                    transparent
                    inverted
                    onClick={handleLogBtn}
                    redirectTo={user ? path.home : path.login}
                />
                <div className={styles.divider} />
                <Button
                    label={t(tokens.actions[user ? 'myAccount' : 'createAccount'])}
                    {...(!user && { onClick: () => setDisplayModal(true) })}
                    {...(user && { redirectTo: path.admin.profil })}
                />
            </div>

            {/* TEMPORAIRE (en attente d'un vrai switch) */}
            <div className={styles.themeSwitcher} onClick={handleTheme}>
                {isLight ? <FaRegMoon /> : <FaRegSun />}
            </div>
        </Container>
    </Container>
}

export default Navbar
