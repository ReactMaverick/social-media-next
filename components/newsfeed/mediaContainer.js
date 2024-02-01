import styles from './mediaContainer.module.css';

export default function MediaContainer({ children }) {
    return (
        <div className={`media ${styles.media}`}>
            {children}
        </div>
    )
}