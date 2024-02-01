import styles from "./editProfile.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { updateCurrentUser } from '@/utils/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { capitalize } from "lodash";
import { hobbyIcons } from "@/utils/common";

export default function TimelineEditInterests({ currentUser }) {

    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({
        hobbies: currentUser.hobbies,
        newHobby: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        // console.log("Current User in Edit Info ==> ", currentUser);

    }, [currentUser])

    const handleAddInterestClick = () => {
        // console.log("Formdata ==> ", formData);
        let hobbiesArray;
        if (formData.newHobby.includes(',')) {
            hobbiesArray = formData.newHobby.replace(/\s/g, '').toLowerCase().split(',');
        } else {
            hobbiesArray = [formData.newHobby];
        }

        // console.log(hobbiesArray);

        // Filter out duplicates and existing hobbies from newHobbiesArray
        hobbiesArray = hobbiesArray.filter(hobby => {
            return !formData.hobbies.includes(hobby) && !currentUser.hobbies.includes(hobby);
        });

        // If no new hobbies to add, return
        if (hobbiesArray.length === 0) {
            return;
        }

        const uniqueHobbies = new Set([...formData.hobbies, ...hobbiesArray]);

        const updatedFormData = {
            hobbies: [...uniqueHobbies]
        }

        // console.log(updatedFormData);

        dispatch(updateCurrentUser({ userProfileId: currentUser.profileId, userData: updatedFormData }))
            .then((action) => {
                // console.log(action)

                Swal.fire({
                    icon: 'success',
                    title: 'Interests Successfully Added!',
                    text: 'Your interests updated successfully.',
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

    const handleRemoveHobby = (e) => {
        // console.log("Hobbies ==> ", formData.hobbies);

        const hobbyName = $(e.currentTarget).prev().attr('id');

        // console.log("Hobby Name ==> ", hobbyName);

        const updatedHobbies = formData.hobbies.filter(hobby => hobby !== hobbyName);
        const updatedFormData = {
            hobbies: updatedHobbies
        };

        // console.log(updatedFormData);

        dispatch(updateCurrentUser({ userProfileId: currentUser.profileId, userData: updatedFormData }))
            .then((action) => {
                // console.log(action)


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
                        <Icon icon="ph:heart-thin" />
                        My interests
                    </h4>
                    <div className={`${styles.line}`}></div>
                    <p className={`para`}>Edit your interests here.</p>
                    <div className={`${styles.line}`}></div>
                </div>
                <div className={`${styles.editBlock}`}>
                    <ul className={`${styles.listInline} ${styles.interests}`}>
                        {currentUser?.hobbies?.map(hobby =>
                            <li key={hobby}>
                                <Link id={hobby} className={`${styles.lnkBtn}`} href="" onClick={(e) => e.preventDefault()}>
                                    {hobbyIcons[hobby] ? <Icon icon={hobbyIcons[hobby]} />
                                        : <Icon icon={hobbyIcons['other']} />
                                    } {capitalize(hobby)}
                                </Link>
                                <div className={`${styles.removeHobby} removeHobby`} onClick={handleRemoveHobby}>
                                    <Icon icon="clarity:remove-solid" width='1.5rem' height='1.5rem' color="#fff" />
                                </div>
                            </li>
                        )}

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
                                name="newHobby"
                                title="Choose Interest"
                                placeholder="Add your interests here, like photography, painting etc."
                                value={formData.newHobby}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={`${styles.formGroup} form-group col-lg-4`}>
                            <button
                                type="button"
                                className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                                onClick={handleAddInterestClick}
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