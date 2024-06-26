import { useContext, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoPeopleOutline, IoNewspaperOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { GoGear } from "react-icons/go";

import styles from './Sidebar.module.scss'
import path from '../../../path'
import tokens from '../../../translations/tokens'
import getPicturePath from '../../../utils/getPicturePath';
import UserRoleEnum from '../../../enum/UserRoleEnum'
import { UserContext } from '../../../context/UserContext'
import List from '../../ui/atoms/List'
import cn from '../../../utils/classnames'
import Container from '../../ui/atoms/Container'

const isCurrentPage = (currentPage, route) => {
    if (route === '/') {
        return currentPage === route
    }

    return currentPage.startsWith(route.split('/:')[0])
}

const Sidebar = () => {
    const currentRoute = useLocation().pathname
    const { user } = useContext(UserContext)
    const { t } = useTranslation()

    const links = useMemo(() => [
        ...(user?.roles?.includes(UserRoleEnum.COLLABORATOR)
            ? [
                { icon: <BsBuildings className={styles.icon} />, name: t(tokens.sidebar.links.myCompany), url: '#' },
                { icon: <IoPeopleOutline className={styles.icon} />, name: t(tokens.sidebar.links.requests), url: '#' },
                { icon: <IoNewspaperOutline className={styles.icon} />, name: t(tokens.sidebar.links.offers), url: path.admin.offers },
            ]
            : []
        ),
        { icon: <GoGear className={styles.icon} />, name: t(tokens.sidebar.links.parameters), url: path.admin.profil },
    ], [t, user])

    return <Container inline className={styles.sidebar}>
        <h3 className={styles.title}>{t(tokens.sidebar.title)}</h3>

        <List
            collection={links}
            uniqueAttr={({ name }) => name}
            renderItem={({ icon, name, url }) => <Link
                to={url}
                className={cn(
                    styles.link,
                    {
                        [styles.active]: isCurrentPage(currentRoute, url)
                    }
                )}
            >
                {icon}{name}
            </Link>}
            className={styles.links}
        />

        {user && <div className={styles.account}>
            <img
                alt={user.firstName}
                src={user.avatar
                    ? getPicturePath(`img/user/${user.avatar}`)
                    : '/images/avatar.png'
                }
                className={styles.avatar}
            />

            <div className={styles.accountInfos}>
                <p className={styles.name}>{`${user.firstName} ${user.lastName}`}</p>
                <p className={styles.role}>
                    {t(tokens.roles[user.roles
                        .filter(role => role !== UserRoleEnum.USER)[0]
                        .replace('ROLE_', '')
                        .toLowerCase()
                    ])}
                </p>
            </div>
        </div>}
    </Container >
}

export default Sidebar
