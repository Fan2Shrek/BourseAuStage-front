import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import UiExample from "./pages/UiExample";
import path from "./path";
import {ThemeContextProvider} from "./context/ThemeContext";

function App() {
    return <ThemeContextProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path={path.home} element={<Home />} />
                    {/* A enlever plus tard */}
                    <Route index path={path.uiExample} element={<UiExample />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeContextProvider>;
}


export default App;
