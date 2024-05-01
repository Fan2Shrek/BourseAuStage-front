import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Layout from "./layout";
import Home from "./pages/home";
import path from "./path";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
          <Route element={<Layout />}>
            <Route index path={path.home} element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </>;
}


export default App;
