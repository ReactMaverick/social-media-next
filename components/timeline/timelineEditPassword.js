import styles from "./editProfile.module.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { updateCurrentUser } from '@/utils/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import bcrypt from 'bcryptjs';
import Link from "next/link";

export default function TimelineEditPassword({ currentUser }) {

    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePasswordChangeButtonClick = async () => {
        console.log("Form Data ==> ", formData);

        try {
            const { oldPassword, newPassword, confirmNewPassword } = formData;

            // Compare newPassword and confirmNewPassword
            if (newPassword !== confirmNewPassword) {
                Swal.fire({
                    icon: 'error',
                    title: 'Password Mismatch',
                    text: 'New password and confirm password do not match',
                });
                return;
            }

            // Use bcrypt to compare oldPassword with the existing hashed password
            const isPasswordMatch = await bcrypt.compare(oldPassword, currentUser.password);

            // console.log(isPasswordMatch);

            if (!isPasswordMatch) {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrect Password',
                    text: 'The old password you entered is incorrect',
                });
                return;
            }

            const passwordValidationResult = isPasswordValid(newPassword);

            if (!passwordValidationResult.isValid) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Password',
                    text: passwordValidationResult.error,
                });
                return;
            }

            // Use bcrypt to compare oldPassword with the existing hashed password
            const isNewPasswordSame = await bcrypt.compare(newPassword, currentUser.password);

            if (isNewPasswordSame) {
                Swal.fire({
                    icon: 'error',
                    title: 'Same Password Error!',
                    text: 'The new password cannot be the same as the old password',
                });
                return;
            }

            const updatedFormData = {
                password: newPassword
            }

            dispatch(updateCurrentUser({ userProfileId: currentUser.profileId, userData: updatedFormData }))
                .then((action) => {
                    // console.log(action)

                    Swal.fire({
                        icon: 'success',
                        title: 'Password Successfully Updated!',
                        text: 'Your password has been updated successfully.',
                    }).then((result) => {
                        // This code will be executed after the user clicks "OK"
                        // if (result.isConfirmed) {
                        //     interface
                        // }

                        // Reset form data
                        setFormData({
                            oldPassword: '',
                            newPassword: '',
                            confirmNewPassword: '',
                        });
                    });
                })
                .catch((error) => {
                    console.error('Error Updating user:', error);
                });




        } catch (error) {
            console.error('Error updating user:', error);
        }

    }

    const isPasswordValid = (password) => {
        // Check if password is less than 8 characters
        if (password.trim().length < 8) {
            return { isValid: false, error: 'Password must be at least 8 characters long' };
        }

        // Check if password contains at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            return { isValid: false, error: 'Password must contain at least one uppercase letter' };
        }

        // Check if password contains at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            return { isValid: false, error: 'Password must contain at least one lowercase letter' };
        }

        // Check if password contains at least one digit
        if (!/\d/.test(password)) {
            return { isValid: false, error: 'Password must contain at least one digit' };
        }

        // Check if password contains at least one special character
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            return { isValid: false, error: 'Password must contain at least one special character' };
        }

        // If all checks pass, the password is considered valid
        return { isValid: true };
    }

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
                                    name="oldPassword"
                                    title="Enter password"
                                    placeholder="Old password"
                                    value={formData.oldPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="my-New-password">New password</label>
                                <input
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="password"
                                    name="newPassword"
                                    title="Enter password"
                                    placeholder="New password"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={`${styles.formGroup} form-group col-lg-6`}>
                                <label htmlFor="my-New-password">Confirm password</label>
                                <input
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="password"
                                    name="confirmNewPassword"
                                    title="Enter password"
                                    placeholder="Confirm password"
                                    value={formData.confirmNewPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                            onClick={handlePasswordChangeButtonClick}
                        >
                            Update Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

