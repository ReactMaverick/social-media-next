import styles from './timelineCover.module.css';

export default function TimelineCover({ children }) {
    return (
        <div
            className={styles.timelineCover}
        >
            {children}
        </div>
    );
}
