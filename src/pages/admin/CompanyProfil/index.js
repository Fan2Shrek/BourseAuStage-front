import { useContext } from "react";

import { UserContext } from "../../../context/UserContext";
import Error from "../../Error";
import Container from "../../../components/ui/atoms/Container";
import UserRoleEnum from "../../../enum/UserRoleEnum";
import CompanyForm from "../../../components/form/CompanyForm";

const CompanyProfil = () => {
    const { user } = useContext(UserContext)

    if (!user || !user.roles.includes(UserRoleEnum.COLLABORATOR)) {
        return <Error code={403} />;
    }

    return <Container admin>
        <CompanyForm />
    </Container>
}

export default CompanyProfil;
