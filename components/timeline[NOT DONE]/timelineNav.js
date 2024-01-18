import styles from './timelineNav.module.css';

export default function TimelineNav({ children }) {
    return (
        <div
            className={`d-none d-md-block ${styles.timelineNav}`}
        >
            {children}
        </div>
    )
}