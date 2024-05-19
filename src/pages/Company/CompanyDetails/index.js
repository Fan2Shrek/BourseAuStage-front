import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaRegMoneyBillAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { GoPeople } from "react-icons/go";

import apiClient from "../../../api/ApiClient"; 
import Container from '../../../components/ui/atoms/Container';
import Button from '../../../components/ui/atoms/Button';
import getDomainName from '../../../utils/getDomainName';
import styles from './CompanyDetails.module.scss';
import IconBadge from "../../../components/ui/atoms/IconBadge";
import tokens from "../../../translations/tokens";
import getPicturePath from "../../../utils/getPicturePath";

const socialsLinks = {
    'linkedInLink': <CiLinkedin />,
    'instagramLink': <CiInstagram />,
    'facebookLink': <CiFacebook />,
    'twitterLink': <CiTwitter />,
}

const CompanyDetails = () => {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [companyPictures, setCompanyPictures] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetch = async () => {
            const response = await apiClient.company.get(id);

            if (response.status === 404) {
                return;
            }

            setCompany(response);
        }

        fetch();
    }, [id]);

    useEffect(() => {
        const fetch = async () => {
            const response = await apiClient.company.getPictures(id);
            setCompanyPictures(response['hydra:member']);
        }

        fetch();
    }, [company]);

    if (!company) {
        return <></>
    }

    return <>
        <Container inline className={styles.header}>
            <Container>
                {/* TODO: breadcrumb  */}
                <div className={styles.description}>
                    <h1>{company.name}</h1>
                    <Button className={styles.link} withoutBorder inverted label={getDomainName(company.socialLink)} icon={<FaArrowRight />} rightIcon></Button>
                    <div className={styles.statsContainer}>
                        {company?.activities?.[0] && <div className={styles.stats}>
                            <IconBadge icon={<CiCircleCheck size={20} />} className={styles.icon}/>
                            <div className={styles.content}>
                                <span>{t(tokens.page.companyDetails.activity)}</span>
                                <span className={styles.value}>{company.activities[0].name}</span>
                            </div>
                        </div>}

                        {company.age && <div className={styles.stats}>
                            <IconBadge icon={<AiOutlineFire size={20} />} className={styles.icon}/>
                            <div className={styles.content}>
                                <span>{t(tokens.page.companyDetails.age)}</span>
                                <span className={styles.value}>{company.age}</span>
                            </div>
                        </div>}

                        {company.effective && <div className={styles.stats}>
                            <IconBadge icon={<GoPeople size={20} />} className={styles.icon}/>
                            <div className={styles.content}>
                                <span>{t(tokens.page.companyDetails.effective)}</span>
                                <span className={styles.value}>{company.effective}</span>
                            </div>
                        </div>}

                        {company.turnover && <div className={styles.stats}>
                            <IconBadge icon={<FaRegMoneyBillAlt size={20} />} className={styles.icon}/>
                            <div className={styles.content}>
                                <span>{t(tokens.page.companyDetails.turnover)}</span>
                                <span className={styles.value}>{company.turnover} €</span>
                            </div>
                        </div>}

                        {company.city && <div className={styles.stats}>
                            <IconBadge icon={<FiMapPin size={20} />} className={styles.icon}/>
                            <div className={styles.content}>
                                <span>{t(tokens.page.companyDetails.city)}</span>
                                <span className={styles.value}>{company.city}</span>
                            </div>
                        </div>}
                    </div>
                </div>
            </Container>
        </Container>
        <Container className={styles.pageContent}>
            <div className={styles.pageContentLeft}>
                <h2>{t(tokens.page.companyDetails.presentation)}</h2>
                <p>
                    {company.presentation}
                </p>
                <h2>{t(tokens.page.companyDetails.socialsLinks)}</h2>
                <div className={styles.socialsLinks}>
                    {Object.entries(socialsLinks).map(([name, icon], index) => {
                        if (company[name]) {
                            return <Button key={index} className={styles.link} inverted label={getDomainName(company[name])} icon={icon}></Button>
                        }
                    })}
                </div>
                {companyPictures && <div className={styles.pictures}> 
                    {companyPictures.map((picture, index) => {
                        return <img key={picture.id} src={getPicturePath(picture.path)} />
                    })}
                </div>}
            </div>
            <div className={styles.pageContentRight}>
                <div>
                    <h2>{t(tokens.page.companyDetails.city)}</h2>
                    <div className={styles.city}>
                        <p className={styles.name}>{company.name}</p>
                        <p>{company.city}</p>
                        <div className={styles.map}>
                            MAP
                        </div>
                    </div>
                </div>
                <div className={styles.contact}>
                    <h2>{t(tokens.page.companyDetails.contact)}</h2>
                    <p className={styles.name}>{t(tokens.page.companyDetails.phone)}: {company.phone}</p>
                    <p>{company.openingTime}</p>
                </div>
                <div className={styles.contacts}>
                    {/* TODO: Attendre la partie api sur les collaborateurs */}
                    <h2>{t(tokens.page.companyDetails.contacts)}</h2>
                    <div className={styles.contactPerson}>
                        <p>Responasble bla bla bla</p>
                        <p>Bob Couscous</p>
                    </div>
                </div>
            </div>
        </Container>
    </>
}

export default CompanyDetails;
