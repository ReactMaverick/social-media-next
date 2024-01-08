import Link from 'next/link';
import styles from './navbarHeader.module.css';

export default function NavbarHeader() {
    return (
        <div
            className={styles.navbarHeader}
        >
            <Link
                className={styles.navbarBrand}
                href="/0/"
            >
                <img
                    alt="logo"
                    src="images/logo.png"
                />
            </Link>
        </div>
    );
}