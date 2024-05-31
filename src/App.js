import { BrowserRouter, Routes, Route } from "react-router-dom";

import path from "./path";
import { ThemeContextProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import UiExample from "./pages/UiExample";
import Company from "./pages/Company";
import Companies from "./pages/Companies";
import Offer from "./pages/Offer";

function App() {
    return <ThemeContextProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path={path.home} element={<Home />} />
                    <Route index path={path.companies} element={<Companies />} />
                    <Route index path={path.company} element={<Company />} />
                    <Route index path={path.offer} element={<Offer />} />
                    {/* A enlever plus tard */}
                    <Route index path={path.uiExample} element={<UiExample />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeContextProvider>;
}


export default App;
