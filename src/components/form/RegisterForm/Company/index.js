import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import tokens from "../../../../translations/tokens";
import Select from "../../../ui/atoms/Select";
import Input from "../../../ui/molecules/Input";
import Button from "../../../ui/atoms/Button";

const RegisterFormCompany = () => {
    const { t } = useTranslation();

    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

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

    return <div>
        <div>
            <p>Inscription</p>
            <div>
                <Select name='gender' onChange={handleChange} type='text' required label={t(tokens.page.register.form.gender)} values={sexes} />
                <Input name='lastName' onChange={handleChange} required label={t(tokens.page.register.form.lastname)} />
                <Input name='firstName' onChange={handleChange} required label={t(tokens.page.register.form.firstname)} />
                <Input name='jobTitle' onChange={handleChange} required label={t(tokens.page.register.form.jobTitle)} />
                <Input name='email' onChange={handleChange} required label={t(tokens.page.register.form.email)} />
                <Input name='confirmEmail' onChange={handleChange} required label={t(tokens.page.register.form.confirmEmail)} />
                <Input name='password' onChange={handleChange} type='password' required label={t(tokens.page.register.form.password)} />
                <Input name='confirmPassword' onChange={handleChange} type='password' required label={t(tokens.page.register.form.confirmPassword)} />
                <Input name='phone' onChange={handleChange} required label={t(tokens.page.register.form.phone)} />
                <Button label={t(tokens.page.register.form.next)} onChange={handleChange} />
            </div>
        </div>
    </div>
}

export default RegisterFormCompany;
