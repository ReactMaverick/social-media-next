'use client'
import { useEffect, useState } from 'react';
import styles from './spinnerWrapper.module.css';

export default function SpinnerWrapper() {

    const [hideSpinner, setHideSpinner] = useState(false);

    useEffect(() => {
        // Set a timeout to show the spinner for at least 1 second
        const timeout = setTimeout(() => {
            setHideSpinner(true);
        }, 1500);

        // Clear the timeout if the component unmounts or the dependency array changes
        return () => clearTimeout(timeout);
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
