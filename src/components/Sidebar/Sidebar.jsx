import styles from './Sidebar.module.css';
import Logo from "../Logo/Logo.jsx";
import AppNav from "../AppNav/AppNav.jsx";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <p>List of cities</p>
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} by ALevitt
                </p>
            </footer>
        </div>
    )
}

export default Sidebar;
