import { useContext } from "react";

import { UserContext } from "../../../context/UserContext";
import Error from "../../Error";
import Container from "../../../components/ui/atoms/Container";
import ProfilForm from "../../../components/form/ProfilForm";

const Profil = () => {
    const { user } = useContext(UserContext)

    if (!user) {
        return <Error code={403} />;
    }

    return <Container admin>
        <ProfilForm />
    </Container>
}

export default Profil;
