import styles from './appDownloadSection.module.css';

export default function AppDownloadSection({ children }) {
    return (
        <section
            className={styles.appDownloadSection}
        >
            <div
                className={`container ${styles.wrapper}`}
            >
                {children}
            </div>
        </section>
    );
}
