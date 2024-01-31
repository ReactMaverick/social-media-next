import styles from "./editProfile.module.css";
import { Icon } from "@iconify/react"

export default function TimelineEditWork() {
    return (
        <div className={`${styles.editProfile}`}>
            <div>
                <div className={`block-title`}>
                    <h4 className={`${styles.heading}`}>
                        <Icon icon="ph:book-light" />
                        My education
                    </h4>
                    <div className={`${styles.line}`}></div>
                    <p className={`para`}>Edit your education details here.</p>
                    <div className={`${styles.line}`}></div>
                </div>
                <div className={`${styles.editBlock}`}>
                    <form
                        name="education"
                        id="education"
                        className={`${styles.formInline}`}
                    >
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="school">My university</label>
                                <input
                                    id="school"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="school"
                                    title="Enter School"
                                    placeholder="My School"
                                    value="Harvard Unversity"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="date-from">From</label>
                                <input
                                    id="date-from"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="date"
                                    title="Enter a Date"
                                    placeholder="from"
                                    value="2012"
                                />
                            </div>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="date-to">To</label>
                                <input
                                    id="date-to"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="date"
                                    title="Enter a Date"
                                    placeholder="to"
                                    value="2016"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className="className={`${styles.formGroup} form-group col-lg-12`}">
                                <label htmlFor="edu-description">Description</label>
                                <textarea
                                    id="edu-description"
                                    name="description"
                                    className={`${styles.formControltextarea} form-control`}
                                    placeholder="Some texts about my education "
                                    rows={4}
                                    cols={400}
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="graduate">Graduated?:-</label>{" "}
                                <input
                                    id="graduate"
                                    type="checkbox"
                                    name="graduate"
                                    value="graduate"
                                    checked
                                />{" "}
                                Yes!!
                            </div>
                        </div>
                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <div className={`block-title`}>
                    <h4 className={`${styles.heading}`}>
                        <Icon icon="ph:briefcase-light" />
                        Work Experiences
                    </h4>
                    <div className={`${styles.line}`}></div>
                    <p className={`para`}>Edit your education details here.</p>
                    <div className={`${styles.line}`}></div>
                </div>
                <div className={`${styles.editBlock}`}>
                    <form
                        name="education"
                        id="education"
                        className={`${styles.formInline}`}
                    >
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="school">Company</label>
                                <input
                                    id="Company"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="Company"
                                    title="Enter Company"
                                    placeholder="My Company"
                                    value="Envato Inc"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="school">Designation</label>
                                <input
                                    id="Designation"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="Designation"
                                    title="Enter Designation"
                                    placeholder="My Designation"
                                    value="Exclusive Author"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="date-from">From</label>
                                <input
                                    id="date-from"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="date"
                                    title="Enter a Date"
                                    placeholder="from"
                                    value="2016"
                                />
                            </div>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="date-to">To</label>
                                <input
                                    id="date-to"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="date"
                                    title="Enter a Date"
                                    placeholder="to"
                                    value="Present"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="school">City/Town</label>
                                <input
                                    id="City-town"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="City"
                                    title="Enter City"
                                    placeholder="My City"
                                    value="Melbourne"
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="edu-description">Description</label>
                                <textarea
                                    id="edu-description"
                                    name="description"
                                    className={`${styles.formControltextarea}`}
                                    placeholder="Some texts about my education "
                                    value="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"
                                    rows={5}
                                    cols={500}
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}