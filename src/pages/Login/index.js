import { useContext, useMemo } from "react"
import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"

import path from "../../path"
import tokens from "../../translations/tokens"
import Banner from "../../components/layout/Banner"
import Container from "../../components/ui/atoms/Container"
import UnderlinedContent from "../../components/ui/atoms/UnderlinedText"
import LoginForm from "../../components/form/LoginForm"
import { UserContext } from "../../context/UserContext"

const Login = () => {
    const { t } = useTranslation()
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const breadCrumb = useMemo(() => [
        {
            label: t(tokens.breadCrumb.home),
            link: path.home
        },
        {
            label: t(tokens.breadCrumb.login),
            link: null
        },
    ], [t])

    if (user) {
        navigate(path.admin.profil)
    }

    return <Container inline>
        <Banner breadCrumb={breadCrumb}>
            <h1>
                {`${t(tokens.page.login.hero.title.first)} `}
                <UnderlinedContent>{t(tokens.page.login.hero.title.underlined)}</UnderlinedContent>
            </h1>
        </Banner>

        <Container>
            <LoginForm />
        </Container>
    </Container>
}


export default Login
