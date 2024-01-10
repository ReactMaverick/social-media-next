import styles from './newsfeedLeftColumn.module.css';

export default function NewsfeedRightColumn({ children }) {
    return (
        <div
            className={`col-md-2 ${styles.static}`}
        >
            {children}
        </div>
    );
}
