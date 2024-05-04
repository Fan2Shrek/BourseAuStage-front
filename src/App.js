import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/home";
import path from "./path";
import {ThemeContextProvider} from "./context/ThemeContext";

function App() {
    return <ThemeContextProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path={path.home} element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeContextProvider>;
}


export default App;
