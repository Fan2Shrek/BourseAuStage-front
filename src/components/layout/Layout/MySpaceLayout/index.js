import { useContext } from "react";
import { Outlet } from "react-router";

import styles from "./MySpaceLayout.module.scss";
import { UserContext } from "../../../../context/UserContext";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import CompanyAdminHeader from "../../../company/CompanyAdminHeader";

const MySpaceLayout = () => {
    const { user } = useContext(UserContext)

    return <>
        <Navbar />
        <div className={styles.content}>
            <Sidebar />
            <main className={styles.main}>
                {user?.company && <CompanyAdminHeader
                    name={user.company.name}
                    logoIcon={user.company.logoIcon}
                />}
                <Outlet />
            </main>
        </div>
        <Footer />
    </>
}

export default MySpaceLayout;
