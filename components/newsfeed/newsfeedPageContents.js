import styles from './newsfeedPageContents.module.css';

export default function NewsFeedPageContents({ children }) {
    return (
        <div className={styles.pageContents}>
            {children}
        </div>
    )
};