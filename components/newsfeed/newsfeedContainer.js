import styles from './newsfeedContainer.module.css';

export default function NewsFeedContainer({ children }) {
    return (
        <div
            className={`${styles.newsfeedContainer} container`}
        >
            {children}
        </div>

    );
}
