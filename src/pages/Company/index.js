import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaRegMoneyBillAlt } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { GoPeople } from "react-icons/go";

import styles from './Company.module.scss';
import apiClient from "../../api/ApiClient";
import getPicturePath from "../../utils/getPicturePath";
import getDomainName from '../../utils/getDomainName';
import path from "../../path";
import tokens from "../../translations/tokens";
import Container from '../../components/ui/atoms/Container';
import Button from '../../components/ui/atoms/Button';
import IconBadge from "../../components/ui/atoms/IconBadge";
import Banner from "../../components/layout/Banner";
import OfferTypeEnum from "../../enum/OfferTypeEnum";
import OfferCard from "../../components/offer/OfferCard";
import List from "../../components/ui/atoms/List";

const socialsLinks = {
    'linkedInLink': <CiLinkedin />,
    'instagramLink': <CiInstagram />,
    'facebookLink': <CiFacebook />,
    'twitterLink': <CiTwitter />,
}

const Company = () => {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [companyPictures, setCompanyPictures] = useState([]);
    const [collaborators, setCollaborators] = useState([]);
    const [internshipOffers, setInternshipOffers] = useState([]);
    const [workStudyOffers, setWorkStudyOffers] = useState([]);
    const { t } = useTranslation();

    const breadCrumb = useMemo(() => [
        {
            label: t(tokens.breadCrumb.home),
            link: path.home
        },
        {
            label: t(tokens.breadCrumb.companies),
            link: path.companies
        },
        {
            label: company?.name ?? '',
            link: null
        },
    ], [t, company])

    useEffect(() => {
        apiClient.company.get(id)
            .then(response => {
                if (response.status === 404) {
                    return;
                }

                setCompany(response);
            })

        apiClient.company.getPictures(id)
            .then(response => {
                if (response.status === 404) {
                    return;
                }

                setCompanyPictures(response['hydra:member']);
            })

        apiClient.company.getCollaborators(id)
            .then(response => {
                if (response.status === 404) {
                    return;
                }

                setCollaborators(response['hydra:member']);
            })
    }, [id]);

    useEffect(() => {
        if (!company) {
            return;
        }

        apiClient.company.getOffers(company.id)
            .then(response => {
                if (response.status === 404) {
                    return;
                }

                const offers = response['hydra:member'] ?? []

                setInternshipOffers(offers.filter(offer => offer.internship))
                setWorkStudyOffers(offers.filter(offer => !offer.internship))
            })
    }, [company]);

    if (!company) {
        return <></>
    }

    return <div className={styles.company}>
        <Banner breadCrumb={breadCrumb}>
            <div className={styles.description}>
                <h1>{company.name}</h1>
                <Button className={styles.link} withoutBorder inverted label={getDomainName(company.socialLink)} icon={<FaArrowRight />} rightIcon></Button>
                <div className={styles.statsContainer}>
                    {company?.activities?.[0] && <div className={styles.stats}>
                        <IconBadge icon={<CiCircleCheck size={20} />} className={styles.icon} />
                        <div className={styles.content}>
                            <span>{t(tokens.page.companyDetails.activity)}</span>
                            <span className={styles.value}>{company.activities[0].name}</span>
                        </div>
                    </div>}

                    {company.age && <div className={styles.stats}>
                        <IconBadge icon={<AiOutlineFire size={20} />} className={styles.icon} />
                        <div className={styles.content}>
                            <span>{t(tokens.page.companyDetails.age)}</span>
                            <span className={styles.value}>{company.age}</span>
                        </div>
                    </div>}

                    {company.effective && <div className={styles.stats}>
                        <IconBadge icon={<GoPeople size={20} />} className={styles.icon} />
                        <div className={styles.content}>
                            <span>{t(tokens.page.companyDetails.effective)}</span>
                            <span className={styles.value}>{company.effective}</span>
                        </div>
                    </div>}

                    {company.turnover && <div className={styles.stats}>
                        <IconBadge icon={<FaRegMoneyBillAlt size={20} />} className={styles.icon} />
                        <div className={styles.content}>
                            <span>{t(tokens.page.companyDetails.turnover)}</span>
                            <span className={styles.value}>{company.turnover} €</span>
                        </div>
                    </div>}

                    {company.city && <div className={styles.stats}>
                        <IconBadge icon={<FiMapPin size={20} />} className={styles.icon} />
                        <div className={styles.content}>
                            <span>{t(tokens.page.companyDetails.city)}</span>
                            <span className={styles.value}>{company.city}</span>
                        </div>
                    </div>}
                </div>
            </div>
        </Banner>

        <Container className={styles.pageContent}>
            <div className={styles.pageContentLeft}>
                <h2>{t(tokens.page.companyDetails.presentation)}</h2>
                <p>
                    {company.presentation}
                </p>
                <h2>{t(tokens.page.companyDetails.socialsLinks)}</h2>
                <div className={styles.socialsLinks}>
                    {Object.entries(socialsLinks).map(([name, icon], index) => {
                        if (!company[name]) {
                            return <></>
                        }

                        return <Button key={index} className={styles.link} inverted label={getDomainName(company[name])} icon={icon}></Button>
                    })}
                </div>
                {companyPictures && <div className={styles.pictures}>
                    {companyPictures.map((picture) => {
                        return <img key={picture.id} src={getPicturePath(picture.path)} alt={t(tokens.page.companyDetails.images.alt, { company: company.name })} />
                    })}
                </div>}
            </div>
            <div className={styles.pageContentRight}>
                <div>
                    <img src={getPicturePath(company.logo)} alt={company.name} />
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
                {collaborators.length > 1 && <div className={styles.contacts}>
                    <h2>{t(tokens.page.companyDetails.contacts)}</h2>
                    {collaborators.map((collaborator) =>
                        <div className={styles.contactPerson}>
                            <p>{collaborator.jobTitle}</p>
                            <p>{`${collaborator.firstName} ${collaborator.lastName}`}</p>
                        </div>
                    )}
                </div>}
            </div>
        </Container>

        {internshipOffers.length + workStudyOffers.length > 0 && <Container
            cornerTop
            inline
            className={styles.relatedOffers}
        >
            <Container>
                {internshipOffers.length > 0 && <div className={styles.internships}>
                    <h2>{t(tokens.page.companyDetails.relatedOffers.internship)}</h2>
                    <List
                        collection={internshipOffers}
                        renderItem={offer => <OfferCard
                            offer={offer}
                            type={OfferTypeEnum.INTERNSHIP}
                            withDates
                            withDescription
                            withActivities
                        />}
                    />
                </div>}
                {workStudyOffers.length > 0 && <div className={styles.workStudies}>
                    <h2>{t(tokens.page.companyDetails.relatedOffers.workStudy)}</h2>
                    <List
                        collection={workStudyOffers}
                        renderItem={offer => <OfferCard
                            offer={offer}
                            type={OfferTypeEnum.WORKSTUDY}
                            withDates
                            withDescription
                            withActivities
                        />}
                    />
                </div>}
            </Container>
        </Container>}
    </div>
}

export default Company;
