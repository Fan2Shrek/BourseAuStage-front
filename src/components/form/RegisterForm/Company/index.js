import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import tokens from "../../../../translations/tokens";
import Select from "../../../ui/atoms/Select";
import Input from "../../../ui/molecules/Input";
import Button from "../../../ui/atoms/Button";

const RegisterFormCompany = () => {
    const { t } = useTranslation();

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
                <Select name='gender' type='text' required label={t(tokens.page.register.form.gender)} values={sexes} />
                <Input name='lastName' required label={t(tokens.page.register.form.lastname)} />
                <Input name='firstName' required label={t(tokens.page.register.form.firstname)} />
                <Input name='jobTitle' required label={t(tokens.page.register.form.jobTitle)} />
                <Input name='email' required label={t(tokens.page.register.form.email)} />
                <Input name='confirmEmail' required label={t(tokens.page.register.form.confirmEmail)} />
                <Input name='password' type='password' required label={t(tokens.page.register.form.password)} />
                <Input name='confirmPassword' type='password' required label={t(tokens.page.register.form.confirmPassword)} />
                <Input name='phone' required label={t(tokens.page.register.form.phone)} />
                <Button label={t(tokens.page.register.form.next)} />
            </div>
        </div>
    </div>
}

export default RegisterFormCompany;
