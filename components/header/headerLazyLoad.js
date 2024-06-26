import styles from './header.module.css';

export default function HeaderLazyLoad({ children }) {
    // console.log(styles.mainHeader);
    return (
        <header id="header" className={`${styles.mainHeader} ${styles.lazyLoad} lazy-load`} >
            <nav
                className={`${styles.navMenu} ${styles.navbarFixedTop} navbar fixed-top navbar-expand-lg`}
            >
                {children}
            </nav>
        </header>
    );
}
