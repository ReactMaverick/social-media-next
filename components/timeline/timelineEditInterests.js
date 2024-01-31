import styles from "./editProfile.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function TimelineEditInterests() {
    return (
        <div className={`${styles.editProfile}`}>
            <div>
                <div className={`block-title`}>
                    <h4 className={`${styles.heading}`}>
                        <Icon icon="ph:heart-thin" />
                        My interests
                    </h4>
                    <div className={`${styles.line}`}></div>
                    <p className={`para`}>Edit your interests here.</p>
                    <div className={`${styles.line}`}></div>
                </div>
                <div className={`${styles.editBlock}`}>
                    <ul className={`${styles.listInline} ${styles.interests}`}>
                        <li>
                            <Link className={`${styles.lnkBtn}`} href="">
                                <Icon icon="ion:bicycle" /> Bycicle
                            </Link>
                        </li>
                        <li>
                            <Link className={`${styles.lnkBtn}`} href="">
                                <Icon icon="solar:camera-broken" /> Photgraphy
                            </Link>
                        </li>
                        <li>
                            <Link className={`${styles.lnkBtn}`} href="">
                                <Icon icon="mdi:cart-outline" /> Shopping
                            </Link>
                        </li>
                        <li>
                            <Link className={`${styles.lnkBtn}`} href="">
                                <Icon icon="guidance:plane" /> Traveling
                            </Link>
                        </li>
                        <li>
                            <Link className={`${styles.lnkBtn}`} href="">
                                <Icon icon="ion:restaurant-outline" /> Eating
                            </Link>
                        </li>
                    </ul>
                    <div className={`${styles.line}`}></div>
                    <div className={`${styles.row} row`}>
                        <p className={`${styles.customLabel}`}>
                            <strong>Add interests</strong>
                        </p>
                        <div className={`${styles.formGroup} form-group col-lg-8`}>
                            <input
                                id="add-interest"
                                className={`${styles.formControl} form-control input-group-lg`}
                                type="text"
                                name="interest"
                                title="Choose Interest"
                                value="Interests. For example, photography"
                            />
                        </div>
                        <div className={`${styles.formGroup} form-group col-lg-4`}>
                            <button
                                type="button"
                                className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}