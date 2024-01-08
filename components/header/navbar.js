import styles from './navbar.module.css';

export default function Navbar({ children }) {
    return (
        <div
            id="bs-example-navbar-collapse-1"
            className={`${styles.navbarCollapse} navbar-collapse`}
        >
            {children}
        </div>
    );
};