import { useTranslation } from "react-i18next";

import Container from "../../components/ui/atoms/Container";
import styles from './profil.module.scss';
import ProfilForm from "../../components/form/profilForm";

const Profil = () => {
    const { t } = useTranslation();

    const handleChange = () => {}
    const handleSubmit = () => {}

    return <Container className={styles.content}>
        {/* <ProfilForm /> */}
    </Container>
}

export default Profil;
