'use client'
import { useEffect, useState } from 'react';
import styles from './navbarForm.module.css';
import { Icon } from '@iconify/react';
import { getImageBlob } from '@/utils/common';
import Link from 'next/link';

export default function NavbarForm({ users }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [userImageBlobURLs, setUserImageBlobURLs] = useState({});
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        // Fetch blob URLs for friend images
        const fetchUserImageBlobURLs = async () => {
            const userBlobURLs = {};
            for (const user of users) {

                const userBlobURL = user.image !== '' ? await getImageBlob(user.image) : `${process.env.BASE_URL + `/images/imageLoader.gif`}`;

                // console.log("Blob Url ==> ", postBlobURL);
                userBlobURLs[user._id] = userBlobURL;

                setUserImageBlobURLs(userBlobURLs);
            };
        }

        if (users?.length)
            fetchUserImageBlobURLs();
    }, [users]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);

        const query = e.target.value.trim().toLowerCase();

        // console.log("query ==>", query);

        if (query.length > 0) {
            const searchUsers = users.filter(user => (user.firstName.toLowerCase()).includes(query) || (user.lastName).includes(query));

            setFilteredUsers(searchUsers);
            setShowResults(true); // Show results when input changes
        } else {
            setFilteredUsers([]);
            setShowResults(true); // Show results when input changes
        }
    }

    const handleBlur = () => {
        setShowResults(false); // Hide results when input loses focus
    }


    // console.log("Users in navbarform ==> ", users);

    useEffect(() => {
        // console.log("Filtered Users ==> ", filteredUsers);
    }, [users, filteredUsers])

    return (
        <form
            className="d-flex justify-content-center"
        >
            <div
                className={`${styles.formGroup} form-group`}
            >
                <Icon className={styles.searchIcon} icon="ic:round-search" color="white" />
                <input
                    className={`${styles.formControl}`}
                    type="text"
                    placeholder="Search friends, users"
                    name='searchTerm'
                    value={searchTerm}
                    onChange={handleChange}
                    autoComplete='off'
                    onBlur={handleBlur}
                    onFocus={() => setShowResults(true)} // Show results when input is focused
                />
            </div>
            {(users?.length && showResults) &&
                <ul
                    className={`${styles.searchList} form-group`}
                >
                    {filteredUsers.map((user) =>
                        <Link
                            key={user._id}
                            href={'/0/timeline/' + user.profileId}
                        >
                            {userImageBlobURLs[user._id] ?
                                <img
                                    className={styles.profilePhotoSm}
                                    src={userImageBlobURLs[user._id]}
                                    loading="lazy"
                                /> :
                                <img
                                    className={styles.profilePhotoSm}
                                    src={process.env.BASE_URL + '/images/imageLoader.gif'}
                                    loading="lazy"
                                />
                            }

                            {user.firstName + ' ' + user.lastName}
                        </Link>
                    )}

                </ul>
            }

        </form>
    )
}