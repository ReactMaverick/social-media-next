import styles from './hiddenArrows.module.css';

export default function HiddenArrows() {

    return (

        <svg
            className={`${styles.arrows} hidden-xs hidden-sm`}
        >
            <path
                className={styles.a1}
                d="M0 0 L30 32 L60 0"
            />
            <path
                className={styles.a2}
                d="M0 20 L30 52 L60 20"
            />
            <path
                className={styles.a3}
                d="M0 40 L30 72 L60 40"
            />
        </svg>

    );
}
