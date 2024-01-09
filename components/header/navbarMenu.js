import Link from "next/link";

export default function NavbarMenu() {
    return (
        <ul
            className="nav navbar-nav navbar-right main-menu"
            style={{
                boxSizing: "border-box",
                listStyle: "none",
                paddingLeft: "0px",
                margin: "0px",
                marginTop: "0px",
                marginBottom: "0px",
                marginRight: "-15px",
                float: "right",
                flexDirection: "row",
            }}
        >
            <li
                className="dropdown"
                style={{
                    boxSizing: "border-box",
                    listStyleImage:
                        'url("../../images/list_bullet.png")',
                    position: "relative",
                    display: "block",
                    float: "left",
                }}
            >
                <Link
                    className=""
                    href="/"
                    type="button"
                    style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        outline: "none",
                        cursor: "pointer",
                        padding: "10px 15px",
                        position: "relative",
                        display: "block",
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
                className="dropdown"
                style={{
                    boxSizing: "border-box",
                    listStyleImage:
                        'url("../../images/list_bullet.png")',
                    position: "relative",
                    display: "block",
                    float: "left",
                }}
            >
                <Link
                    className="dropdown-toggle"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="#"
                    type="button"
                    style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        outline: "none",
                        cursor: "pointer",
                        padding: "10px 15px",
                        position: "relative",
                        display: "block",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        lineHeight: "26px",
                        color: "rgb(255, 255, 255)",
                        fontSize: "13px",
                        fontWeight: 600,
                    }}
                >
                    Newsfeed{" "}
                    <span style={{ boxSizing: "border-box" }}>
                        <img
                            src="../../images/down_arrow.png"
                            style={{
                                boxSizing: "border-box",
                                border: "0px",
                                verticalAlign: "middle",
                            }}
                        />
                    </span>
                </Link>
                <ul
                    className="dropdown-menu newsfeed-home"
                    style={{
                        boxSizing: "border-box",
                        margin: "2px 0px 0px",
                        listStyle: "none",
                        borderRadius: "4px",
                        position: "absolute",
                        top: "100%",
                        zIndex: 1000,
                        float: "left",
                        minWidth: "160px",
                        marginBottom: "0px",
                        fontSize: "14px",
                        textAlign: "left",
                        right: "0px",
                        left: "auto",
                        marginTop: "0px",
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                        background: "rgb(35, 31, 32)",
                        border: "0px",
                        padding: "0px",
                        backgroundClip: "initial",
                        backgroundColor: "rgb(35, 31, 32)",
                        boxShadow: "none",
                        paddingLeft: "0px",
                    }}
                >
                    <li
                        style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/newsfeed"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
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
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/newsfeedPeopleNearby"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Poeple Nearly
                        </Link>
                    </li>
                    <li
                        style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/newsfeedFriends"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
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
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/newsfeedMessages"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Chatroom
                        </Link>
                    </li>
                    <li
                        style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/newsfeedImages"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
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
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/newsfeedVideos"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
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
                className="dropdown"
                style={{
                    boxSizing: "border-box",
                    listStyleImage:
                        'url("../../images/list_bullet.png")',
                    position: "relative",
                    display: "block",
                    float: "left",
                }}
            >
                <Link
                    className="dropdown-toggle"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="#"
                    type="button"
                    style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        outline: "none",
                        cursor: "pointer",
                        padding: "10px 15px",
                        position: "relative",
                        display: "block",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        lineHeight: "26px",
                        color: "rgb(255, 255, 255)",
                        fontSize: "13px",
                        fontWeight: 600,
                    }}
                >
                    Timeline{" "}
                    <span style={{ boxSizing: "border-box" }}>
                        <img
                            src="../../images/down_arrow.png"
                            style={{
                                boxSizing: "border-box",
                                border: "0px",
                                verticalAlign: "middle",
                            }}
                        />
                    </span>
                </Link>
                <ul
                    className="dropdown-menu login"
                    style={{
                        boxSizing: "border-box",
                        margin: "2px 0px 0px",
                        listStyle: "none",
                        borderRadius: "4px",
                        position: "absolute",
                        top: "100%",
                        zIndex: 1000,
                        float: "left",
                        minWidth: "160px",
                        marginBottom: "0px",
                        fontSize: "14px",
                        textAlign: "left",
                        right: "0px",
                        left: "auto",
                        marginTop: "0px",
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                        background: "rgb(35, 31, 32)",
                        border: "0px",
                        padding: "0px",
                        backgroundClip: "initial",
                        backgroundColor: "rgb(35, 31, 32)",
                        boxShadow: "none",
                        paddingLeft: "0px",
                    }}
                >
                    <li
                        style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/timeline"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
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
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/timelineAbout"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Timeline About
                        </Link>
                    </li>
                    <li
                        style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/timelineAlbum"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Timeline Album
                        </Link>
                    </li>
                    <li
                        style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/timelineFriends"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Timeline Friends
                        </Link>
                    </li>
                    <li
                        style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/editBasicInfo"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Edit: Basic Info
                        </Link>
                    </li>
                    <li
                        style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/editWork"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Edit: Work
                        </Link>
                    </li>
                    <li
                        style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/editInterests"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Edit: Interests
                        </Link>
                    </li>
                    <li
                        style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/editProfileSettings"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Account Settings
                        </Link>
                    </li>
                    <li
                        style={{
                            boxSizing: "border-box",
                            listStyle: "none",
                            padding: "5px 0px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            listStyleImage: "initial",
                        }}
                    >
                        <Link
                            href="/0/editProfilePassword"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "3px 20px",
                                whiteSpace: "nowrap",
                                display: "block",
                                clear: "both",
                                fontWeight: 600,
                                color: "rgb(255, 255, 255)",
                                fontSize: "13px",
                                lineHeight: "16px",
                            }}
                        >
                            Change Password
                        </Link>
                    </li>
                </ul>
            </li>

            <li
                className="dropdown"
                style={{
                    boxSizing: "border-box",
                    listStyleImage:
                        'url("../../images/list_bullet.png")',
                    position: "relative",
                    display: "block",
                    float: "left",
                }}
            >
                <Link
                    href="/0/contact"
                    style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        outline: "none",
                        padding: "10px 15px",
                        position: "relative",
                        display: "block",
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
        </ul>
    );
};