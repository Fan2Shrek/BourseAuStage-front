import {Outlet} from "react-router";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Layout = () => {
    return <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
}

export default Layout;
