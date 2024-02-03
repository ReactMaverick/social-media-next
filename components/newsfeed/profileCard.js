import styles from './profileCard.module.css';
import Link from "next/link";
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

export default function ProfileCard({ currentUser, friends }) {

    const router = useRouter();

    const handleProfileImageClick = () => {
        router.push('/0/timeline/' + currentUser.profileId);
    }

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
                        onClick={handleProfileImageClick}
                    />
                    <h5
                    >
                        <Link
                            className={styles.textWhite}
                            href={process.env.BASE_URL + '/0/timeline/' + currentUser.profileId}

                        >
                            {currentUser.firstName + ' ' + currentUser.lastName}
                        </Link>
                    </h5>
                    <Link
                        className={styles.textWhite}
                        href=""
                        onClick={(e) => e.preventDefault()}
                    >
                        <Icon className="icon" icon="ion:person-add" />{" "}
                        {friends && friends.length} friends
                    </Link>
                </>
            )}

        </div>

    );
}
