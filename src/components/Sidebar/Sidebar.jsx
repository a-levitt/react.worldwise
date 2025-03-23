import styles from './Sidebar.module.css';
import Logo from "../Logo/Logo.jsx";
import AppNav from "../AppNav/AppNav.jsx";
import {Outlet} from "react-router-dom";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <Outlet />
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} by ALevitt
                </p>
            </footer>
        </div>
    )
}

export default Sidebar;
