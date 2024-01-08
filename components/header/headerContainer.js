import styles from './headerContainer.module.css';

export default function HeaderContainer({ children }) {
    return (
        <div className={`${styles.container} container`}>
            {children}
        </div>
    )
}
