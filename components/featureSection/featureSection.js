'use client'
import styles from './featureSection.module.css';

export default function FeatureSection({ children }) {
    return (

        <section
            className={styles.featureSection}
        >
            <div
                className={`container ${styles.wrapper}`}
            >
                {children}
            </div>
        </section>

    );
}
