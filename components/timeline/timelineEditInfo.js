import styles from './editProfile.module.css';
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import DayOptions from "./dayOptions";
import MonthOptions from "./monthOptions";
import YearOptions from "./yearOptions";
import CountryOptions from "./countryOptions";
import { updateCurrentUser } from '@/utils/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';

export default function TimelineEditInfo({ currentUser }) {

    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({
        firstName: currentUser?.firstName,
        lastName: currentUser?.lastName,
        email: currentUser?.email,
        day: new Date(currentUser.dob).getDate(),
        month: new Date(currentUser.dob).getMonth(),
        year: new Date(currentUser.dob).getFullYear(),
        gender: currentUser?.gender,
        city: currentUser?.city,
        country: currentUser?.country,
        aboutMe: currentUser?.about_me,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // For radio inputs, only update the formData if the radio button is checked
        if (type === "radio" && !checked) {
            return; // Don't update formData if the radio button is not checked
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        // console.log("Current User in Edit Info ==> ", currentUser);

    }, [currentUser])

    const handleSaveChangesClick = () => {
        // console.log("FormData ==> ", formData);

        // Extract day, month, and year from formData
        const { firstName, lastName, email, day, month, year, gender, city, country, aboutMe } = formData;

        // Construct a Date object
        const dobDate = new Date(year, month, day);

        // Format the date string to ISO 8601 format
        const dobISOString = dobDate.toISOString();

        const updatedFormdata = {
            firstName,
            lastName,
            email,
            dob: dobISOString,
            gender,
            city,
            country,
            about_me: aboutMe
        }

        // console.log("Updated form data ==> ", updatedFormdata);

        dispatch(updateCurrentUser({ userProfileId: currentUser.profileId, userData: updatedFormdata }))
            .then((action) => {
                // console.log(action)

                Swal.fire({
                    icon: 'success',
                    title: 'Profile Info Updated!',
                    text: 'Your profile details updated successfully.',
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
            <div className={`block-title`}>
                <h4 className={`${styles.heading}`}>
                    <Icon icon="carbon:information" />
                    Edit basic information
                </h4>
                <div className={`${styles.line}`}></div>
                <p className={`para`}>Edit your basic information here.</p>
                <div className={`${styles.line}`}></div>

                <div className={`${styles.editBlock}`}>
                    <form
                        name="basic-info"
                        id="basic-info"
                        className={`${styles.formInline}`}
                    >
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="firstname">First name</label>
                                <input
                                    id="firstname"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="firstName"
                                    title="Enter first name"
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="lastname">Last name</label>
                                <input
                                    id="lastname"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="lastName"
                                    title="Enter last name"
                                    placeholder="Last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="email">My email</label>
                                <input
                                    id="email"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="email"
                                    title="Enter Email"
                                    placeholder="My Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <p className={`${styles.row} custom-label`}>
                                <strong>Date of Birth</strong>
                            </p>
                            <div
                                className={`${styles.formGroup} form-group col-sm-3 col-lg-3`}
                            >
                                <select
                                    className={`${styles.formControl} form-control`}
                                    id="day"
                                    onChange={handleChange}
                                    name='day'
                                    value={formData.day}
                                >
                                    <option value="Day">Day</option>
                                    <DayOptions />
                                </select>
                            </div>
                            <div
                                className={`${styles.formGroup} form-group col-sm-3 col-lg-3`}
                            >
                                <select
                                    className={`${styles.formControl} form-control`}
                                    id="month"
                                    name='month'
                                    onChange={handleChange}
                                    value={formData.month}
                                >
                                    <option value="Month">Month</option>
                                    <MonthOptions />
                                </select>
                            </div>
                            <div
                                className={`${styles.formGroup} form-group col-sm-6 col-lg-6`}
                            >
                                <select
                                    className={`${styles.formControl} form-control`}
                                    id="year"
                                    name='year'
                                    value={formData.year}
                                    onChange={handleChange}
                                >
                                    <option value="Year">Year</option>
                                    <YearOptions />
                                </select>
                            </div>
                        </div>
                        <div
                            className={`${styles.formGroup} ${styles.gender} form-group`}
                        >
                            <span className={`${styles.customLabel} custom-label`}>
                                <strong>I am a: </strong>
                            </span>
                            <label className={`${styles.radioInline} radio-inline`}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={handleChange}
                                />
                                Male
                            </label>
                            <label className={`${styles.radioInline} radio-inline`}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={handleChange}
                                />
                                Female
                            </label>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="city"> My city</label>
                                <input
                                    id="city"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="city"
                                    title="Enter city"
                                    placeholder="Your city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor={formData.country}>My country</label>
                                <select
                                    className={`${styles.formControl} form-control`}
                                    id="country"
                                    name='country'
                                    value={formData.country}
                                    onChange={handleChange}
                                >
                                    <option value="country">Country</option>
                                    <CountryOptions />
                                </select>
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                                <label htmlFor="my-info">About me</label>
                                <textarea
                                    id="my-info"
                                    name="aboutMe"
                                    className={`${styles.formControltextarea} form-control`}
                                    placeholder="Some texts about me"
                                    rows={4}
                                    cols={400}
                                    value={formData.aboutMe}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                            onClick={handleSaveChangesClick}
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}