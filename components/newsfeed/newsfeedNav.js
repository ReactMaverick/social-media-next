import styles from './newsfeedNav.module.css';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function NewsfeedNav({ currentUser }) {
    return (
        <ul
            className={styles.newsfeedNav}
        >
            <li
                key={`newsfeed_${currentUser._id}`}
            >
                <Icon icon="mingcute:paper-fill" color='#8dc63f' />
                <div
                >
                    <Link
                        href="/0/newsfeed"
                    >
                        My Newsfeed
                    </Link>
                </div>
            </li>
            {/* <li
                key={`peopleNearby_${currentUser._id}`}
            >
                <Icon icon="mdi:people-group" color='#662d91' />
                <div
                >
                    <Link
                        href="/0/newsfeed/peopleNearby"
                    >
                        People Nearby
                    </Link>
                </div>
            </li> */}
            <li
                key={`newsfeedFriends_${currentUser._id}`}
            >
                <Icon icon="mdi:people-group-outline" color='#ee2a7b' />
                <div

                >
                    <Link
                        href="/0/newsfeed/friends"
                    >
                        Friends
                    </Link>
                </div>
            </li>
            <li
                key={`newsfeedMessages_${currentUser._id}`}
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
                key={`newsfeedImages_${currentUser._id}`}
            >
                <Icon icon="entypo:images" color='#1c75bc' />
                <div

                >
                    <Link
                        href="/0/newsfeed/images"
                    >
                        Images
                    </Link>
                </div>
            </li>
            <li
                key={`newsfeedVideos_${currentUser._id}`}
            >
                <Icon icon="material-symbols:videocam-rounded" color='#9e1f63' />
                <div

                >
                    <Link
                        href="/0/newsfeed/videos"
                    >
                        Videos
                    </Link>
                </div>
            </li>
        </ul>
    );
}
