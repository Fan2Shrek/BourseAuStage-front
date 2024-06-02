import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

import Card from "../../../components/ui/atoms/Card";
import Container from "../../../components/ui/atoms/Container";
import styles from './apply.module.scss';
import tokens from "../../../translations/tokens";
import Tag from "../../../components/ui/atoms/Tag";
import Select from "../../../components/ui/atoms/Select";
import Input from "../../../components/ui/molecules/Input";
import cn from '../../../utils/classnames';
import Button from "../../../components/ui/atoms/Button";
import Banner from "../../../components/layout/Banner";
import Ckeditor from "../../../components/ui/atoms/Ckeditor";

const Apply = () => {
    const [offer, setOffer] = useState(null);
    const [form, setForm] = useState({});

    const [skills, setSkills] = useState(['Skill 1', 'Skill 2', 'Skill 3']);
    const [languages, setLanguages] = useState(['Langage 1', 'Langage 2', 'Langage 3']);
    const [experiences, setExperiences] = useState(['Experience 1', 'Experience 2', 'Experience 3']);

    const { t } = useTranslation();

    useEffect(() => {
        // appel api a faire

        setOffer({
            name: 'Offre de stage',
            start: '01/01/2022',
            end: '01/07/2022',
            type: 'stage',
            logo: 'https://projetcartylion.fr/wp-content/uploads/2020/08/Placeholder.png',
            company: {
                name: 'Entreprise',
                city: 'Paris',
                activities: [{
                    name: 'Activité 1',
                    color: '#FF0000'
                }, {
                    name: 'Activité 2',
                    color: '#FF00FF'
                }]
            },
        });

    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        console.log(form)
    }

    if (!offer) {
        return <></>;
    }

    return <>
        <Container inline className={styles.header}>
            <Banner breadCrumb={[{ label: t(tokens.navbar.offers), link: '/offers' }, { label: offer.name }]}>
                <Card>
                    <div className={styles.card__content}>
                        <img className={styles.log} src={offer.logo} height='90' width='90' alt='Logo' />
                        <div>
                            <h1>{offer.name}</h1>
                            <p><span>{offer.company.name}</span>{offer.company.city} - {decodeURI(t(tokens.page.apply.duration, { 'start': offer.start, end: offer.end }))} </p>
                            <div className={styles.activities}>
                                <Tag className={styles.offerType} label={offer.type} radius={0} secondary />
                                <div className={styles.verticalDivider}></div>
                                {offer.company.activities.map((activity) => <Tag key={activity.name} label={activity.name} color={activity.color} secondary />)}
                            </div>
                        </div>
                        <div className={styles.verticalDivider}></div>
                        <Button className={styles.backBtn} label={t(tokens.actions.back)} inverted icon={<FaArrowLeft />} />
                    </div>
                </Card>
            </Banner>
        </Container>
        <Container className={styles.content}>
            <div className={styles.left}>
                <h2>{t(tokens.page.apply.title)}</h2>
                <div className={styles.divider}></div>
                <p className={styles.subtitle}>{t(tokens.page.apply.youAre)}</p>
                <div className={styles.form}>
                    <Select name='gender' label={t(tokens.page.apply.gender)} type='text' required values={['Homme', 'Femme', 'Non-binaire', 'Shrek']} className={styles['c2']} />
                    <Input name='firstname' onChange={handleChange} required label={t(tokens.page.apply.firstname)} className={styles['c2']} />
                    <Input name='lastname' onChange={handleChange} required label={t(tokens.page.apply.lastname)} className={styles['c2']} />

                    {/* calendar */} <Input name='birth' onChange={handleChange} required label={t(tokens.page.apply.birth)} className={styles['c3']} />
                    <Input name='phone' onChange={handleChange} required label={t(tokens.page.apply.phone)} className={styles['c3']} />

                    <Input name='email' onChange={handleChange} required label={t(tokens.page.apply.email)} className={styles['c3']} />
                    <Input name='confirmEmail' onChange={handleChange} required label={t(tokens.page.apply.confirmEmail)} className={styles['c3']} />

                    <Input name='address' onChange={handleChange} label={t(tokens.page.apply.address)} className={styles['c3']} />
                    <Input name='addressPlus' onChange={handleChange} label={t(tokens.page.apply.addressPlus)} className={styles['c3']} />

                    <Input name='postalCode' onChange={handleChange} label={t(tokens.page.apply.postalCode)} className={styles['c3']} />
                    <Input name='city' onChange={handleChange} label={t(tokens.page.apply.city)} className={styles['c3']} />

                    <Input name='personalWebsite' onChange={handleChange} label={t(tokens.page.apply.personalWebsite)} className={styles['c6']} />

                    <Input name='linkedIn' onChange={handleChange} label={t(tokens.page.apply.linkedIn)} className={styles['c6']} />

                    <Input name='driverLicence' type='checkbox' label={t(tokens.page.apply.driverLicence)} className={styles['c2']} />
                    <Input name='disability' type='checkbox' label={t(tokens.page.apply.disability)} className={styles['c2']} />

                    <div className={cn(styles.divider, styles['c6'])}></div>
                    <h3 className={styles['c6']}>{t(tokens.page.apply.mySituation)}</h3>

                    <Select name='study' label={t(tokens.page.apply.study)} type='text' required values={['Bac', 'Bac+2']} className={styles['c2']} />
                    <Select name='currentDiploma' label={t(tokens.page.apply.currentDiploma)} type='text' values={['Bac', 'Bac+2']} className={styles['c2']} />
                    <Input name='school' onChange={handleChange} label={t(tokens.page.apply.school)} className={styles['c2']} />

                    <Input name='currentFormation' onChange={handleChange} label={t(tokens.page.apply.currentFormation)} className={styles['c6']} />

                    <Ckeditor label={t(tokens.page.apply.motivations)} className={styles['c6']} />

                    <Input name='coverLetter' onChange={handleChange} label={t(tokens.page.apply.coverLetter)} className={styles['c6']} />

                    <div className={cn(styles.divider, styles['c6'])}></div>

                    <Input name='createAccount' type='checkbox' label={t(tokens.page.apply.createAccount)} className={styles['c6']} />

                    <Button label={t(tokens.page.apply.submit)} onClick={handleSubmit} className={styles['c6']} />
                    <p className={cn(styles.legal, styles['c6'])}>{t(tokens.page.apply.legal)}</p>
                    <Button label={t(tokens.actions.back)} inverted icon={<FaArrowLeft />} />
                </div>
            </div>
            <div className={styles.right}>
                <p className={styles.subtitle}>{t(tokens.page.apply.myPhoto.label)}</p>
                <p>{t(tokens.page.apply.photoDescription)}</p>

                <div className={styles.avatarBlock}>
                    <div className={styles.avatar}></div>

                    <Input type="file" withoutIcon placeholder={<Trans
                        i18nKey={tokens.page.apply.myPhoto.placeholder}
                        components={{
                            multiLine: <span className={styles.multiLine} />,
                            main: <span className={styles.main} />,
                            grey: <span className={styles.grey} />,
                        }}
                    />} />
                </div>

                <div className={styles.divider}></div>

                <p className={styles.subtitle}>{t(tokens.page.apply.mySkills)}</p>
                <p>{t(tokens.page.apply.skillsDescription)}</p>
                <div className={styles.buttonContainer}>
                    {skills.map((skill) => <Button className={styles.btn} key={skill} label={skill} icon={<RxCross1 />} rightIcon />)}
                    <Button className={styles.btn} label={t(tokens.actions.add)} icon={<FaPlus />} inverted rightIcon />
                </div>
                <div className={styles.divider}></div>

                <p className={styles.subtitle}>{t(tokens.page.apply.myLanguages)}</p>
                <p>{t(tokens.page.apply.languageDescription)}</p>
                <div className={styles.buttonContainer}>
                    {languages.map((language) => <Button className={styles.btn} key={language} label={language} icon={<RxCross1 />} rightIcon />)}
                    <Button className={styles.btn} label={t(tokens.actions.add)} icon={<FaPlus />} inverted rightIcon />
                </div>
                <div className={styles.divider}></div>

                <p className={styles.subtitle}>{t(tokens.page.apply.experiences)}</p>
                <p>{t(tokens.page.apply.experiencesDescription)}</p>
                <div className={styles.buttonContainer}>
                    {experiences.map((experience) => <Button className={styles.btn} key={experience} label={experience} icon={<RxCross1 />} rightIcon />)}
                    <Button className={styles.btn} label={t(tokens.actions.add)} icon={<FaPlus />} inverted rightIcon />
                </div>
                <div className={styles.divider}></div>

                <p className={styles.subtitle}>{t(tokens.page.apply.documents)}</p>
                <p>{t(tokens.page.apply.documentsDescription)}</p>
                <div className={styles.documentRow}>
                    <p><span>{t(tokens.page.apply.cvField.title)}</span> ({t(tokens.page.apply.cvRequirements)})</p>
                    <Input type="file" placeholder={t(tokens.page.apply.cvField.placeholder)} />
                </div>
                <div className={styles.documentRow}>
                    <p><span>{t(tokens.page.apply.coverLetterField.label)}</span> ({t(tokens.page.apply.coverLetterRequirements)})</p>
                    <Input type="file" placeholder={t(tokens.page.apply.coverLetterField.placeholder)} />
                </div>
                <div className={styles.documentRow}>
                    <p><span>{t(tokens.page.apply.otherField.label)}</span> ({t(tokens.page.apply.otherRequirements)})</p>
                    <Input type="file" placeholder={t(tokens.page.apply.otherField.placeholder)} />
                </div>
            </div>
        </Container>
    </>
}

export default Apply;
