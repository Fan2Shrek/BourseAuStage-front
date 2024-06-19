import { BrowserRouter, Routes, Route } from "react-router-dom";

import path from "./path";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import UiExample from "./pages/UiExample";
import Company from "./pages/Company";
import Apply from "./pages/Offers/Apply";
import Companies from "./pages/Companies";
import Offer from "./pages/Offer";
import Profil from "./pages/Profil";
import Offers from "./pages/Offers";
import OfferTypeEnum from "./enum/OfferTypeEnum";

function App() {
    return <ThemeContextProvider>
        <UserContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index path={path.home} element={<Home />} />
                        <Route index path={path.companies} element={<Companies />} />
                        <Route index path={path.company} element={<Company />} />
                        <Route index path={path.offer} element={<Offer />} />
                        <Route index path={path.internship} element={<Offers type={OfferTypeEnum.INTERNSHIP} />} />
                        <Route index path={path.workStudy} element={<Offers type={OfferTypeEnum.WORKSTUDY} />} />
                        <Route index path={path.apply} element={<Apply />} />
                        <Route index path={path.profil} element={<Profil />} />
                        {/* A enlever plus tard */}
                        <Route index path={path.uiExample} element={<UiExample />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    </ThemeContextProvider>;
}


export default App;
