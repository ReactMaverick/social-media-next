'use client'
import styles from './navbarForm.module.css';
import { Icon } from '@iconify/react';

export default function NavbarForm() {
    return (
        <form
            className="navbar-form navbar-right d-none d-md-block"
        >
            <div
                className={`${styles.formGroup} form-group`}
            >
                <Icon className={styles.searchIcon} icon="ic:round-search" color="white" />
                <input
                    className={`${styles.formControl}`}
                    type="text"
                    placeholder="Search friends, photos, videos"
                />
            </div>
        </form>
    )
}