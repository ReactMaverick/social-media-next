import styles from './profileCard.module.css';
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function ProfileCard() {
    return (

        <div
            className={styles.profileCard}
        >
            <img
                className={styles.profilePhoto}
                alt="user"
                src="../../images/user_1_image.jpg"
            />
            <h5
            >
                <Link
                    className={styles.textWhite}
                    href="/0/timeline"

                >
                    Sarah Cruiz
                </Link>
            </h5>
            <Link
                className={styles.textWhite}
                href="#"

            >
                <Icon className="icon" icon="ion:person-add" />{" "}
                1,299 followers
            </Link>
        </div>

    );
}
