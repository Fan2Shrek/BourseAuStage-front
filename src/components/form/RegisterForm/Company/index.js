import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from './RegisterFormCompany.module.scss';
import tokens from "../../../../translations/tokens";
import Select from "../../../ui/atoms/Select";
import Input from "../../../ui/molecules/Input";
import Button from "../../../ui/atoms/Button";
import apiClient from "../../../../api/ApiClient";

const RegisterFormCompany = () => {
    const { t } = useTranslation();

    const [category, setCategory] = useState([]);

    useEffect(() => {
        apiClient.category.getAll().then(response => {
            setCategory(response['hydra:member'].map(({name, id}) => ({name, value: id})));
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
            <Select name='gender' type='text' required label={t(tokens.page.register.form.gender)} values={sexes} />
            <Input name='lastName' required label={t(tokens.page.register.form.lastname)} />
            <Input name='firstName' required label={t(tokens.page.register.form.firstname)} />
            <Input name='phone' required label={t(tokens.page.register.form.phone)} />
            <Input name='email' required label={t(tokens.page.register.form.email)} />
            <Input name='confirmEmail' required label={t(tokens.page.register.form.confirmEmail)} />
            <Input name='password' type='password' required label={t(tokens.page.register.form.password)} />
            <Input name='confirmPassword' type='password' required label={t(tokens.page.register.form.confirmPassword)} />
            <Input name='jobTitle' required label={t(tokens.page.register.form.jobTitle)} />
        </div>
        <p className={styles.title}>{t(tokens.page.register.title.company)}</p>
        <div className={styles.form}>
            <Input name='name' required label={t(tokens.page.register.form.name)} />
            <Input name='siretNumber' required label={t(tokens.page.register.form.siretNumber)} />
            <Input name='phoneCompany' required label={t(tokens.page.register.form.phoneCompany)} />
            <Select name='activities' required label={t(tokens.page.register.form.activities)} />
            <Select name='category' required label={t(tokens.page.register.form.category)} type='text' values={category} />
            <Input name='address' required label={t(tokens.page.register.form.address)} />
            <Input name='city' required label={t(tokens.page.register.form.city)} />
            <Input name='postCode' required label={t(tokens.page.register.form.postCode)} />
            <Input name='additionalAddress' label={t(tokens.page.register.form.additionalAddress)} />
        </div>
        <div className={styles.buttonContainer}>
            <Button label={t(tokens.page.register.form.submit)} />
        </div>
    </div>
}

export default RegisterFormCompany;
