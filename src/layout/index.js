import { Outlet } from "react-router";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer/footer";

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
