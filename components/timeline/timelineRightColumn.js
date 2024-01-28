import styles from './timelineRightColumn.module.css';

export default function TimelineRightColumn({ children }) {
    return (
        <div className={`col-md-2 ${styles.static}`}>
            {children}
        </div>
    )
}