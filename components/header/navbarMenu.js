'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Use useRouter from next/navigation
import { signOut } from 'next-auth/react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { selectCurrentUser, setCurrentUser, clearCurrentUser } from '@/utils/features/userSlice';

export default function NavbarMenu({ currentUser }) {

    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        const result = await signOut({ redirect: false });

        // Check the result object if needed
        // console.log('Sign-out result:', result);

        if (result?.url) {

            dispatch(clearCurrentUser(currentUser));

            router.push(result.url);
        } else {
            console.error("Error Signing-out user");
        }
    };

    return (
        <ul
            className="navbar-nav mb-2 mb-lg-0"
        >
            <li
                className="nav-item"
            >
                <Link
                    className="nav-link"
                    href={process.env.BASE_URL}
                    role="button"
                    style={{

                        backgroundColor: "transparent",
                        textDecoration: "none",
                        outline: "none",
                        cursor: "pointer",
                        padding: "10px 15px",

                        paddingTop: "15px",
                        paddingBottom: "15px",
                        lineHeight: "26px",
                        color: "rgb(255, 255, 255)",
                        fontSize: "13px",
                        fontWeight: 600,
                    }}
                >
                    Home{" "}
                </Link>
            </li>
            <li
                className="nav-item dropdown"

            >
                <Link
                    className="nav-link dropdown-toggle"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href=""
                    role="button"
                    style={{

                        backgroundColor: "transparent",
                        textDecoration: "none",
                        outline: "none",
                        cursor: "pointer",
                        padding: "10px 15px",

                        paddingTop: "15px",
                        paddingBottom: "15px",
                        lineHeight: "26px",
                        color: "rgb(255, 255, 255)",
                        fontSize: "13px",
                        fontWeight: 600,
                    }}
                >
                    Newsfeed{" "}
                    <span >
                        <img
                            src={process.env.BASE_URL + "/images/down_arrow.png"}
                            style={{

                                border: "0px",
                                verticalAlign: "middle",
                            }}
                        />
                    </span>
                </Link>
                <ul
                    className="dropdown-menu"
                    style={{
                        listStyle: "none",
                        borderRadius: "4px",
                        backgroundColor: "rgb(35, 31, 32)",
                    }}
                >
                    <li
                        style={{

                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            className="dropdown-item"
                            href={process.env.BASE_URL + '/0/newsfeed'}
                            style={{

                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",


                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Newsfeed
                        </Link>
                    </li>

                    <li
                        style={{

                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            className="dropdown-item"
                            href={process.env.BASE_URL + '/0/newsfeed/friends'}
                            style={{

                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",


                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            My friends
                        </Link>
                    </li>
                    <li
                        style={{

                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            className="dropdown-item"
                            href={process.env.BASE_URL + '/0/newsfeed/messages'}
                            style={{

                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",


                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Messages
                        </Link>
                    </li>
                    <li
                        style={{

                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            className="dropdown-item"
                            href={process.env.BASE_URL + '/0/newsfeed/images'}
                            style={{

                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",


                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Images
                        </Link>
                    </li>
                    <li
                        style={{

                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            className="dropdown-item"
                            href={process.env.BASE_URL + '/0/newsfeed/videos'}
                            style={{

                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",


                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Videos
                        </Link>
                    </li>
                </ul>
            </li>
            <li
                className="nav-item dropdown"

            >
                <Link
                    className="nav-link dropdown-toggle"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href=""
                    role="button"
                    style={{

                        backgroundColor: "transparent",
                        textDecoration: "none",
                        outline: "none",
                        cursor: "pointer",
                        padding: "10px 15px",

                        paddingTop: "15px",
                        paddingBottom: "15px",
                        lineHeight: "26px",
                        color: "rgb(255, 255, 255)",
                        fontSize: "13px",
                        fontWeight: 600,
                    }}
                >
                    Timeline{" "}
                    <span >
                        <img
                            src={process.env.BASE_URL + "/images/down_arrow.png"}
                            style={{

                                border: "0px",
                                verticalAlign: "middle",
                            }}
                        />
                    </span>
                </Link>
                <ul
                    className="dropdown-menu login"
                    style={{
                        listStyle: "none",
                        borderRadius: "4px",
                        backgroundColor: "rgb(35, 31, 32)",
                    }}
                >
                    <li
                        style={{

                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            className="dropdown-item"
                            href={process.env.BASE_URL + `/0/timeline/${currentUser?.profileId}`}
                            style={{

                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",


                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Timeline
                        </Link>
                    </li>
                    <li
                        style={{

                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            className="dropdown-item"
                            href={process.env.BASE_URL + `/0/timeline/${currentUser?.profileId}/about`}
                            style={{

                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",


                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            About
                        </Link>
                    </li>
                    <li
                        style={{

                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            className="dropdown-item"
                            href={process.env.BASE_URL + `/0/timeline/${currentUser?.profileId}/album`}
                            style={{

                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",


                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Album
                        </Link>
                    </li>
                    <li
                        style={{

                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            className="dropdown-item"
                            href={process.env.BASE_URL + `/0/timeline/${currentUser?.profileId}/friends`}
                            style={{

                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",


                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Friends
                        </Link>
                    </li>
                    <li
                        style={{

                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            className="dropdown-item"
                            href={process.env.BASE_URL + `/0/timeline/${currentUser?.profileId}/edit`}
                            style={{

                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",


                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Edit
                        </Link>
                    </li>
                </ul>
            </li>

            <li
                className="nav-item"

            >
                <Link
                    className="nav-link"
                    href={process.env.BASE_URL + `/0/contact`}
                    style={{

                        backgroundColor: "transparent",
                        textDecoration: "none",
                        outline: "none",
                        padding: "10px 15px",

                        paddingTop: "15px",
                        paddingBottom: "15px",
                        lineHeight: "26px",
                        color: "rgb(255, 255, 255)",
                        fontSize: "13px",
                        fontWeight: 600,
                    }}
                >
                    Contact
                </Link>
            </li>

            {currentUser && (
                <li
                    className="nav-item"

                    key={`${currentUser._id}_logout`}
                >
                    <button
                        onClick={handleLogout}
                        style={{

                            backgroundColor: "transparent",
                            textDecoration: "none",
                            outline: "none",
                            padding: "10px 15px",
                            position: "relative",

                            paddingTop: "15px",
                            paddingBottom: "15px",
                            lineHeight: "26px",
                            color: "rgb(255, 255, 255)",
                            fontSize: "13px",
                            fontWeight: 600,
                            border: 'none',
                        }}
                    >
                        Logout
                    </button>
                </li>
            )}
        </ul>
    );
};