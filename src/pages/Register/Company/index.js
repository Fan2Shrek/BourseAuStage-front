import { useTranslation } from "react-i18next";

import Container from "../../../components/ui/atoms/Container";
import styles from './RegisterCompany.module.scss';
import RegisterCompanyForm from "../../../components/form/RegisterForm/Company";

const RegisterCompany = () => {
    const { t } = useTranslation();

    return <Container>
        <RegisterCompanyForm />
    </Container>
}

export default RegisterCompany;
