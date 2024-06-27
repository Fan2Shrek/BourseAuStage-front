import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import path from "./path"
import { ThemeContextProvider } from "./context/ThemeContext"
import { UserContextProvider } from "./context/UserContext"
import { NotificationContextProvider } from "./context/NotificationContext"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import UiExample from "./pages/UiExample"
import Apply from "./pages/Offers/Apply"
import Companies from "./pages/Companies"
import Company from "./pages/Companies/Company"
import Profil from "./pages/admin/Profil"
import Offers from "./pages/Offers"
import RegisterCompany from "./pages/Register/Company"
import Offer from "./pages/Offers/Offer"
import OfferTypeEnum from "./enum/OfferTypeEnum"
import Create from "./pages/admin/Offers/Create"
import MySpaceLayout from "./components/layout/Layout/MySpaceLayout"
import AdminOffers from "./pages/admin/Offers"
import Error from "./pages/Error"

function App() {
    return <ThemeContextProvider>
        <NotificationContextProvider>
            <UserContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/admin'} element={<MySpaceLayout />}>
                            <Route index element={<Navigate to={path.admin.profil} replace />} />
                            <Route path={path.admin.profil} element={<Profil />} />
                            <Route path={path.admin.offers} element={<AdminOffers />} />
                        </Route>
                        <Route element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path={path.login} element={<Login />} />
                            <Route path={path.companies} element={<Companies />} />
                            <Route path={path.company} element={<Company />} />
                            <Route path={path.offer} element={<Offer />} />
                            <Route path={path.internship} element={<Offers type={OfferTypeEnum.INTERNSHIP} />} />
                            <Route path={path.workStudy} element={<Offers type={OfferTypeEnum.WORKSTUDY} />} />
                            <Route path={path.apply} element={<Apply />} />
                            <Route path={path.createOffer} element={<Create />} />
                            <Route path={path.companyRegistration} element={<RegisterCompany />} />
                            {/* A enlever plus tard */}
                            <Route path={path.uiExample} element={<UiExample />} />
                            <Route path='*' element={<Error code={404} />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
        </NotificationContextProvider>
    </ThemeContextProvider>
}


export default App
