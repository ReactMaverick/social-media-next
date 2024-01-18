import styles from './newsfeedNav.module.css';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function NewsfeedNav({ currentUser }) {
    return (
        <ul
            className={styles.newsfeedNav}
        >
            <li
                key={`newsfeed_${currentUser.id}`}
            >
                <Icon icon="mingcute:paper-fill" color='#8dc63f' />
                <div
                >
                    <Link
                        href="#"
                    >
                        My Newsfeed
                    </Link>
                </div>
            </li>
            <li
                key={`peopleNearby_${currentUser.id}`}
            >
                <Icon icon="mdi:people-group" color='#662d91' />
                <div
                >
                    <Link
                        href="/0/peopleNearby"
                    >
                        People Nearby
                    </Link>
                </div>
            </li>
            <li
                key={`newsfeedFriends_${currentUser.id}`}
            >
                <Icon icon="mdi:people-group-outline" color='#ee2a7b' />
                <div

                >
                    <Link
                        href="/0/newsfeedFriends"
                    >
                        Friends
                    </Link>
                </div>
            </li>
            <li
                key={`newsfeedMessages_${currentUser.id}`}
            >
                <Icon icon="heroicons-solid:chat-alt-2" color='#f7941e' />
                <div

                >
                    <Link
                        href="/0/newsfeed/messages"
                    >
                        Messages
                    </Link>
                </div>
            </li>
            <li
                key={`newsfeedImages_${currentUser.id}`}
            >
                <Icon icon="entypo:images" color='#1c75bc' />
                <div

                >
                    <Link
                        href="/0/newsfeedImages"
                    >
                        Images
                    </Link>
                </div>
            </li>
            <li
                key={`newsfeedVideos_${currentUser.id}`}
            >
                <Icon icon="material-symbols:videocam-rounded" color='#9e1f63' />
                <div

                >
                    <Link
                        href="/0/newsfeedVideos"
                    >
                        Videos
                    </Link>
                </div>
            </li>
        </ul>
    );
}
