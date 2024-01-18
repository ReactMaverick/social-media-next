import styles from './appButtons.module.css';

export default function AppButtons() {
    return (
        <ul
            className={`${styles.appBtn} slideUp`}
        >
            <li

            >
                <button
                    className={styles.btnSecondary}
                >
                    <img
                        alt="App Store"
                        src={process.env.BASE_URL + "images/app_store_logo.png"}
                    />
                </button>
            </li>
            <li
            >
                <button
                    className={styles.btnSecondary}
                >
                    <img
                        alt="Google Play"
                        src={process.env.BASE_URL + "images/google_play_logo.png"}
                    />
                </button>
            </li>
        </ul>

    );
}
