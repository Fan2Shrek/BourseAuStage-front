import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { Trans, useTranslation } from "react-i18next";
import { RxCross1 } from "react-icons/rx";
import dayjs from "dayjs";

import styles from './ProfilForm.module.scss';
import tokens from "../../../translations/tokens";
import { UserContext } from "../../../context/UserContext";
import { NotificationContext } from "../../../context/NotificationContext";
import UserRoleEnum from "../../../enum/UserRoleEnum";
import Select from "../../ui/atoms/Select";
import Input from "../../ui/molecules/Input";
import cn from '../../../utils/classnames';
import Button from "../../ui/atoms/Button";
import Ckeditor from "../../ui/atoms/Ckeditor";
import apiClient from "../../../api/ApiClient";
import Calendar from "../../ui/atoms/Calendar";
import getPicturePath from '../../../utils/getPicturePath'
import Modal from "../../ui/atoms/Modal";
import path from "../../../path";

const ProfilForm = ({ isApplyment = false, isCreation = false }) => {
    const { t } = useTranslation();
    const { user, setUser } = useContext(UserContext);
    const { id } = useParams();
    const { addNotification } = useContext(NotificationContext)
    const navigate = useNavigate();

    const [form, setForm] = useState({
        gender: "M",
    });
    const [errors, setErrors] = useState({});

    const [skills, setSkills] = useState([]);
    const [currentSelection, setCurrentSelection] = useState({});

    const [activitiesList, setActivitiesList] = useState([]);
    const [studyLevels, setStudyLevels] = useState([]);
    const [skillsList, setSkillsList] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [experiences, setExperiences] = useState([]);

    const [displayModal, setDisplayModal] = useState('');

    const [isStudent, isCollaborator] = useMemo(() => [
        isCreation || (user && user.roles.includes(UserRoleEnum.STUDENT)),
        user && user.roles.includes(UserRoleEnum.COLLABORATOR),
    ], [user]);

    const handleChange = useCallback((e) => {
        setForm(form => ({
            ...form,
            [e.target.name]: e.target.value
        }));
    }, [setForm])

    const handleDelete = useCallback((type, value) => {
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
    }, [skills, setSkills, languages, setLanguages, experiences, setExperiences])

    const handleSubmit = useCallback(() => {
        if (form.email !== null) {
            if (form.email !== form.confirmEmail) {
                setErrors({ email: t(tokens.page.apply.errors.emailsNotMatch) });
                addNotification({ type: 'danger', message: t(tokens.page.apply.errors.emailsNotMatch) });

                return;
            }
        }

        const endpoint =
            (isCreation && apiClient.student.register.bind(apiClient.student))
            || (isApplyment && console.log)
            || apiClient.me.post.bind(apiClient.me)
            ;

        const formData = new FormData();

        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });

        if (isStudent) {
            formData.append('experiences', JSON.stringify(experiences));
            formData.append('languages', JSON.stringify(languages));
            formData.append('skills', JSON.stringify(skills));
        }

        if (isCreation) {
            if (form.password !== form.confirmPassword) {
                addNotification({ type: 'danger', message: t(tokens.page.createStudent.wrongPassword) })

                return;
            }
        }

        endpoint(formData)
            .then(response => {
                const errs = Object.entries(response)

                if (errs.length > 0) {
                    setErrors(response)
                    Object.values(response).forEach(error => {
                        addNotification({ type: 'danger', message: error });
                    })
                } else {
                    setErrors({});

                    if (isCreation) {
                        navigate(path.confirmation)

                        return;
                    }

                    apiClient.me.get().then(usr => {
                        setUser(usr, true);
                    });
                }
            });

        if (isApplyment) {
            const data = {
                student: `api/students/${user.id}`,
                offer: `api/offers/${id}`,
            };

            apiClient.request.post(data)
                .then(response => {
                    if (response.id) {
                        addNotification({ type: 'success', message: t(tokens.page.apply.notifications.success) });
                    } else {
                        addNotification({ type: 'danger', message: t(tokens.page.apply.notifications.error) });
                    }
                })
        }
    }, [form, id, user, experiences, languages, skills, t, isStudent, isApplyment, setErrors, addNotification, setUser])

    useEffect(() => {
        if (isStudent && !isCreation) {
            setSkills(user.skills);
            setLanguages(user.languages);
            setExperiences(user.experiences);
        }
    }, [user, isStudent]);

    useEffect(() => {
        apiClient.studyLevel.getAll().then(response => {
            setStudyLevels(response['hydra:member'].map(({ name, id }) => ({ name, value: id })));
        });

        apiClient.skill.getAll().then(response => {
            setSkillsList(response['hydra:member'].map((el) => ({ ...el, value: el.id })));
        });
    }, []);

    const study = useMemo(() => {
        if (isStudent && !isCreation) {
            return user.studyLevel && user.studyLevel.replace('/api/study_levels/', '');
        }
    }, [user, isStudent]);

    const sexes = useMemo(() => [{
        value: 'M',
        name: t(tokens.sexes.man)
    }, {
        value: 'F',
        name: t(tokens.sexes.woman)
    }, {
        value: 'NB',
        name: t(tokens.sexes.nonBinary)
    }], [t]);

    const btnLabel = useMemo(() =>
        (isCreation && tokens.page.createStudent.submit)
        || (isApplyment && tokens.page.apply.submit)
        || tokens.actions.update
        , []);

    if (isApplyment && (!user || !isStudent)) {
        return <div className={styles.notStudent}>
            <h2>{t(tokens.page.apply.notStudent)}</h2>
        </div>;
    }

    if (!user && !isCreation) {
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
                <Select name='gender' defaultValue={user?.gender} onChange={handleChange} label={t(tokens.page.apply.gender)} type='text' required values={sexes} className={styles['c2']} />
                <Input name='firstName' defaultValue={user?.firstName} errored={!!errors?.firstName} onChange={handleChange} required label={t(tokens.page.apply.firstname)} className={styles['c2']} />
                <Input name='lastName' defaultValue={user?.lastName} errored={!!errors?.lastName} onChange={handleChange} required label={t(tokens.page.apply.lastname)} className={styles['c2']} />

                {isCollaborator && <Input name='jobTitle' defaultValue={user?.jobTitle} errored={!!errors?.jobTitle} onChange={handleChange} required label={t(tokens.entities.collaborator.jobTitle)} className={styles['c3']} />}

                {isStudent && <div className={styles['c3']}>
                    <Calendar onChange={(e) => (setForm({ ...form, birthdayAt: dayjs(e['$d']) }))} value={dayjs(user?.birthdayAt)} label={t(tokens.page.apply.birth)} required />
                </div>}

                <Input name='phone' defaultValue={user?.phone} errored={!!errors?.phone} onChange={handleChange} required label={t(tokens.page.apply.phone)} className={styles['c3']} />

                <Input name='email' defaultValue={user?.email} errored={!!errors?.email} onChange={handleChange} required label={t(tokens.page.apply.email)} className={styles['c3']} />
                <Input name='confirmEmail' errored={!!errors?.confirmEmail} onChange={handleChange} required label={t(tokens.page.apply.confirmEmail)} className={styles['c3']} />

                <Input name='postCode' defaultValue={user?.postCode} errored={!!errors?.postCode} onChange={handleChange} label={t(tokens.page.apply.postalCode)} required className={styles['c3']} />
                <Input name='city' defaultValue={user?.city} errored={!!errors?.city} onChange={handleChange} label={t(tokens.page.apply.city)} required className={styles['c3']} />

                <Input name='address' defaultValue={user?.address} errored={!!errors?.address} onChange={handleChange} label={t(tokens.page.apply.address)} required className={styles['c3']} />
                <Input name='additionalAddress' defaultValue={user.additionalAddress ?? ''} errored={!!errors?.additionalAddress} onChange={handleChange} label={t(tokens.page.apply.addressPlus)} className={styles['c3']} />

                {isStudent && <>
                    {isCreation ? <>
                        <Input type='password' name='password' required errored={!!errors?.password} onChange={handleChange} label={t(tokens.page.createStudent.password)} className={styles['c3']} />
                        <Input type='password' name='confirmPassword' required errored={!!errors?.confirmPassword} onChange={handleChange} label={t(tokens.page.createStudent.confirmPassword)} className={styles['c3']} />
                        <Select defaultValue={study} placeholder={study ?? t(tokens.page.createStudent.study.placeholder)} onChange={handleChange} name='study' label={t(tokens.page.apply.study)} type='text' required values={studyLevels} className={styles['c6']} />
                    </>
                        :
                        <>
                            <Input name='website' defaultValue={user.website ?? ''} errored={!!errors?.website} onChange={handleChange} label={t(tokens.page.apply.personalWebsite)} className={styles['c6']} />
                            <Input name='linkedIn' defaultValue={user.linkedIn ?? ''} errored={!!errors?.linkedIn} onChange={handleChange} label={t(tokens.page.apply.linkedIn)} className={styles['c6']} />

                            <Input id='hasDriverLicence' errored={!!errors?.hasDriverLicence} onChange={(value) => handleChange({ target: { name: 'hasDriverLicence', value } })} defaultChecked={user?.driverLicence} type='checkbox' label={t(tokens.page.apply.driverLicence)} className={styles['c2']} />
                            <Input id='isDisabled' errored={!!errors?.isDisabled} onChange={(value) => handleChange({ target: { name: 'isDisabled', value } })} defaultChecked={user?.disabled} type='checkbox' label={t(tokens.page.apply.disability)} className={styles['c2']} />
                        </>
                    }
                </>}

                {isStudent && !isCreation && <>
                    <div className={cn(styles.divider, styles['c6'])}></div>
                    <h3 className={styles['c6']}>{t(tokens.page.apply.mySituation)}</h3>

                    <Select defaultValue={study} onChange={handleChange} name='study' label={t(tokens.page.apply.study)} type='text' required values={studyLevels} className={styles['c2']} />
                    <Input name='diploma' defaultValue={user?.diploma ?? ''} errored={!!errors?.diploma} label={t(tokens.page.apply.currentDiploma)} onChange={handleChange} className={styles['c2']} />
                    <Input name='school' defaultValue={user?.school ?? ''} errored={!!errors?.school} onChange={handleChange} label={t(tokens.page.apply.school)} className={styles['c2']} />

                    <Input name='formation' defaultValue={user?.formation ?? ''} errored={!!errors?.formation} onChange={handleChange} label={t(tokens.page.apply.currentFormation)} className={styles['c6']} />
                </>}

                {isApplyment && <>
                    <Ckeditor label={t(tokens.page.apply.motivations)} className={styles['c6']} />

                    <Input name='coverLetter' errored={!!errors?.coverLetter} onChange={handleChange} label={t(tokens.page.apply.coverLetter)} className={styles['c6']} />
                    <div className={cn(styles.divider, styles['c6'])}></div>

                    <Input name='createAccount' errored={!!errors?.createAccount} type='checkbox' label={t(tokens.page.apply.createAccount)} className={styles['c6']} />
                </>}

                <Button label={t(btnLabel)} onClick={handleSubmit} className={styles['c6']} />
                {isApplyment && <>
                    <p className={cn(styles.legal, styles['c6'])}>{t(tokens.page.apply.legal)}</p>
                    <Button
                        label={t(tokens.actions.back)}
                        icon={<FaArrowLeft />}
                        inverted
                        transparent
                        redirectTo={path.offer.replace(':id', id)}
                    />
                </>
                }
            </div>
        </div>
        {!isCreation && <div className={styles.right}>
            <p className={styles.subtitle}>{t(tokens.page.apply.myPhoto.label)}</p>
            <p>{t(tokens.page.apply.photoDescription)}</p>

            <div className={styles.avatarBlock}>
                <img
                    alt={user?.firstName}
                    src={user?.avatar
                        ? getPicturePath(`img/user/${user?.avatar}`)
                        : '/images/avatar.png'
                    }
                    className={styles.avatar}
                />

                <Input
                    onChange={(e) => setForm({ ...form, avatar: e.target.files[0] })}
                    name='avatar'
                    type="file"
                    withoutIcon
                    placeholder={<Trans
                        i18nKey={tokens.page.apply.myPhoto.placeholder}
                        components={{
                            multiLine: <span className={styles.multiLine} />,
                            main: <span className={styles.main} />,
                            grey: <span className={styles.grey} />,
                        }}
                    />}
                    errored={!!errors?.avatar}
                />
            </div>

            {isStudent && <>
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
                    <Input
                        type="file"
                        onChange={(e) => setForm({ ...form, cv: e.target.files[0] })}
                        placeholder={t(tokens.page.apply.cvField.placeholder)}
                        className={styles.fullInputFile}
                    />
                    <span>{user?.cv}</span>
                </div>
            </>}

            {isApplyment && <>
                <div className={styles.documentRow}>
                    <p><span>{t(tokens.page.apply.coverLetterField.label)}</span> ({t(tokens.page.apply.coverLetterRequirements)})</p>
                    <Input
                        type="file"
                        placeholder={t(tokens.page.apply.coverLetterField.placeholder)}
                        className={styles.fullInputFile}
                    />
                    <span>{user?.cv}</span>
                </div>
                <div className={styles.documentRow}>
                    <p><span>{t(tokens.page.apply.otherField.label)}</span> ({t(tokens.page.apply.otherRequirements)})</p>
                    <Input
                        type="file"
                        placeholder={t(tokens.page.apply.otherField.placeholder)}
                        className={styles.fullInputFile}
                    />
                    <span>{user?.cv}</span>
                </div>
            </>}
        </div>}
        <Modal
            title={t(tokens.page.apply.add[displayModal])}
            active={displayModal}
            setDisplayModal={setDisplayModal}
        >
            <div className={styles.modalContent}>
                {displayModal === 'experience' && <>
                    <input onChange={(e) => setCurrentSelection({ name: e.target.value })} value={currentSelection && currentSelection.name} />
                </>}
                {displayModal === 'language' && <>
                    <input onChange={(e) => setCurrentSelection({ ...currentSelection, name: e.target.value })} value={currentSelection.name || ''} />
                    <input onChange={(e) => setCurrentSelection({ ...currentSelection, level: e.target.value })} value={currentSelection.level || ''} />
                </>}
                {displayModal === 'skill' && <>
                    <Select placeholder={t(tokens.page.apply.addSkill)} onChange={(e) => setCurrentSelection({ value: parseInt(e.target.value, 10) })} values={skillsList.filter(s => !skills.includes(s))} />
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
