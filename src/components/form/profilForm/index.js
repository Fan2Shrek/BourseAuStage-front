import { FaArrowLeft,FaPlus } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { RxCross1 } from "react-icons/rx";
import dayjs from "dayjs";

import styles from './profilForm.module.scss';
import tokens from "../../../translations/tokens";
import Select from "../../../components/ui/atoms/Select";
import Input from "../../../components/ui/molecules/Input";
import cn from '../../../utils/classnames';
import Button from "../../../components/ui/atoms/Button";
import Ckeditor from "../../../components/ui/atoms/Ckeditor";
import apiClient from "../../../api/ApiClient";
import Calendar from "../../../components/ui/atoms/Calendar";

const ProfilForm = ({isApplyment = false}) => {
    const { t } = useTranslation();

    const [profil, setProfile] = useState(null);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const [studyLevels, setStudyLevels] = useState([]);

    const [skills, setSkills] = useState(['Skill 1', 'Skill 2', 'Skill 3']);
    const [languages, setLanguages] = useState(['Langage 1', 'Langage 2', 'Langage 3']);
    const [experiences, setExperiences] = useState(['Experience 1', 'Experience 2', 'Experience 3']);

    const handleChange = (e) => {
        console.log(e)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleDelete = (type, value) => {
        switch (type) {
            case 'skill':
                setSkills(skills.filter(skill => skill !== value));
                break;
            case 'language':
                setLanguages(languages.filter(language => language !== value));
                break;
            case 'experience':
                setExperiences(experiences.filter(experience => experience !== value));
                break;
            default:
                break;
        }
    }

    const handleSubmit = async () => {
        console.log(form)
        // const response = await apiClient.me.post(form);

        // setErrors(response)
    }

    useEffect(() => {
        apiClient.me.get().then(response => {
            setProfile(response);
        });

    }, []);

    useEffect(() => {
        apiClient.me.getStudyLevels().then(response => {
            setStudyLevels(response['hydra:member'].map(({name, id}) => ({name, value: id})));
        });

    }, []);

    const study = useMemo(() => {
        return profil && profil.studyLevel.replace('/api/study_levels/', '');
    }, [profil]);

    if (!profil) {
        return <></>;
    }

    return <div className={styles.content}>
        <div className={styles.left}>
            {isApplyment && <>
                <h2>{t(tokens.page.apply.title)}</h2>
                <div className={styles.divider}></div>
                </>
            }
            <p className={styles.subtitle}>{t(tokens.page.apply.youAre)}</p>
            <div className={styles.form}>
                <Select name='gender' label={t(tokens.page.apply.gender)} type='text' required values={['Homme', 'Femme', 'Non-binaire', 'Shrek']} className={styles['c2']} />
                <Input name='firstName' defaultValue={profil.firstName} onChange={handleChange} required label={t(tokens.page.apply.firstname)} className={styles['c2']} />
                <Input name='lastName' defaultValue={profil.lastName} onChange={handleChange} required label={t(tokens.page.apply.lastname)} className={styles['c2']} />

                <div className={styles['c3']}>
                    <Calendar onChange={(e) => (setForm({...form, birthdayAt: e['$d']}))} value={dayjs(profil.birthdayAt)} label={t(tokens.page.apply.birth)} required />
                </div>

                <Input name='phone' defaultValue={profil.phone} onChange={handleChange} required label={t(tokens.page.apply.phone)} className={styles['c3']} />

                <Input name='email' defaultValue={profil.email} onChange={handleChange} required label={t(tokens.page.apply.email)} className={styles['c3']} />
                <Input name='confirmEmail' onChange={handleChange} required label={t(tokens.page.apply.confirmEmail)} className={styles['c3']} />

                <Input name='address' defaultValue={profil.address} onChange={handleChange} label={t(tokens.page.apply.address)} className={styles['c3']} />
                <Input name='additionalAddress' defaultValue={profil.additionalAddress} onChange={handleChange} label={t(tokens.page.apply.addressPlus)} className={styles['c3']} />

                <Input name='postCode' defaultValue={profil.postCode} onChange={handleChange} label={t(tokens.page.apply.postalCode)} className={styles['c3']} />
                <Input name='city' defaultValue={profil.city} onChange={handleChange} label={t(tokens.page.apply.city)} className={styles['c3']} />

                <Input name='personalWebsite' defaultValue={profil.website} onChange={handleChange} label={t(tokens.page.apply.personalWebsite)} className={styles['c6']} />

                <Input name='linkedIn' defaultValue={profil.linkedIn} onChange={handleChange} label={t(tokens.page.apply.linkedIn)} className={styles['c6']} />

                <Input name='hasDriverLicence' defaultChecked={profil.driverLicence} type='checkbox' label={t(tokens.page.apply.driverLicence)} className={styles['c2']} />
                <Input name='isDisabled' defaultChecked={profil.disabled} type='checkbox' label={t(tokens.page.apply.disability)} className={styles['c2']} />

                <div className={cn(styles.divider, styles['c6'])}></div>
                <h3 className={styles['c6']}>{t(tokens.page.apply.mySituation)}</h3>

                <Select keyValue="value" defaultValue={study} onChange={handleChange} name='study' label={t(tokens.page.apply.study)} type='text' required values={studyLevels} className={styles['c2']} />
                <Input name='diploma' defaultValue={profil.diploma} label={t(tokens.page.apply.currentDiploma)} onChange={handleChange} className={styles['c2']} />
                <Input name='school' defaultValue={profil.school} onChange={handleChange} label={t(tokens.page.apply.school)} className={styles['c2']} />

                <Input name='formation' defaultValue={profil.formation} onChange={handleChange} label={t(tokens.page.apply.currentFormation)} className={styles['c6']} />
 
                {isApplyment && <>
                        <Ckeditor label={t(tokens.page.apply.motivations)} className={styles['c6']} />

                        <Input name='coverLetter' onChange={handleChange} label={t(tokens.page.apply.coverLetter)} className={styles['c6']} />
                        <div className={cn(styles.divider, styles['c6'])}></div>

                        <Input name='createAccount' type='checkbox' label={t(tokens.page.apply.createAccount)} className={styles['c6']} />

                    </>
                }
                <Button label={isApplyment ? t(tokens.page.apply.submit) : t(tokens.page.profil.update)} onClick={handleSubmit} className={styles['c6']} />
                <div className={styles['c6']}>
                    {Object.entries(errors).map(([name, error]) => <p className={styles.errors}>{error}</p>)}
                </div>
                {isApplyment && <>
                        <p className={cn(styles.legal, styles['c6'])}>{t(tokens.page.apply.legal)}</p>
                        <Button label={t(tokens.actions.back)} inverted icon={<FaArrowLeft />} />
                    </>
                }
            </div>
        </div>
        <div className={styles.right}>
            <p className={styles.subtitle}>{t(tokens.page.apply.myPhoto.label)}</p>
            <p>{t(tokens.page.apply.photoDescription)}</p>

            <div className={styles.avatarBlock}>
                <div className={styles.avatar}></div>

                <Input onChange={handleChange} name='profilPicture' type="file" withoutIcon placeholder={<Trans
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
                {skills.map((skill) => <Button onClick={() => handleDelete('skill', skill)} className={styles.btn} key={skill} label={skill} icon={<RxCross1 />} rightIcon />)}
                <Button className={styles.btn} label={t(tokens.actions.add)} icon={<FaPlus />} inverted rightIcon />
            </div>
            <div className={styles.divider}></div>

            <p className={styles.subtitle}>{t(tokens.page.apply.myLanguages)}</p>
            <p>{t(tokens.page.apply.languageDescription)}</p>
            <div className={styles.buttonContainer}>
                {languages.map((language) => <Button onClick={() => handleDelete('language', language)} className={styles.btn} key={language} label={language} icon={<RxCross1 />} rightIcon />)}
                <Button className={styles.btn} label={t(tokens.actions.add)} icon={<FaPlus />} inverted rightIcon />
            </div>
            <div className={styles.divider}></div>

            <p className={styles.subtitle}>{t(tokens.page.apply.experiences)}</p>
            <p>{t(tokens.page.apply.experiencesDescription)}</p>
            <div className={styles.buttonContainer}>
                {experiences.map((experience) => <Button onClick={() => handleDelete('experience', experience)} className={styles.btn} key={experience} label={experience} icon={<RxCross1 />} rightIcon />)}
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
    </div>
}

export default ProfilForm;
