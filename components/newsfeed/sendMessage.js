import styles from './sendMessage.module.css';

export default function SendMessage() {
    return (
        <div
            className={`${styles.sendMessage} send-message`}

        >
            <div
                className={`${styles.inputGroup} input-group`}

            >
                <input
                    className={`${styles.formControl} form-control`}
                    type="text"
                    placeholder="Type your message"

                />
                <span
                    className={`${styles.inputGroupBtn} input-group-btn`}

                >
                    <button
                        className={`${styles.btn} btn btn-default`}
                        type="button"

                    >
                        Send
                    </button>
                </span>
            </div>
        </div>
    )
};