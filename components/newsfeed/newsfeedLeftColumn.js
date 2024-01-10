import styles from './newsfeedLeftColumn.module.css';

export default function NewsfeedLeftColumn({ children }) {
    return (
        <div
            className={`col-md-3 ${styles.static}`}
        >
            {children}
        </div>
    );
}
