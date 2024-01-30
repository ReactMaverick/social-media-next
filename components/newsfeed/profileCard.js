import styles from './profileCard.module.css';
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function ProfileCard({ currentUser, friends }) {

    return (

        <div
            className={styles.profileCard}
            style={{
                background: `linear-gradient(to bottom, rgba(39, 170, 225, .8), rgba(28, 117, 188, .8)), url("${currentUser.coverImage}") no-repeat`
            }}
        >
            {currentUser && (
                <>
                    <img
                        className={styles.profilePhoto}
                        alt="user"
                        src={(currentUser.image) !== '' ? (currentUser.image) : process.env.BASE_URL + '/images/no_user.webp'}
                    />
                    <h5
                    >
                        <Link
                            className={styles.textWhite}
                            href="/0/timeline"

                        >
                            {currentUser.name}
                        </Link>
                    </h5>
                    <Link
                        className={styles.textWhite}
                        href="#"

                    >
                        <Icon className="icon" icon="ion:person-add" />{" "}
                        {friends && friends.length} friends
                    </Link>
                </>
            )}

        </div>

    );
}
