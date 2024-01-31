import styles from "./editProfile.module.css";
import { Icon } from "@iconify/react";

export default function TimelineEditSettings() {
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
                                            checked
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
                                            checked
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
                    <div className={`${styles.settingsBlock}`}>
                        <div className={`${styles.row} row`}>
                            <div className={`col-sm-9`}>
                                <div className={`${styles.switchDescription}`}>
                                    <div>
                                        <strong>Text messages</strong>
                                    </div>
                                    <p>Send me messages to my cell phone</p>
                                </div>
                            </div>
                            <div className={`col-sm-3`}>
                                <div className={`${styles.toggleSwitch}`}>
                                    <label className={`${styles.switch}`}>
                                        <input
                                            className={`${styles.inputSwitch}`}
                                            checked
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
                    <div className={`${styles.settingsBlock}`}>
                        <div className={`${styles.row} row`}>
                            <div className={`col-sm-9`}>
                                <div className={`${styles.switchDescription}`}>
                                    <div>
                                        <strong>Enable sound</strong>
                                    </div>
                                    <p>
                                        You'll hear notification sound when someone sends you a
                                        private message
                                    </p>
                                </div>
                            </div>
                            <div className={`col-sm-3`}>
                                <div className={`${styles.toggleSwitch}`}>
                                    <label className={`${styles.switch}`}>
                                        <input
                                            className={`${styles.inputSwitch}`}
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
                </div>
            </div>
        </div>
    )
}