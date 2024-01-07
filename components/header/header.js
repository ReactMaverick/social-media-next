import Link from "next/link";
import styles from './header.module.css';

export default function Header() {
    // console.log(styles.mainHeader);
    return (
        <header id="header" className={`${styles.mainHeader} ${styles.lazyLoad} lazy-load`} >
            <nav
                className="navbar navbar-default navbar-fixed-top menu"
                style={{
                    boxSizing: "border-box",
                    display: "block",
                    minHeight: "50px",
                    position: "fixed",
                    right: "0px",
                    left: "0px",
                    zIndex: 1030,
                    borderWidth: "0px 0px 1px",
                    top: "0px",
                    borderColor: "rgb(231, 231, 231)",
                    background: "rgb(35, 31, 32)",
                    border: "none",
                    borderRadius: "0px",
                    backgroundColor: "rgb(35, 31, 32)",
                    marginBottom: "0px",
                }}
            >
                <div className={`${styles.container} container`}>
                    <div
                        className="navbar-header"
                        style={{
                            boxSizing: "border-box",
                            float: "left",
                            marginRight: "0px",
                            marginLeft: "0px",
                        }}
                    >
                        <button
                            className="navbar-toggle collapsed"
                            type="button"
                            aria-expanded="false"
                            data-target="#bs-example-navbar-collapse-1"
                            style={{
                                boxSizing: "border-box",
                                margin: "0px",
                                font: "inherit",
                                color: "inherit",
                                overflow: "visible",
                                textTransform: "none",
                                appearance: "button",
                                cursor: "pointer",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                padding: "9px 10px",
                                border: "1px solid transparent",
                                borderRadius: "4px",
                                position: "relative",
                                float: "right",
                                marginTop: "8px",
                                marginRight: "15px",
                                marginBottom: "8px",
                                backgroundColor: "transparent",
                                backgroundImage: "none",
                                display: "none",
                                borderColor: "rgb(221, 221, 221)",
                            }}
                        >
                            <span
                                className="sr-only"
                                style={{
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    margin: "-1px",
                                    overflow: "hidden",
                                    border: "0px",
                                    position: "absolute",
                                    width: "1px",
                                    height: "1px",
                                    clip: "rect(0px, 0px, 0px, 0px)",
                                }}
                            >
                                Toggle navigation
                            </span>
                            <span
                                className="icon-bar"
                                style={{
                                    boxSizing: "border-box",
                                    borderRadius: "1px",
                                    display: "block",
                                    width: "22px",
                                    height: "2px",
                                    backgroundColor: "rgb(136, 136, 136)",
                                }}
                            />
                            <span
                                className="icon-bar"
                                style={{
                                    boxSizing: "border-box",
                                    borderRadius: "1px",
                                    display: "block",
                                    width: "22px",
                                    height: "2px",
                                    marginTop: "4px",
                                    backgroundColor: "rgb(136, 136, 136)",
                                }}
                            />
                            <span
                                className="icon-bar"
                                style={{
                                    boxSizing: "border-box",
                                    borderRadius: "1px",
                                    display: "block",
                                    width: "22px",
                                    height: "2px",
                                    marginTop: "4px",
                                    backgroundColor: "rgb(136, 136, 136)",
                                }}
                            />
                        </button>
                        <a
                            className="navbar-brand"
                            href="/"
                            style={{
                                boxSizing: "border-box",
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                outline: "none",
                                padding: "15px",
                                float: "left",
                                height: "50px",
                                fontSize: "18px",
                                lineHeight: "20px",
                                color: "rgb(119, 119, 119)",
                                marginLeft: "-15px",
                            }}
                        >
                            <img
                                alt="logo"
                                src="images/logo.png"
                                style={{
                                    boxSizing: "border-box",
                                    border: "0px",
                                    verticalAlign: "middle",
                                    display: "block",
                                }}
                            />
                        </a>
                    </div>
                    <div
                        id="bs-example-navbar-collapse-1"
                        className="collapse navbar-collapse"
                        style={{
                            boxSizing: "border-box",
                            borderTop: "0px",
                            width: "auto",
                            boxShadow: "none",
                            paddingBottom: "0px",
                            paddingRight: "0px",
                            paddingLeft: "0px",
                            maxHeight: "340px",
                            marginRight: "0px",
                            marginLeft: "0px",
                            borderColor: "rgb(231, 231, 231)",
                            border: "0px",
                            overflow: "visible",
                            display: "block",
                            height: "auto",
                            overflowX: "visible",
                        }}
                    >
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
                                        'url("images/list_bullet.png")',
                                    position: "relative",
                                    display: "block",
                                    float: "left",
                                }}
                            >
                                <Link
                                    className=""
                                    href="/0/"
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
                                        'url("images/list_bullet.png")',
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
                                            src="images/down_arrow.png"
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                className="dropdown"
                                style={{
                                    boxSizing: "border-box",
                                    listStyleImage:
                                        'url("images/list_bullet.png")',
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
                                            src="images/down_arrow.png"
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
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
                                        <a
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
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li
                                className="dropdown"
                                style={{
                                    boxSizing: "border-box",
                                    listStyleImage:
                                        'url("images/list_bullet.png")',
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
                        <form
                            className="navbar-form navbar-right hidden-sm"
                            style={{
                                boxSizing: "border-box",
                                padding: "10px 15px",
                                borderTop: "1px solid transparent",
                                borderBottom: "1px solid transparent",
                                width: "auto",
                                paddingTop: "0px",
                                paddingBottom: "0px",
                                boxShadow: "none",
                                margin: "12px 0px",
                                marginLeft: "0px",
                                marginRight: "0px",
                                borderColor: "rgb(231, 231, 231)",
                                border: "0px",
                                float: "right",
                            }}
                        >
                            <div
                                className="form-group"
                                style={{
                                    boxSizing: "border-box",
                                    display: "inline-block",
                                    marginBottom: "0px",
                                    verticalAlign: "middle",
                                    position: "relative",
                                }}
                            >
                                <i
                                    className="icon ion-android-search"
                                    style={{
                                        boxSizing: "border-box",
                                        position: "absolute",
                                        left: "15px",
                                        top: "3px",
                                        color: "rgb(255, 255, 255)",
                                    }}
                                />
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search friends, photos, videos"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        font: "inherit",
                                        fontFamily: "inherit",
                                        padding: "6px 12px",
                                        transition:
                                            "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                                        lineHeight: 1.42857,
                                        display: "inline-block",
                                        verticalAlign: "middle",
                                        background: "rgba(255, 255, 255, 0.2)",
                                        border: "0px",
                                        borderRadius: "13px",
                                        backgroundImage: "initial",
                                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                                        boxShadow: "none",
                                        minWidth: "235px",
                                        color: "rgb(255, 255, 255)",
                                        height: "26px",
                                        fontSize: "13px",
                                        paddingLeft: "30px",
                                        width: "100%",
                                    }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}
