import styles from './newsfeedNav.module.css';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function NewsfeedNav() {
    return (
        <ul
            className={styles.newsfeedNav}
        >
            <li
                key='newsFeed'
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
                key='peopleNearby'
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
                key='newsfeedFriends'
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
                key='newsfeedMessages'
            >
                <Icon icon="heroicons-solid:chat-alt-2" color='#f7941e' />
                <div

                >
                    <Link
                        href="/0/newsfeedMessages"
                    >
                        Messages
                    </Link>
                </div>
            </li>
            <li
                key='newsfeedImages'
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
                key='newsfeedVideos'
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
