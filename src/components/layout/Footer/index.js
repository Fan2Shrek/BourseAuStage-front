import { Link } from "react-router-dom";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { useTranslation } from "react-i18next";

import styles from './Footer.module.scss';
import path from "../../../path";
import cn from '../../../utils/classnames'
import tokens from "../../../translations/tokens";
import Container from "../../ui/atoms/Container";
import IconBadge from "../../ui/atoms/IconBadge";
import Button from '../../ui/atoms/Button';
import Input from "../../ui/molecules/Input";

const Footer = () => {
    const { t } = useTranslation();

    return <Container inline className={styles.footer}>
        <Container>
            <div className={styles.footerContainer}>
                <div className={styles.content}>
                    <div className={cn(styles.column, styles.logoContainer)}>
                        <img
                            src="/images/logo_inverted.svg"
                            alt="Logo"
                            className={styles.logo}
                        />
                        <p>
                            {t(tokens.footer.description)}
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <Link to={path.home}>{t(tokens.footer.links.home)}</Link>
                            <Link to={path.internship}>{t(tokens.footer.links.offers)}</Link>
                            <Link to="/">{t(tokens.footer.links.students)}</Link>
                            <Link to={path.companies}>{t(tokens.footer.links.companies)}</Link>
                        </div>

                        <div className={styles.column}>
                            <Link to="/">{t(tokens.footer.links.blog)}</Link>
                            <Link to="/">{t(tokens.footer.links.sponsors)}</Link>
                            <Link to="/">{t(tokens.footer.links.legal)}</Link>
                            <Link to="/">{t(tokens.footer.links.personalData)}</Link>
                            <Link to="/">{t(tokens.footer.links.contact)}</Link>
                        </div>
                    </div>

                    <div className={cn(styles.column, styles.createContainer)}>
                        <p className={styles.createAccount}>{t(tokens.footer.register.title)}</p>
                        <p>{t(tokens.footer.register.description)}</p>
                        <div className={styles.createAccountForm}>
                            <Input placeholder={t(tokens.footer.register.email)} />
                            <Button label={t(tokens.footer.register.submit)} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.divider}></div>

                    <div className={styles.bottom}>
                        <p>{t(tokens.footer.copyright)}</p>

                        <div className={styles.links}>
                            <Link to='/'><IconBadge icon={<CiFacebook />} /></Link>
                            <Link to='/'><IconBadge icon={<CiInstagram />} /></Link>
                            <Link to='/'><IconBadge icon={<CiLinkedin />} /></Link>
                            <Link to='/'><IconBadge icon={<CiTwitter />} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Container>
}

export default Footer;
