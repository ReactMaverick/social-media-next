import styles from "./editProfile.module.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { updateCurrentUser } from '@/utils/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';

export default function TimelineEditWork({ currentUser }) {

    const dispatch = useAppDispatch();

    const [educationFormData, setEducationFormData] = useState({
        university_name: currentUser.university_name,
        passout_year: currentUser.passout_year,
        education_details: currentUser.education_details,
    });

    const [workFormData, setWorkFormData] = useState({
        company_name: currentUser.company_name,
        designation: currentUser.designation,
        company_city: currentUser.company_city,
        work_details: currentUser.work_details
    });

    const handleEducationChange = (e) => {
        const { name, value } = e.target;

        setEducationFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleWorkChange = (e) => {
        const { name, value } = e.target;

        setWorkFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        // console.log("Current User in Edit Info ==> ", currentUser);

    }, [currentUser])

    const handleEducationSaveClick = () => {
        // console.log("Education Form Data ==> ", educationFormData);

        dispatch(updateCurrentUser({ userProfileId: currentUser.profileId, userData: educationFormData }))
            .then((action) => {
                // console.log(action)

                Swal.fire({
                    icon: 'success',
                    title: 'Education Details Updated!',
                    text: 'Your education details updated successfully.',
                }).then((result) => {
                    // This code will be executed after the user clicks "OK"
                    // if (result.isConfirmed) {
                    //     interface
                    // }
                });
            })
            .catch((error) => {
                console.error('Error Updating user:', error);
            });
    }

    const handleWorkSaveClick = () => {
        // console.log("Work Form Data ==> ", workFormData);

        dispatch(updateCurrentUser({ userProfileId: currentUser.profileId, userData: workFormData }))
            .then((action) => {
                // console.log(action)

                Swal.fire({
                    icon: 'success',
                    title: 'Work Details Updated!',
                    text: 'Your work details updated successfully.',
                }).then((result) => {
                    // This code will be executed after the user clicks "OK"
                    // if (result.isConfirmed) {
                    //     interface
                    // }
                });
            })
            .catch((error) => {
                console.error('Error Updating user:', error);
            });
    }

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
                                <label htmlFor="school">My University</label>
                                <input
                                    id="school"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="university_name"
                                    title="Enter University"
                                    placeholder="Enter university name"
                                    value={educationFormData.university_name}
                                    onChange={handleEducationChange}
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="date-from">Passout Year</label>
                                <input
                                    id="date-from"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="passout_year"
                                    title="Enter a Date"
                                    placeholder="Enter year of passout"
                                    value={educationFormData.passout_year}
                                    onChange={handleEducationChange}
                                />
                            </div>

                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="edu-description">Education Details</label>
                                <textarea
                                    id="edu-description"
                                    name="education_details"
                                    className={`${styles.formControltextarea} form-control`}
                                    placeholder="Details about my education "
                                    rows={4}
                                    cols={400}
                                    value={educationFormData.education_details}
                                    onChange={handleEducationChange}
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                            onClick={handleEducationSaveClick}
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
                        Work Details
                    </h4>
                    <div className={`${styles.line}`}></div>
                    <p className={`para`}>Edit your work details here.</p>
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
                                <label htmlFor="school">Company Name</label>
                                <input
                                    id="Company"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="company_name"
                                    title="Enter Company"
                                    placeholder="Enter company name"
                                    value={workFormData.company_name}
                                    onChange={handleWorkChange}
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
                                    name="designation"
                                    title="Enter Designation"
                                    placeholder="Enter designation"
                                    value={workFormData.designation}
                                    onChange={handleWorkChange}
                                />
                            </div>
                        </div>

                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="school">Company City/Town</label>
                                <input
                                    id="City-town"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="company_city"
                                    title="Enter City"
                                    placeholder="Enter company city name"
                                    value={workFormData.company_city}
                                    onChange={handleWorkChange}
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="edu-description">Work Details</label>
                                <textarea
                                    id="edu-description"
                                    name="work_details"
                                    className={`${styles.formControltextarea}`}
                                    placeholder="Details about my work"
                                    value={workFormData.work_details}
                                    onChange={handleWorkChange}
                                    rows={5}
                                    cols={500}
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                            onClick={handleWorkSaveClick}
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}