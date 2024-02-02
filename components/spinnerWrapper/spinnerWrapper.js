'use client'
import { useEffect, useState } from 'react';
import styles from './spinnerWrapper.module.css';

export default function SpinnerWrapper() {

    const [hideSpinner, setHideSpinner] = useState(false);

    const hidePreloader = () => {
        setTimeout(() => {
            setHideSpinner(true);
        }, 1000);
    };

    useEffect(() => {
        hidePreloader();
    }, []);

    return (
        <div
            id="spinner-wrapper" className={`${styles.spinnerWrapper} ${hideSpinner && styles.hidden}`}
        >
            <div
                className={styles.spinner}
            />
        </div>

    );
}
