'use client'
import { useState } from 'react';
import styles from './navbarForm.module.css';
import { Icon } from '@iconify/react';

export default function NavbarForm() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <form
            className="d-flex justify-content-center"
        >
            <div
                className={`${styles.formGroup} form-group`}
            >
                <Icon className={styles.searchIcon} icon="ic:round-search" color="white" />
                <input
                    className={`${styles.formControl}`}
                    type="text"
                    placeholder="Search friends, users"
                    name='searchTerm'
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}