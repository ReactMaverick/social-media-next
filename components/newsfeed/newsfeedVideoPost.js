"use client";
import { useEffect } from "react";
import styles from "./newsfeedVideoPost.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function NewsfeedVideoPost() {
    return (
        <div className={`${styles.myRow} row`}>
            <div className={`col-md-6 col-sm-6`}>
                <div className={`${styles.imagePostBox}`}>
                    <Link href='' className={`${styles.videoBox}`}>
                        <video className={`${styles.videoPost}`} controls>
                            <source src="https://themified.com/friend-finder/videos/3.mp4" type="video/mp4" />
                        </video>
                    </Link>
                    <div className={`${styles.MainBox}`}>
                        <div className={`${styles.BoxItems}`}>
                            <Link href="" className={`${styles.likeBox} mybtn`}>
                                <Icon icon="fontisto:like" />
                                <span className={`${styles.likeNum}`}>3</span>
                            </Link>
                            <Link
                                href=""
                                className={`${styles.likeBox} ${styles.disLikeBox} mybtn`}
                            >
                                <Icon icon="fontisto:dislike" />
                                <span className={`${styles.likeNum}`}>3</span>
                            </Link>
                        </div>
                        <div className={`${styles.userBox}`}>
                            <div className={`${styles.userAvtar}`}>
                                <img src="https://themified.com/friend-finder/images/users/user-14.jpg" />
                            </div>
                            <div className={`${styles.userCont}`}>
                                <Link href="" className={`${styles.userName}`}>
                                    Suraj Banerjee
                                </Link>
                                <Link href="" className={`${styles.friend}`}>
                                    Friend
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`col-md-6 col-sm-6`}>
                <div className={`${styles.imagePostBox}`}>
                <Link href='' className={`${styles.videoBox}`}>
                        <video className={`${styles.videoPost}`} controls>
                            <source src="https://themified.com/friend-finder/videos/3.mp4" type="video/mp4" />
                        </video>
                    </Link>
                    <div className={`${styles.MainBox}`}>
                        <div className={`${styles.BoxItems}`}>
                            <Link href="" className={`${styles.likeBox} mybtn`}>
                                <Icon icon="fontisto:like" />
                                <span className={`${styles.likeNum}`}>3</span>
                            </Link>
                            <Link
                                href=""
                                className={`${styles.likeBox} ${styles.disLikeBox} mybtn`}
                            >
                                <Icon icon="fontisto:dislike" />
                                <span className={`${styles.likeNum}`}>3</span>
                            </Link>
                        </div>
                        <div className={`${styles.userBox}`}>
                            <div className={`${styles.userAvtar}`}>
                                <img src="https://themified.com/friend-finder/images/users/user-14.jpg" />
                            </div>
                            <div className={`${styles.userCont}`}>
                                <Link href="" className={`${styles.userName}`}>
                                    Suraj Banerjee
                                </Link>
                                <Link href="" className={`${styles.friend}`}>
                                    Friend
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}