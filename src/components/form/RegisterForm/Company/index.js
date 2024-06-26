import { useEffect, useMemo, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router"
import { RxCross1 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

import styles from './RegisterFormCompany.module.scss';
import tokens from "../../../../translations/tokens";
import Select from "../../../ui/atoms/Select";
import Input from "../../../ui/molecules/Input";
import Button from "../../../ui/atoms/Button";
import apiClient from "../../../../api/ApiClient";
import Modal from "../../../ui/atoms/Modal";
import path from "../../../../path"
import { NotificationContext } from "../../../../context/NotificationContext"

const RegisterFormCompany = () => {
    const { t } = useTranslation();

    const [form, setForm] = useState({});
    const [category, setCategory] = useState([]);
    const [activitiesList, setActivitiesList] = useState([]);
    const [activities, setActivities] = useState([]);
    const [currentSelection, setCurrentSelection] = useState({});
    const [displayModal, setDisplayModal] = useState('');
    const { addNotification } = useContext(NotificationContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState({ collaborator: {}, company: {} });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleDelete = (value) => {
         setActivities(activities.filter(activity => activity !== value));
    }

    const validateForm = () => {
        const requiredFields = [
            'gender', 'lastName', 'firstName', 'phone', 'email', 'confirmEmail', 
            'password', 'confirmPassword', 'jobTitle', 'name', 'siretNumber', 
            'phoneCompany', 'category', 'address', 'city', 'postCode'
        ];

        for (const field of requiredFields) {
            if (!form[field]) {
                addNotification({
                    message: t(tokens.page.register.form.requiredFields),
                    type: 'danger',
                });

                return false;
            }
        }

        if (activities.length === 0) {
            addNotification({
                message: t(tokens.page.register.form.requiredFields),
                type: 'danger',
            });

            return false;
        }

        if (form.email !== form.confirmEmail) {
            addNotification({
                message: t(tokens.page.register.form.emailError),
                type: 'danger',
            });

            return false;
        }

        if (form.password !== form.confirmPassword) {
            addNotification({
                message: t(tokens.page.register.form.passwordError),
                type: 'danger',
            });

            return false;
        }

        return true;
    }

    const handleSubmit = async () => {
        
        if (!validateForm()) return;
        
        const formData = new FormData();
        
        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });
            
        formData.append('activities', JSON.stringify(activities));
        
        const response = await apiClient.company.post(formData);
        
        if(response == ''){
            navigate(path.login)
        }

        setErrors(response);
    }

    useEffect(() => {
        apiClient.category.getAll().then(response => {
            setCategory(response['hydra:member'].map(({name, id}) => ({name, value: id})));
        });

    }, []);

    useEffect(() => {
        apiClient.activity.getAll().then(response => {
            setActivitiesList(response['hydra:member'].map(({name, id}) => ({name, value: id})));
        });

    }, []);

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

    return <div className={styles.content}>
        <h2>{t(tokens.page.register.titleCompany)}</h2>
        <p className={styles.title}>{t(tokens.page.register.title.collaborator)}</p>
        <div className={styles.form}>
            <Select name='gender' placeholder={t(tokens.page.register.form.genderPlaceholder)} required label={t(tokens.page.register.form.gender)} values={sexes} onChange={handleChange} />
            <Input name='lastName' required label={t(tokens.page.register.form.lastname)} onChange={handleChange} />
            <Input name='firstName' required label={t(tokens.page.register.form.firstname)} onChange={handleChange} />
            <Input name='phone' errored={errors.collaborator.phone || false} required label={t(tokens.page.register.form.phone)} onChange={handleChange} />
            <Input name='email' errored={errors.collaborator.email || false} required label={t(tokens.page.register.form.email)} onChange={handleChange} />
            <Input name='confirmEmail' errored={errors.collaborator.confirmEmail || false} required label={t(tokens.page.register.form.confirmEmail)} onChange={handleChange} />
            <Input name='password' type='password' errored={errors.collaborator.password || false} required label={t(tokens.page.register.form.password)} onChange={handleChange} />
            <Input name='confirmPassword' type='password' errored={errors.collaborator.confirmPassword || false} required label={t(tokens.page.register.form.confirmPassword)} onChange={handleChange} />
            <Input name='jobTitle' required label={t(tokens.page.register.form.jobTitle)} onChange={handleChange} />
        </div>
        <p className={styles.title}>{t(tokens.page.register.title.company)}</p>
        <div className={styles.form}>
            <Input name='name' required label={t(tokens.page.register.form.name)} onChange={handleChange} />
            <Input name='siretNumber' errored={errors.company.siretNumber || false} required label={t(tokens.page.register.form.siretNumber)} onChange={handleChange} />
            <Input name='phoneCompany' errored={errors.company.phoneCompany || false} required label={t(tokens.page.register.form.phoneCompany)} onChange={handleChange} />
            <div className={styles.buttonModal}>
                <p>{t(tokens.page.register.form.activities)}<span>*</span></p>
                <div className={styles.activitySelected}>
                    {activities.map((activity) => <Button  label={activity.name} onClick={() => handleDelete(activity)} key={activity} icon={<RxCross1 />} rightIcon />)}
                    {<Button onClick={() => setDisplayModal('activity')} icon={<FaPlus />} inverted rightIcon />}
                </div>
            </div>
            <Select name='category' placeholder={t(tokens.page.register.form.categoryPlaceholder)} required label={t(tokens.page.register.form.category)} values={category} onChange={handleChange} />
            <Input name='address' required label={t(tokens.page.register.form.address)} onChange={handleChange} />
            <Input name='city' required label={t(tokens.page.register.form.city)} onChange={handleChange} />
            <Input name='postCode' errored={errors.company.postCode || false} required label={t(tokens.page.register.form.postCode)} onChange={handleChange} />
            <Input name='additionalAddress' label={t(tokens.page.register.form.additionalAddress)} onChange={handleChange} />
        </div>
        <div className={errors}>
            {Object.entries(errors.collaborator).map(([key, value]) => <p key={key} className={styles.error}>{value}</p>)}
            {Object.entries(errors.company).map(([key, value]) => <p key={key} className={styles.error}>{value}</p>)}
        </div>
        <div className={styles.buttonContainer}>
            <Button label={t(tokens.page.register.form.submit)} onClick={handleSubmit} />
        </div>
        <Modal
            title={t(tokens.page.register.modal.title)}
            active={displayModal}
            setDisplayModal={setDisplayModal}
        >
            <div className={styles.modalContent}>
                <Select onChange={(e) => setCurrentSelection({value: parseInt(e.target.value, 10)})} placeholder={t(tokens.page.register.form.activitiesPlaceholder)} values={activitiesList.filter(s => !activities.includes(s))} />
                <Button label={t(tokens.actions.add)} onClick={() => {
                    setActivities([...activities, ...activitiesList.filter(el => el.value === currentSelection.value)]);
                    setCurrentSelection('');
                    setDisplayModal('');
                }} />
            </div>
        </Modal>
    </div>
}

export default RegisterFormCompany;
