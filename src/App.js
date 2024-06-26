import { BrowserRouter, Routes, Route } from "react-router-dom"

import path from "./path"
import { ThemeContextProvider } from "./context/ThemeContext"
import { UserContextProvider } from "./context/UserContext"
import { NotificationContextProvider } from "./context/NotificationContext"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import UiExample from "./pages/UiExample"
import Company from "./pages/Company"
import Apply from "./pages/Offers/Apply"
import Companies from "./pages/Companies"
import Offer from "./pages/Offer"
import Profil from "./pages/Profil"
import Offers from "./pages/Offers"
import OfferTypeEnum from "./enum/OfferTypeEnum"
import Page403 from "./pages/Error/403"     
import Create from "./pages/Offers/Create"

function App() {
    return <ThemeContextProvider>
        <NotificationContextProvider>
            <UserContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route index path={path.home} element={<Home />} />
                            <Route path={path.login} element={<Login />} />
                            <Route path={path.companies} element={<Companies />} />
                            <Route path={path.company} element={<Company />} />
                            <Route path={path.offer} element={<Offer />} />
                            <Route path={path.internship} element={<Offers type={OfferTypeEnum.INTERNSHIP} />} />
                            <Route path={path.workStudy} element={<Offers type={OfferTypeEnum.WORKSTUDY} />} />
                            <Route path={path.apply} element={<Apply />} />
                            <Route path={path.profil} element={<Profil />} />
                            <Route path={path.createOffer} element={<Create />} />
                            <Route path={path.unauthorized} element={<Page403 />}/>
                            {/* A enlever plus tard */}
                            <Route path={path.uiExample} element={<UiExample />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
        </NotificationContextProvider>
    </ThemeContextProvider>
}


export default App
