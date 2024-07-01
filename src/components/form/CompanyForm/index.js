import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { RxCross1 } from "react-icons/rx";

import styles from './CompanyForm.module.scss';
import tokens from "../../../translations/tokens";
import { UserContext } from "../../../context/UserContext";
import { NotificationContext } from "../../../context/NotificationContext";
import Select from "../../ui/atoms/Select";
import Input from "../../ui/molecules/Input";
import cn from '../../../utils/classnames';
import Button from "../../ui/atoms/Button";
import Ckeditor from "../../ui/atoms/Ckeditor";
import apiClient from "../../../api/ApiClient";
import getPicturePath from '../../../utils/getPicturePath'
import Modal from "../../ui/atoms/Modal";
import Loader from "../../ui/atoms/Loader";
import Calendar from "../../ui/atoms/Calendar";
import dayjs from "dayjs";

const CompanyForm = () => {
    const { t } = useTranslation();
    const { user, setUser } = useContext(UserContext);
    const { addNotification } = useContext(NotificationContext)

    const [isFetching, setIsFetching] = useState(true);
    const [company, setCompany] = useState(null);
    const [categories, setCategories] = useState([]);
    const [activitiesList, setActivitiesList] = useState([]);
    const [activities, setActivities] = useState([]);
    const [companyPictures, setCompanyPictures] = useState([]);

    const [reload, setReload] = useState(true);
    const [displayModal, setDisplayModal] = useState(false);
    const [currentSelection, setCurrentSelection] = useState({});
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (reload) {
            setIsFetching(true)
            apiClient.company.get(user.company.id)
                .then(response => {
                    setReload(false)
                    setIsFetching(false)

                    if (response.status === 404) {
                        return
                    }

                    setCompany(response)
                    setActivities(response.activities.map(({ name, id }) => ({ name, value: id })))
                })

            apiClient.company.getPictures(user.company.id)
                .then(response => {
                    if (response.status === 404) {
                        return;
                    }

                    setCompanyPictures(response['hydra:member'] ?? []);
                })
        }
    }, [user, reload])

    useEffect(() => {
        apiClient.category.getAll()
            .then(response => {
                if (response.status === 404) {
                    return
                }

                setCategories((response['hydra:member'] ?? []).map(({ name, id }) => ({ name, value: id })))
            })

        apiClient.activity.getAll()
            .then(response => {
                if (response.status === 404) {
                    return
                }
                setActivitiesList((response['hydra:member'] ?? []).map(({ name, id }) => ({ name, value: id })))
            })
    }, [])

    const handleChange = useCallback((e) => {
        setForm(form => ({
            ...form,
            [e.target.name]: e.target.value
        }));
    }, [setForm])

    const handleDelete = useCallback(value => {
        setActivities(activities => activities.filter(activity => activity !== value))
    }, [setActivities])

    const handleSubmit = useCallback(e => {
        e.preventDefault()

        const formData = new FormData()

        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });

        formData.append('activities', JSON.stringify(activities.map(activity => activity.value)));

        apiClient.company.update(company.id, formData)
            .then(response => {
                if (!response.id) {
                    const errs = Object.entries(response)

                    if (errs.length > 0) {
                        setErrors(response)
                        Object.values(response).forEach(error => {
                            addNotification({ type: 'danger', message: error })
                        })
                    }

                    return
                }

                setErrors({})
                addNotification({ type: 'success', message: t(tokens.form.company.notifications.success) })
                setReload(true)
                apiClient.me.get().then(usr => {
                    setUser(usr, false, true);
                });
            })
    }, [company, form, addNotification, t, activities, setUser])

    const activitiesAvailable = useMemo(() => {
        return activitiesList.filter(({ value }) => !activities.some(activity => activity.value === value))
    }, [activities, activitiesList])

    const [firstImage, secondImage, thirdImage, fourthImage, fifthImage] = useMemo(() => {
        return [
            companyPictures.find(picture => picture.position === 1),
            companyPictures.find(picture => picture.position === 2),
            companyPictures.find(picture => picture.position === 3),
            companyPictures.find(picture => picture.position === 4),
            companyPictures.find(picture => picture.position === 5),
        ]
    }, [companyPictures])

    if (isFetching || !company) {
        return <div className={styles.load}>
            <Loader className={styles.loader} />
        </div>
    }

    return <>
        <Modal
            title={t(tokens.page.register.modal.title)}
            active={displayModal}
            setDisplayModal={setDisplayModal}
        >
            <div className={styles.modal}>
                <Select
                    defaultValue=""
                    placeholder={t(tokens.page.register.form.activitiesPlaceholder)}
                    values={activitiesAvailable}
                    onChange={(e) => setCurrentSelection({ value: parseInt(e.target.value, 10) })}
                />
                <Button label={t(tokens.actions.add)} onClick={e => {
                    const selected = [...activities, ...activitiesList.filter(el => el.value === currentSelection.value)]
                    const others = activitiesList.filter(s => !selected.includes(s))

                    setActivities(selected)
                    setCurrentSelection(others.length > 0 ? { value: others[0].value } : '')
                    setDisplayModal(false)
                }} />
            </div>
        </Modal>
        <form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
            <Input
                name="name"
                label={t(tokens.entities.company.name)}
                defaultValue={company.name ?? ''}
                required
                errored={!!errors.name || false}
                onChange={handleChange}
                className={styles.r2}
            />
            <Select
                name='category'
                label={t(tokens.entities.company.category)}
                values={categories}
                defaultValue={company.category ? company.category.id : undefined}
                placeholder={t(tokens.page.register.form.categoryPlaceholder)}
                required
                onChange={handleChange}
                className={styles.r2}
            />
            <Input
                name="siretNumber"
                label={t(tokens.entities.company.siretNumber)}
                defaultValue={company.siretNumber ?? ''}
                required
                errored={errors.siretNumber || false}
                onChange={handleChange}
                className={styles.r3}
            />
            <Input
                name="legalStatus"
                label={t(tokens.entities.company.legalStatus)}
                defaultValue={company.legalStatus ?? ''}
                errored={errors.legalStatus || undefined}
                onChange={handleChange}
                className={styles.r6}
            />
            <div className={styles.r3}>
                <Calendar
                    name="age"
                    label={t(tokens.entities.company.age.label)}
                    value={dayjs(company.age ?? null)}
                    errored={errors.age || false}
                    onChange={e => setForm({ ...form, age: e === null ? e : e['$d'] })}
                />
            </div>
            <Input
                name="effective"
                label={t(tokens.entities.company.effective)}
                defaultValue={company.effective ?? ''}
                errored={errors.effective || false}
                onChange={({ target: { value } }) => setForm({ ...form, effective: value === '' ? null : value })}
                className={styles.r6}
            />
            <Input
                name="phone"
                label={t(tokens.entities.company.phone)}
                defaultValue={company.phone ?? ''}
                errored={errors.phone || false}
                onChange={handleChange}
                className={styles.r3}
            />
            <Input
                name="turnover"
                label={t(tokens.entities.company.turnover)}
                defaultValue={company.turnover ?? ''}
                errored={errors.turnover || false}
                onChange={handleChange}
                className={styles.r3}
            />
            <Input
                name="openingTime"
                label={t(tokens.entities.company.openingTime)}
                defaultValue={company.openingTime ?? ''}
                errored={errors.openingTime || false}
                onChange={handleChange}
                className={styles.r3}
            />
            <div className={cn(styles.activities, styles.r1)}>
                <p>{t(tokens.entities.company.activities)}<span className={styles.required}>*</span></p>
                <div className={styles.selected}>
                    {activities.map(activity => <Button
                        type="button"
                        key={activity.name}
                        label={activity.name}
                        icon={<RxCross1 />}
                        rightIcon
                        onClick={e => {
                            e.preventDefault()
                            handleDelete(activity)
                        }}
                    />)}
                    <Button
                        key="add"
                        type="button"
                        inverted
                        icon={<FaPlus />}
                        rightIcon
                        onClick={e => {
                            e.preventDefault()
                            setDisplayModal(true)
                        }}
                        className={cn({ [styles.errored]: errors.activities || false })}
                    />
                </div>
            </div>
            <Ckeditor
                placeholder={t(tokens.entities.company.presentation)}
                defaultValue={company.presentation || ""}
                onChange={content => setForm({ ...form, presentation: content })}
                className={styles.r1}
            />
            <Input
                name="address"
                label={t(tokens.entities.company.address)}
                defaultValue={company.address ?? ''}
                required
                errored={errors.address || false}
                onChange={handleChange}
                className={styles.r2}
            />
            <Input
                name="city"
                label={t(tokens.entities.company.city)}
                defaultValue={company.city ?? ''}
                required
                errored={errors.city || false}
                onChange={handleChange}
                className={styles.r3}
            />
            <Input
                name="postCode"
                label={t(tokens.entities.company.postCode)}
                defaultValue={company.postCode ?? ''}
                required
                errored={errors.postCode || false}
                onChange={handleChange}
                className={styles.r6}
            />
            <Input
                name="additionalAddress"
                label={t(tokens.entities.company.additionalAddress)}
                defaultValue={company.additionalAddress ?? ''}
                errored={errors.additionalAddress || false}
                onChange={handleChange}
                className={styles.r2}
            />
            <Input
                name="socialLink"
                label={t(tokens.entities.company.socialLink)}
                defaultValue={company.socialLink ?? ''}
                errored={errors.socialLink || false}
                onChange={handleChange}
                className={styles.r1}
            />
            <Input
                name="twitterLink"
                label={t(tokens.entities.company.twitterLink)}
                defaultValue={company.twitterLink ?? ''}
                errored={errors.twitterLink || false}
                onChange={handleChange}
                className={styles.r2}
            />
            <Input
                name="linkedinLink"
                label={t(tokens.entities.company.linkedinLink)}
                defaultValue={company.linkedInLink ?? ''}
                errored={errors.linkedinLink || false}
                onChange={handleChange}
                className={styles.r2}
            />
            <Input
                name="instagramLink"
                label={t(tokens.entities.company.instagramLink)}
                defaultValue={company.instagramLink ?? ''}
                errored={errors.instagramLink || false}
                onChange={handleChange}
                className={styles.r2}
            />
            <Input
                name="facebookLink"
                label={t(tokens.entities.company.facebookLink)}
                defaultValue={company.facebookLink ?? ''}
                errored={errors.facebookLink || false}
                onChange={handleChange}
                className={styles.r2}
            />
            <div className={cn(styles.r2, styles.fileBlock)}>
                {company.logo
                    ? <img
                        alt={`${t(tokens.entities.company.logo)} ${company.name}`}
                        src={getPicturePath(company.logo)}
                        className={cn(styles.preview, styles.logo)}
                    />
                    : <div className={cn(styles.preview, styles.logo)} />
                }
                <Input
                    name='logo'
                    type="file"
                    placeholder={t(tokens.entities.company.logo)}
                    errored={errors.logo || false}
                    onChange={(e) => {
                        setForm({ ...form, logo: e.target.files[0] })
                    }}
                    className={styles.r1}
                />
            </div>
            <div className={cn(styles.r3, styles.fileBlock)}>
                {company.logoIcon
                    ? <img
                        alt={`${t(tokens.entities.company.logoIcon)} ${company.name}`}
                        src={getPicturePath(company.logoIcon)}
                        className={cn(styles.preview, styles.logo)}
                    />
                    : <div className={cn(styles.preview, styles.logo)} />
                }
                <Input
                    name='logoIcon'
                    type="file"
                    placeholder={t(tokens.entities.company.logoIcon)}
                    errored={errors.logoIcon || false}
                    onChange={(e) => setForm({ ...form, logoIcon: e.target.files[0] })}
                    className={styles.r1}
                />
            </div>
            <div className={cn(styles.r3, styles.fileBlock)}>
                {firstImage
                    ? <img
                        alt={`${t(tokens.entities.company.firstImage)} ${company.name}`}
                        src={getPicturePath(firstImage.path)}
                        className={styles.preview}
                    />
                    : <div className={styles.preview} />
                }
                <Input
                    name='firstImage'
                    type="file"
                    placeholder={t(tokens.entities.company.firstImage)}
                    errored={errors.firstImage || false}
                    onChange={(e) => setForm({ ...form, firstImage: e.target.files[0] })}
                    className={styles.r1}
                />
            </div>
            <div className={cn(styles.r3, styles.fileBlock)}>
                {secondImage
                    ? <img
                        alt={`${t(tokens.entities.company.secondImage)} ${company.name}`}
                        src={getPicturePath(secondImage.path)}
                        className={styles.preview}
                    />
                    : <div className={styles.preview} />
                }
                <Input
                    name='secondImage'
                    type="file"
                    placeholder={t(tokens.entities.company.secondImage)}
                    errored={errors.secondImage || false}
                    onChange={(e) => setForm({ ...form, secondImage: e.target.files[0] })}
                    className={styles.r1}
                />
            </div>
            <div className={cn(styles.r3, styles.fileBlock)}>
                {thirdImage
                    ? <img
                        alt={`${t(tokens.entities.company.thirdImage)} ${company.name}`}
                        src={getPicturePath(thirdImage.path)}
                        className={styles.preview}
                    />
                    : <div className={styles.preview} />
                }
                <Input
                    name='thirdImage'
                    type="file"
                    placeholder={t(tokens.entities.company.thirdImage)}
                    errored={errors.thirdImage || false}
                    onChange={(e) => setForm({ ...form, thirdImage: e.target.files[0] })}
                    className={styles.r1}
                />
            </div>
            <div className={cn(styles.r3, styles.fileBlock)}>
                {fourthImage
                    ? <img
                        alt={`${t(tokens.entities.company.fourthImage)} ${company.name}`}
                        src={getPicturePath(fourthImage.path)}
                        className={styles.preview}
                    />
                    : <div className={styles.preview} />
                }
                <Input
                    name='fourthImage'
                    type="file"
                    placeholder={t(tokens.entities.company.fourthImage)}
                    errored={errors.fourthImage || false}
                    onChange={(e) => setForm({ ...form, fourthImage: e.target.files[0] })}
                    className={styles.r1}
                />
            </div>
            <div className={cn(styles.r3, styles.fileBlock)}>
                {fifthImage
                    ? <img
                        alt={`${t(tokens.entities.company.fifthImage)} ${company.name}`}
                        src={getPicturePath(fifthImage.path)}
                        className={styles.preview}
                    />
                    : <div className={styles.preview} />
                }
                <Input
                    name='fifthImage'
                    type="file"
                    placeholder={t(tokens.entities.company.fifthImage)}
                    errored={errors.fifthImage || false}
                    onChange={(e) => setForm({ ...form, fifthImage: e.target.files[0] })}
                    className={styles.r1}
                />
            </div>
            <Button
                type='submit'
                label={t(tokens.form.company.submit)}
                className={cn(styles.submit, styles.r1)}
            />
        </form>
    </>
}

export default CompanyForm;
