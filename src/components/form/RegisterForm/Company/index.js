import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import tokens from "../../../../translations/tokens";
import Select from "../../../ui/atoms/Select";

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
                <Select name='gender' onChange={handleChange} type='text' required values={sexes} />
            </div>
        </div>
    </div>
}

export default RegisterFormCompany;
