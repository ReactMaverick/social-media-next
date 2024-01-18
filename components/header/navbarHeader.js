import Link from 'next/link';
import styles from './navbarHeader.module.css';

export default function NavbarHeader() {
    return (
        <div
            className={styles.navbarHeader}
        >
            <Link
                className={styles.navbarBrand}
                href="/"
            >
                <img
                    alt="logo"
                    src={process.env.BASE_URL + "/images/logo.png"}
                />
            </Link>
        </div>
    );
}