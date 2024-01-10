import styles from './newsfeedRow.module.css';

export default function NewsfeedRow({ children }) {
    return (
        <div className={`row ${styles.newsfeedRow}`}>
            {children}
        </div>
    )
};