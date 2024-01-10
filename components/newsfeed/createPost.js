import styles from './createPost.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function CreatePost() {
    return (
        <div
            className={styles.createPost}
        >
            <div
                className="row"
            >
                <div
                    className="col-md-7 col-sm-7"
                >
                    <div
                        className={styles.formGroup}
                    >
                        <img
                            className="profile-photo-md"
                            src="../../images/user_1_image.jpg"
                        />
                        <textarea
                            id="exampleTextarea"
                            className={`form-control ${styles.formControl}`}
                            name="texts"
                            cols={30}
                            rows={1}
                            placeholder="Write what you wish"
                        />
                    </div>
                </div>
                <div
                    className="col-md-5 col-sm-5"
                >
                    <div
                        className={styles.tools}
                    >
                        <ul
                            className={`${styles.publishingTools} ${styles.listInline}`}
                        >
                            <li
                            >
                                <Link
                                    href="#"

                                >
                                    <Icon icon="fluent:compose-16-filled" />
                                </Link>
                            </li>
                            <li
                            >
                                <Link
                                    href="#"

                                >
                                    <Icon icon="entypo:images" />
                                </Link>
                            </li>
                            <li
                            >
                                <Link
                                    href="#"

                                >
                                    <Icon icon="material-symbols:videocam-rounded" />
                                </Link>
                            </li>
                            <li
                            >
                                <Link
                                    href="#"

                                >
                                    <Icon icon="lets-icons:map-fill" />
                                </Link>
                            </li>
                        </ul>
                        <button
                            className={`btn btn-primary pull-right ${styles.btnPrimary}`}
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
