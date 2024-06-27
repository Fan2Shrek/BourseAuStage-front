import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../../../context/UserContext";
import { getCookie } from "../../../utils/cookies";
import path from "../../../path";
import Error from "../../Error";
import Container from "../../../components/ui/atoms/Container";
import ProfilForm from "../../../components/form/ProfilForm";

const Profil = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (!getCookie('token') && !user) {
    //         navigate(path.unauthorized);
    //     }
    // }, [user, navigate]);

    if (!user) {
        return <Error code={403} />;
    }

    return <Container admin>
        <ProfilForm />
    </Container>
}

export default Profil;
