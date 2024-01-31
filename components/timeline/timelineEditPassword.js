import styles from "./editProfile.module.css";
import { Icon } from "@iconify/react";

export default function TimelineEditPassword() {
    return (
        <div className={`${styles.editProfile}`}>
            <div>
                <div className={`block-title`}>
                    <h4 className={`${styles.heading}`}>
                        <Icon icon="material-symbols-light:lock-person-outline" />
                        Change Password
                    </h4>
                    <div className={`${styles.line}`}></div>
                    <p className={`para`}>Change your password.</p>
                    <div className={`${styles.line}`}></div>
                </div>
                <div className={`${styles.editBlock}`}>
                    <form
                        name="update-pass"
                        id="passEducation"
                        className={`${styles.formInline}`}
                    >
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="my-password">Old password</label>
                                <input
                                    id="my-password"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="password"
                                    name="password"
                                    title="Enter password"
                                    placeholder="Old password"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="my-New-password">New password</label>
                                <input
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="password"
                                    name="password"
                                    title="Enter password"
                                    placeholder="New password"
                                />
                            </div>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="my-New-password">Confirm password</label>
                                <input
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="password"
                                    name="password"
                                    title="Enter password"
                                    placeholder="Confirm password"
                                />
                            </div>
                        </div>
                        <p>
                            <a className={`${styles.forgot_password}`} href="#">Forgot Password?</a>
                        </p>
                        <button type="button"
                            className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}>Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}