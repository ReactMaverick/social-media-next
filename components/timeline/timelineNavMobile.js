import styles from './timelineNavMobile.module.css';

export default function TimelineNavMobile({ children }) {
    return (
        <div
            className={`d-md-none ${styles.timelineNavMobile}`}
        >
            {children}
        </div>
    )
}