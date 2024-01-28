import styles from './header.module.css';

export default function HeaderAll({ children }) {
    // console.log(styles.mainHeader);
    return (
        <header id="header" className={`${styles.mainHeader}`} >
            <nav
                className={`${styles.navMenu} ${styles.navbarFixedTop} navbar navbar-default fixed-top`}
            >
                {children}
            </nav>
        </header>
    );
}
