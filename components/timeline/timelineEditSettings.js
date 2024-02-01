import styles from "./editProfile.module.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { updateCurrentUser } from '@/utils/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';

export default function TimelineEditSettings({ currentUser }) {
    const dispatch = useAppDispatch();

    const [isTogglePressed, setIsTogglePressed] = useState(false);

    const [formData, setFormData] = useState({
        follow_me: currentUser.follow_me,
        send_notification: currentUser.send_notification,
        enable_tagging: currentUser.enable_tagging,
    });

    const handleChange = (e) => {
        const { name, value, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));

        setIsTogglePressed(true);

    };

    useEffect(() => {
        if (isTogglePressed) {
            // console.log(formData);

            dispatch(updateCurrentUser({ userProfileId: currentUser.profileId, userData: formData }))
                .then((action) => {
                    // console.log(action)

                })
                .catch((error) => {
                    console.error('Error Updating user:', error);
                });

        }
    }, [formData])



    return (
        <div className={`${styles.editProfile}`}>
            <div>
                <div className={`block-title`}>
                    <h4 className={`${styles.heading}`}>
                        <Icon icon="clarity:settings-line" />
                        Account Settings
                    </h4>
                    <div className={`${styles.line}`}></div>
                    <p className={`para`}>Edit your account settings here.</p>
                    <div className={`${styles.line}`}></div>
                </div>
                <div className={`${styles.editBlock}`}>
                    <div className={`${styles.settingsBlock}`}>
                        <div className={`${styles.row} row`}>
                            <div className={`col-sm-9`}>
                                <div className={`${styles.switchDescription}`}>
                                    <div>
                                        <strong>Enable follow me</strong>
                                    </div>
                                    <p>Enable this if you want people to follow you</p>
                                </div>
                            </div>
                            <div className={`col-sm-3`}>
                                <div className={`${styles.toggleSwitch}`}>
                                    <label className={`${styles.switch}`}>
                                        <input
                                            className={`${styles.inputSwitch}`}
                                            checked={formData.follow_me}
                                            name="follow_me"
                                            type="checkbox"
                                            onChange={handleChange}
                                        />
                                        <span
                                            className={`${styles.slider} ${styles.round}`}
                                        ></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.line}`}></div>
                    <div className={`${styles.settingsBlock}`}>
                        <div className={`${styles.row} row`}>
                            <div className={`col-sm-9`}>
                                <div className={`${styles.switchDescription}`}>
                                    <div>
                                        <strong>Send me notifications</strong>
                                    </div>
                                    <p>
                                        Send me notification emails my friends like, share or
                                        message me
                                    </p>
                                </div>
                            </div>
                            <div className={`col-sm-3`}>
                                <div className={`${styles.toggleSwitch}`}>
                                    <label className={`${styles.switch}`}>
                                        <input
                                            className={`${styles.inputSwitch}`}
                                            name="send_notification"
                                            checked={formData.send_notification}
                                            onChange={handleChange}
                                            type="checkbox"
                                        />
                                        <span
                                            className={`${styles.slider} ${styles.round}`}
                                        ></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.line}`}></div>

                    <div className={`${styles.line}`}></div>
                    <div className={`${styles.settingsBlock}`}>
                        <div className={`${styles.row} row`}>
                            <div className={`col-sm-9`}>
                                <div className={`${styles.switchDescription}`}>
                                    <div>
                                        <strong>Enable tagging</strong>
                                    </div>
                                    <p>Enable my friends to tag me on their posts</p>
                                </div>
                            </div>
                            <div className={`col-sm-3`}>
                                <div className={`${styles.toggleSwitch}`}>
                                    <label className={`${styles.switch}`}>
                                        <input
                                            className={`${styles.inputSwitch}`}
                                            name="enable_tagging"
                                            checked={formData.enable_tagging}
                                            onChange={handleChange}
                                            type="checkbox"
                                        />
                                        <span
                                            className={`${styles.slider} ${styles.round}`}
                                        ></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.line}`}></div>

                </div>
            </div>
        </div>
    )
}