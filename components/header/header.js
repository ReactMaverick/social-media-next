import styles from './header.module.css';

export default function Header({ children }) {
    // console.log(styles.mainHeader);
    return (
        <header id="header" className={`${styles.mainHeader} ${styles.lazyLoad} lazy-load`} >
            <nav
                className={`${styles.navMenu} ${styles.navbarFixedTop} navbar navbar-default navbar-fixed-top`}
            >
                {children}
            </nav>
        </header>
    );
}
