'use client'
import styles from './featureRow.module.css';

export default function FeatureRow({ children }) {
    return (

        <div className={`row ${styles.row} slideUp`}>
            {children}
        </div>

    );
}
