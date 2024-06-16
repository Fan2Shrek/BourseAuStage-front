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
import getPicturePath from '../../../utils/getPicturePath'
import Modal from "../../ui/atoms/Modal";

const ProfilForm = ({isApplyment = false}) => {
    const { t } = useTranslation();

    const [profil, setProfile] = useState(null);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const [studyLevels, setStudyLevels] = useState([]);
    const [currentSelection, setCurrentSelection] = useState({});
    const [skills, setSkills] = useState([]);
    
    const [skillsList, setSkillsList] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [experiences, setExperiences] = useState([]);

    const [displayModal, setDisplayModal] = useState('');

    const handleChange = (e) => {
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
        if (form.email !== null) {
            if (form.email !== form.confirmEmail) {
                setErrors({email: t(tokens.page.apply.errors.emailsNotMatch)});
                return;
            }
        }

        const formData = new FormData();
        
        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });
            
        formData.append('experiences', JSON.stringify(experiences));
        formData.append('languages', JSON.stringify(languages));
        formData.append('skills', JSON.stringify(skills));

        const response = await apiClient.me.post(formData);

        setErrors(response)
    }

    useEffect(() => {
        apiClient.me.get().then(response => {
            setProfile(response);

            setSkills(response.skills);
            setLanguages(response.languages);
            setExperiences(response.experiences);
        });

    }, []);

    useEffect(() => {
        apiClient.me.getStudyLevels().then(response => {
            setStudyLevels(response['hydra:member'].map(({name, id}) => ({name, value: id})));
        });

    }, []);

    useEffect(() => {
        apiClient.skill.getAll().then(response => {
            setSkillsList(response['hydra:member'].map((el) => ({...el, value: el.id})));
        });

    }, []);

    const study = useMemo(() => {
        return profil && profil.studyLevel.replace('/api/study_levels/', '');
    }, [profil]);

    const sexes = useMemo(() => [{
        value: 'M',
        name: t(tokens.sexes.man)
    }, {
        value: 'F',
        name: t(tokens.sexes.woman)
    },  {
        value: 'NB',
        name: t(tokens.sexes.nonBinary)
    }], [t]);

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
                <Select name='gender' defaultValue={profil.gender} onChange={handleChange} label={t(tokens.page.apply.gender)} type='text' required values={sexes} className={styles['c2']} />
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

                <Input name='website' defaultValue={profil.website} onChange={handleChange} label={t(tokens.page.apply.personalWebsite)} className={styles['c6']} />

                <Input name='linkedIn' defaultValue={profil.linkedIn} onChange={handleChange} label={t(tokens.page.apply.linkedIn)} className={styles['c6']} />

                <Input onChange={(value) => handleChange({target: {name: 'hasDriverLicence', value}})} defaultChecked={profil.driverLicence} type='checkbox' label={t(tokens.page.apply.driverLicence)} className={styles['c2']} />
                <Input onChange={(value) => handleChange({target: {name: 'isDisabled', value}})} defaultChecked={profil.disabled} type='checkbox' label={t(tokens.page.apply.disability)} className={styles['c2']} />

                <div className={cn(styles.divider, styles['c6'])}></div>
                <h3 className={styles['c6']}>{t(tokens.page.apply.mySituation)}</h3>

                <Select defaultValue={study} onChange={handleChange} name='study' label={t(tokens.page.apply.study)} type='text' required values={studyLevels} className={styles['c2']} />
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
                <div className={styles.avatar}><img alt={profil.firstName} width={70} height={70} src={getPicturePath(`img/user/${profil.profilPicture}`)} /></div>

                <Input onChange={(e) => setForm({...form, profilPicture: e.target.files[0]})} name='profilPicture' type="file" withoutIcon placeholder={<Trans
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
                {skills.map((skill) => <Button onClick={() => handleDelete('skill', skill)} className={styles.btn} key={skill} label={skill.name} icon={<RxCross1 />} rightIcon />)}
                {skills.length < 10 && <Button onClick={() => setDisplayModal('skill')} className={styles.btn} label={t(tokens.actions.add)} icon={<FaPlus />} inverted rightIcon />}
            </div>
            <div className={styles.divider}></div>

            <p className={styles.subtitle}>{t(tokens.page.apply.myLanguages)}</p>
            <p>{t(tokens.page.apply.languageDescription)}</p>
            <div className={styles.buttonContainer}>
                {languages.map((language) => <Button onClick={() => handleDelete('language', language)} className={styles.btn} key={language} label={`${language.name}-${language.level}`} icon={<RxCross1 />} rightIcon />)}
                <Button onClick={() => setDisplayModal('language')} className={styles.btn} label={t(tokens.actions.add)} icon={<FaPlus />} inverted rightIcon />
            </div>
            <div className={styles.divider}></div>

            <p className={styles.subtitle}>{t(tokens.page.apply.experiences)}</p>
            <p>{t(tokens.page.apply.experiencesDescription)}</p>
            <div className={styles.buttonContainer}>
                {experiences.map((experience) => <Button onClick={() => handleDelete('experience', experience)} className={styles.btn} key={experience} label={experience.name} icon={<RxCross1 />} rightIcon />)}
                <Button onClick={() => setDisplayModal('experience')} className={styles.btn} label={t(tokens.actions.add)} icon={<FaPlus />} inverted rightIcon />
            </div>
            <div className={styles.divider}></div>

            <p className={styles.subtitle}>{t(tokens.page.apply.documents)}</p>
            <p>{t(tokens.page.apply.documentsDescription)}</p>
            <div className={styles.documentRow}>
                <p><span>{t(tokens.page.apply.cvField.title)}</span> ({t(tokens.page.apply.cvRequirements)})</p>
                <Input type="file" onChange={(e) => setForm({...form, cv: e.target.files[0]})} placeholder={t(tokens.page.apply.cvField.placeholder)} />
                <span>{profil.cv}</span>
            </div>
            {isApplyment && <>
                <div className={styles.documentRow}>
                    <p><span>{t(tokens.page.apply.coverLetterField.label)}</span> ({t(tokens.page.apply.coverLetterRequirements)})</p>
                    <Input type="file" placeholder={t(tokens.page.apply.coverLetterField.placeholder)} />
                    <span>{profil.cv}</span>
                </div>
                <div className={styles.documentRow}>
                    <p><span>{t(tokens.page.apply.otherField.label)}</span> ({t(tokens.page.apply.otherRequirements)})</p>
                    <Input type="file" placeholder={t(tokens.page.apply.otherField.placeholder)} />
                    <span>{profil.cv}</span>
                </div>
            </>}
        </div>
        <Modal
            title={t(tokens.page.apply.add[displayModal])}
            active={displayModal}
            setDisplayModal={setDisplayModal}
        >
            <div className={styles.modalContent}>
                {displayModal === 'experience' && <>
                    <input onChange={(e) => setCurrentSelection({name: e.target.value})} value={currentSelection && currentSelection.name} />
                </>}
                {displayModal === 'language' && <>
                    <input onChange={(e) => setCurrentSelection({...currentSelection, name: e.target.value})} value={currentSelection.name || ''} />
                    <input onChange={(e) => setCurrentSelection({...currentSelection, level: e.target.value})} value={currentSelection.level || ''} />
                </>}
                {displayModal === 'skill' && <>
                    <Select placeholder={t(tokens.page.apply.addSkill)} onChange={(e) => setCurrentSelection({value: parseInt(e.target.value, 10)})} values={skillsList.filter(s => !skills.includes(s))} />
                </>}
                <Button label={t(tokens.actions.add)} onClick={() => {
                    switch (displayModal) {
                        case 'skill':
                            setSkills([...skills, ...skillsList.filter(el => el.value === currentSelection.value)]);
                            break;
                        case 'language':
                            setLanguages([...languages, currentSelection]);
                            break;
                        case 'experience':
                            setExperiences([...experiences, currentSelection]);
                            break;
                        default:
                            break;
                    }

                    setCurrentSelection('');
                    setDisplayModal('');
                }} />
            </div>
        </Modal>
    </div>
}

export default ProfilForm;
