import styles from './suggestionsSidebar.module.css';

export default function SuggestionSidebar({ children }) {
    return (
        <div
            id="stickySidebar"
            className="suggestions"
        >
            <h4
                className={`${styles.h4} ${styles.gray}`}
            >
                Who to Follow
            </h4>
            {children}
        </div>
    );
}
