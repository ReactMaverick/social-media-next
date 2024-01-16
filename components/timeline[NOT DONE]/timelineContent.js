// NOT DONE
export default function TimelineContent() {
    return (
        <div
            id="page-contents"
            style={{ boxSizing: "border-box", padding: "30px 0px 50px" }}
        >
            <div
                className="row"
                style={{
                    boxSizing: "border-box",
                    marginRight: "-10px",
                    marginLeft: "-10px",
                }}
            >
                <div
                    className="col-md-3"
                    style={{
                        boxSizing: "border-box",
                        position: "relative",
                        minHeight: "1px",
                        paddingRight: "10px",
                        paddingLeft: "10px",
                        cssFloat: "left",
                        width: "25%",
                    }}
                />
                <div
                    className="col-md-7"
                    style={{
                        boxSizing: "border-box",
                        position: "relative",
                        minHeight: "1px",
                        paddingRight: "10px",
                        paddingLeft: "10px",
                        cssFloat: "left",
                        width: "58.3333%",
                    }}
                >
                    <div
                        className="create-post"
                        style={{
                            boxSizing: "border-box",
                            padding: "20px",
                            borderBottom: "1px solid rgb(241, 242, 242)",
                            width: "100%",
                            minHeight: "90px",
                            marginBottom: "20px",
                        }}
                    >
                        <div
                            className="row"
                            style={{
                                boxSizing: "border-box",
                                marginRight: "-10px",
                                marginLeft: "-10px",
                            }}
                        >
                            <div
                                className="col-md-7 col-sm-7"
                                style={{
                                    boxSizing: "border-box",
                                    position: "relative",
                                    minHeight: "1px",
                                    paddingRight: "10px",
                                    paddingLeft: "10px",
                                    cssFloat: "left",
                                    width: "58.3333%",
                                }}
                            >
                                <div
                                    className="form-group"
                                    style={{
                                        boxSizing: "border-box",
                                        marginBottom: "0px",
                                        display: "inline-flex",
                                    }}
                                >
                                    <img
                                        className="profile-photo-md"
                                        src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                        style={{
                                            boxSizing: "border-box",
                                            border: "0px",
                                            verticalAlign: "middle",
                                            borderRadius: "50%",
                                            height: "50px",
                                            width: "50px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <textarea
                                        id="exampleTextarea"
                                        className="form-control"
                                        name="texts"
                                        cols={30}
                                        rows={1}
                                        placeholder="Write what you wish"
                                        style={{
                                            margin: "0px",
                                            font: "inherit",
                                            overflow: "auto",
                                            fontFamily: "inherit",
                                            boxSizing: "border-box",
                                            padding: "6px 12px",
                                            transition:
                                                "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                                            display: "block",
                                            fontSize: "14px",
                                            lineHeight: 1.42857,
                                            background: "rgb(255, 255, 255)",
                                            borderRadius: "4px",
                                            backgroundImage: "initial",
                                            backgroundColor: "rgb(255, 255, 255)",
                                            color: "rgb(147, 149, 152)",
                                            height: "auto",
                                            border: "1px solid rgb(204, 204, 204)",
                                            boxShadow: "rgba(0, 0, 0, 0.075) 0px 1px 1px inset",
                                            width: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                className="col-md-5 col-sm-5"
                                style={{
                                    boxSizing: "border-box",
                                    position: "relative",
                                    minHeight: "1px",
                                    paddingRight: "10px",
                                    paddingLeft: "10px",
                                    cssFloat: "left",
                                    width: "41.6667%",
                                }}
                            >
                                <div
                                    className="tools"
                                    style={{ boxSizing: "border-box", padding: "8px 0px 10px" }}
                                >
                                    <ul
                                        className="publishing-tools list-inline"
                                        style={{
                                            boxSizing: "border-box",
                                            listStyle: "none",
                                            margin: "0px",
                                            padding: "5px 0px",
                                            display: "inline-block",
                                            textAlign: "left",
                                            marginTop: "0px",
                                            marginBottom: "0px",
                                            marginLeft: "0px",
                                            paddingLeft: "0px",
                                        }}
                                    >
                                        <li
                                            style={{
                                                boxSizing: "border-box",
                                                listStyleImage:
                                                    'url("https://themified.com/friend-finder/images/bullet.png")',
                                                display: "inline-block",
                                                paddingRight: "5px",
                                                paddingLeft: "5px",
                                            }}
                                        >
                                            <a
                                                href="https://themified.com/friend-finder/timeline.html#"
                                                style={{
                                                    boxSizing: "border-box",
                                                    backgroundColor: "transparent",
                                                    textDecoration: "none",
                                                    outline: "none",
                                                    color: "rgb(109, 110, 113)",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                <i
                                                    className="ion-compose"
                                                    style={{ boxSizing: "border-box" }}
                                                />
                                            </a>
                                        </li>
                                        <li
                                            style={{
                                                boxSizing: "border-box",
                                                listStyleImage:
                                                    'url("https://themified.com/friend-finder/images/bullet.png")',
                                                display: "inline-block",
                                                paddingRight: "5px",
                                                paddingLeft: "5px",
                                            }}
                                        >
                                            <a
                                                href="https://themified.com/friend-finder/timeline.html#"
                                                style={{
                                                    boxSizing: "border-box",
                                                    backgroundColor: "transparent",
                                                    textDecoration: "none",
                                                    outline: "none",
                                                    color: "rgb(109, 110, 113)",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                <i
                                                    className="ion-images"
                                                    style={{ boxSizing: "border-box" }}
                                                />
                                            </a>
                                        </li>
                                        <li
                                            style={{
                                                boxSizing: "border-box",
                                                listStyleImage:
                                                    'url("https://themified.com/friend-finder/images/bullet.png")',
                                                display: "inline-block",
                                                paddingRight: "5px",
                                                paddingLeft: "5px",
                                            }}
                                        >
                                            <a
                                                href="https://themified.com/friend-finder/timeline.html#"
                                                style={{
                                                    boxSizing: "border-box",
                                                    backgroundColor: "transparent",
                                                    textDecoration: "none",
                                                    outline: "none",
                                                    color: "rgb(109, 110, 113)",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                <i
                                                    className="ion-ios-videocam"
                                                    style={{ boxSizing: "border-box" }}
                                                />
                                            </a>
                                        </li>
                                        <li
                                            style={{
                                                boxSizing: "border-box",
                                                listStyleImage:
                                                    'url("https://themified.com/friend-finder/images/bullet.png")',
                                                display: "inline-block",
                                                paddingRight: "5px",
                                                paddingLeft: "5px",
                                            }}
                                        >
                                            <a
                                                href="https://themified.com/friend-finder/timeline.html#"
                                                style={{
                                                    boxSizing: "border-box",
                                                    backgroundColor: "transparent",
                                                    textDecoration: "none",
                                                    outline: "none",
                                                    color: "rgb(109, 110, 113)",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                <i
                                                    className="ion-map"
                                                    style={{ boxSizing: "border-box" }}
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                    <button
                                        className="btn btn-primary pull-right"
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px",
                                            font: "inherit",
                                            overflow: "visible",
                                            textTransform: "none",
                                            appearance: "button",
                                            fontFamily: "inherit",
                                            whiteSpace: "nowrap",
                                            display: "inline-block",
                                            marginBottom: "0px",
                                            lineHeight: 1.42857,
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            touchAction: "manipulation",
                                            cursor: "pointer",
                                            userSelect: "none",
                                            borderColor: "rgb(46, 109, 164)",
                                            background: "rgb(39, 170, 225)",
                                            padding: "7px 25px",
                                            border: "none",
                                            outline: "none",
                                            borderRadius: "30px",
                                            backgroundImage: "initial",
                                            backgroundColor: "rgb(39, 170, 225)",
                                            fontSize: "14px",
                                            color: "rgb(255, 255, 255)",
                                            position: "relative",
                                            fontWeight: 600,
                                            cssFloat: "right",
                                        }}
                                    >
                                        Publish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="post-content"
                        style={{
                            boxSizing: "border-box",
                            background: "rgb(248, 248, 248)",
                            borderRadius: "4px",
                            border: "1px solid rgb(241, 242, 242)",
                            width: "100%",
                            marginBottom: "20px",
                            overflow: "visible",
                            position: "relative",
                        }}
                    >
                        <div
                            className="post-date hidden-xs hidden-sm"
                            style={{
                                boxSizing: "border-box",
                                position: "absolute",
                                marginLeft: "-125px",
                            }}
                        >
                            <h5
                                style={{
                                    boxSizing: "border-box",
                                    fontFamily: "inherit",
                                    fontWeight: 500,
                                    lineHeight: 1.1,
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    fontSize: "14px",
                                    color: "rgb(39, 170, 225)",
                                }}
                            >
                                Sarah
                            </h5>
                            <p
                                className="text-grey"
                                style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}
                            >
                                Sometimes ago
                            </p>
                        </div>
                        <img
                            className="img-responsive post-image"
                            alt="post-image"
                            src="https://themified.com/friend-finder/images/post-images/12.jpg"
                            style={{
                                boxSizing: "border-box",
                                border: "0px",
                                verticalAlign: "middle",
                                display: "block",
                                maxWidth: "100%",
                                width: "100%",
                                height: "auto",
                                borderRadius: "4px 4px 0px 0px",
                            }}
                        />
                        <div
                            className="post-container"
                            style={{ boxSizing: "border-box", padding: "20px" }}
                        >
                            <img
                                className="profile-photo-md pull-left"
                                alt="user"
                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                style={{
                                    boxSizing: "border-box",
                                    border: "0px",
                                    verticalAlign: "middle",
                                    borderRadius: "50%",
                                    height: "50px",
                                    width: "50px",
                                    cssFloat: "left",
                                }}
                            />
                            <div
                                className="post-detail"
                                style={{
                                    boxSizing: "border-box",
                                    marginLeft: "65px",
                                    position: "relative",
                                }}
                            >
                                <div
                                    className="user-info"
                                    style={{ boxSizing: "border-box" }}
                                >
                                    <h5
                                        style={{
                                            boxSizing: "border-box",
                                            fontFamily: "inherit",
                                            fontWeight: 500,
                                            lineHeight: 1.1,
                                            marginTop: "10px",
                                            marginBottom: "10px",
                                            fontSize: "14px",
                                            color: "rgb(39, 170, 225)",
                                        }}
                                    >
                                        <a
                                            className="profile-link"
                                            href="https://themified.com/friend-finder/timeline.html"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                textDecoration: "none",
                                                color: "rgb(39, 170, 225)",
                                                outline: "none",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Sarah Cruiz
                                        </a>{" "}
                                        <span
                                            className="following"
                                            style={{
                                                boxSizing: "border-box",
                                                color: "rgb(141, 198, 63)",
                                                fontSize: "12px",
                                                marginLeft: "20px",
                                            }}
                                        >
                                            following
                                        </span>
                                    </h5>
                                    <p
                                        className="text-muted"
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            color: "rgb(147, 149, 152)",
                                        }}
                                    >
                                        Published a photo about 15 mins ago
                                    </p>
                                </div>
                                <div
                                    className="reaction"
                                    style={{
                                        boxSizing: "border-box",
                                        position: "absolute",
                                        right: "0px",
                                        top: "0px",
                                    }}
                                >
                                    <a
                                        className="btn text-green"
                                        style={{
                                            boxSizing: "border-box",
                                            backgroundColor: "transparent",
                                            textDecoration: "none",
                                            outline: "none",
                                            padding: "6px 12px",
                                            whiteSpace: "nowrap",
                                            border: "1px solid transparent",
                                            borderRadius: "4px",
                                            display: "inline-block",
                                            marginBottom: "0px",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            lineHeight: 1.42857,
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            touchAction: "manipulation",
                                            cursor: "pointer",
                                            userSelect: "none",
                                            backgroundImage: "none",
                                            color: "rgb(141, 198, 63)",
                                        }}
                                    >
                                        <i
                                            className="icon ion-thumbsup"
                                            style={{ boxSizing: "border-box" }}
                                        />{" "}
                                        13
                                    </a>
                                    <a
                                        className="btn text-red"
                                        style={{
                                            boxSizing: "border-box",
                                            backgroundColor: "transparent",
                                            textDecoration: "none",
                                            outline: "none",
                                            padding: "6px 12px",
                                            whiteSpace: "nowrap",
                                            border: "1px solid transparent",
                                            borderRadius: "4px",
                                            display: "inline-block",
                                            marginBottom: "0px",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            lineHeight: 1.42857,
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            touchAction: "manipulation",
                                            cursor: "pointer",
                                            userSelect: "none",
                                            backgroundImage: "none",
                                            color: "rgb(239, 65, 54)",
                                        }}
                                    >
                                        <i
                                            className="fa fa-thumbs-down"
                                            style={{
                                                boxSizing: "border-box",
                                                fontVariant: "normal",
                                                display: "inline-block",
                                                fontStyle: "normal",
                                                fontKerning: "auto",
                                                fontOpticalSizing: "auto",
                                                fontFeatureSettings: "normal",
                                                fontVariationSettings: "normal",
                                                fontWeight: "normal",
                                                fontStretch: "normal",
                                                lineHeight: 1,
                                                fontFamily: "FontAwesome",
                                                fontSize: "inherit",
                                                textRendering: "auto",
                                                WebkitFontSmoothing: "antialiased",
                                            }}
                                        />{" "}
                                        0
                                    </a>
                                </div>
                                <div
                                    className="line-divider"
                                    style={{
                                        boxSizing: "border-box",
                                        background: "none",
                                        borderTop: "1px solid rgb(230, 230, 230)",
                                        margin: "auto auto 10px",
                                        height: "1px",
                                        width: "100%",
                                    }}
                                />
                                <div
                                    className="post-text"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        lineHeight: "24px",
                                    }}
                                >
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                        sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum.{" "}
                                        <i
                                            className="em em-anguished"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/anguished.png")',
                                            }}
                                        />{" "}
                                        <i
                                            className="em em-anguished"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/anguished.png")',
                                            }}
                                        />{" "}
                                        <i
                                            className="em em-anguished"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/anguished.png")',
                                            }}
                                        />
                                    </p>
                                </div>
                                <div
                                    className="line-divider"
                                    style={{
                                        boxSizing: "border-box",
                                        background: "none",
                                        borderTop: "1px solid rgb(230, 230, 230)",
                                        margin: "auto auto 10px",
                                        height: "1px",
                                        width: "100%",
                                    }}
                                />
                                <div
                                    className="post-comment"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "10px auto",
                                        display: "inline-flex",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        className="profile-photo-sm"
                                        src="https://themified.com/friend-finder/images/users/user-11.jpg"
                                        style={{
                                            boxSizing: "border-box",
                                            border: "0px",
                                            verticalAlign: "middle",
                                            borderRadius: "50%",
                                            height: "40px",
                                            width: "40px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                        }}
                                    >
                                        <a
                                            className="profile-link"
                                            href="https://themified.com/friend-finder/timeline.html"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                textDecoration: "none",
                                                color: "rgb(39, 170, 225)",
                                                outline: "none",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Diana{" "}
                                        </a>
                                        <i
                                            className="em em-laughing"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/laughing.png")',
                                            }}
                                        />{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                                    </p>
                                </div>
                                <div
                                    className="post-comment"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "10px auto",
                                        display: "inline-flex",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        className="profile-photo-sm"
                                        src="https://themified.com/friend-finder/images/users/user-4.jpg"
                                        style={{
                                            boxSizing: "border-box",
                                            border: "0px",
                                            verticalAlign: "middle",
                                            borderRadius: "50%",
                                            height: "40px",
                                            width: "40px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                        }}
                                    >
                                        <a
                                            className="profile-link"
                                            href="https://themified.com/friend-finder/timeline.html"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                textDecoration: "none",
                                                color: "rgb(39, 170, 225)",
                                                outline: "none",
                                                fontWeight: 600,
                                            }}
                                        >
                                            John
                                        </a>{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                                    </p>
                                </div>
                                <div
                                    className="post-comment"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "10px auto",
                                        display: "inline-flex",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        className="profile-photo-sm"
                                        src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                        style={{
                                            boxSizing: "border-box",
                                            border: "0px",
                                            verticalAlign: "middle",
                                            borderRadius: "50%",
                                            height: "40px",
                                            width: "40px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Post a comment"
                                        style={{
                                            boxSizing: "border-box",
                                            font: "inherit",
                                            fontFamily: "inherit",
                                            padding: "6px 12px",
                                            transition:
                                                "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                                            display: "block",
                                            fontSize: "14px",
                                            lineHeight: 1.42857,
                                            background: "rgb(255, 255, 255)",
                                            borderRadius: "4px",
                                            backgroundImage: "initial",
                                            backgroundColor: "rgb(255, 255, 255)",
                                            color: "rgb(147, 149, 152)",
                                            border: "1px solid rgb(204, 204, 204)",
                                            margin: "7px 0px",
                                            height: "30px",
                                            boxShadow: "rgba(0, 0, 0, 0.075) 0px 1px 1px inset",
                                            minWidth: "0px",
                                            width: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="post-content"
                        style={{
                            boxSizing: "border-box",
                            background: "rgb(248, 248, 248)",
                            borderRadius: "4px",
                            border: "1px solid rgb(241, 242, 242)",
                            width: "100%",
                            marginBottom: "20px",
                            overflow: "visible",
                            position: "relative",
                        }}
                    >
                        <div
                            className="post-date hidden-xs hidden-sm"
                            style={{
                                boxSizing: "border-box",
                                position: "absolute",
                                marginLeft: "-125px",
                            }}
                        >
                            <h5
                                style={{
                                    boxSizing: "border-box",
                                    fontFamily: "inherit",
                                    fontWeight: 500,
                                    lineHeight: 1.1,
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    fontSize: "14px",
                                    color: "rgb(39, 170, 225)",
                                }}
                            >
                                Sarah
                            </h5>
                            <p
                                className="text-grey"
                                style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}
                            >
                                10/22/2016
                            </p>
                        </div>
                        <img
                            className="img-responsive post-image"
                            alt="post-image"
                            src="https://themified.com/friend-finder/images/post-images/13.jpg"
                            style={{
                                boxSizing: "border-box",
                                border: "0px",
                                verticalAlign: "middle",
                                display: "block",
                                maxWidth: "100%",
                                width: "100%",
                                height: "auto",
                                borderRadius: "4px 4px 0px 0px",
                            }}
                        />
                        <div
                            className="post-container"
                            style={{ boxSizing: "border-box", padding: "20px" }}
                        >
                            <img
                                className="profile-photo-md pull-left"
                                alt="user"
                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                style={{
                                    boxSizing: "border-box",
                                    border: "0px",
                                    verticalAlign: "middle",
                                    borderRadius: "50%",
                                    height: "50px",
                                    width: "50px",
                                    cssFloat: "left",
                                }}
                            />
                            <div
                                className="post-detail"
                                style={{
                                    boxSizing: "border-box",
                                    marginLeft: "65px",
                                    position: "relative",
                                }}
                            >
                                <div
                                    className="user-info"
                                    style={{ boxSizing: "border-box" }}
                                >
                                    <h5
                                        style={{
                                            boxSizing: "border-box",
                                            fontFamily: "inherit",
                                            fontWeight: 500,
                                            lineHeight: 1.1,
                                            marginTop: "10px",
                                            marginBottom: "10px",
                                            fontSize: "14px",
                                            color: "rgb(39, 170, 225)",
                                        }}
                                    >
                                        <a
                                            className="profile-link"
                                            href="https://themified.com/friend-finder/timeline.html"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                textDecoration: "none",
                                                color: "rgb(39, 170, 225)",
                                                outline: "none",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Sarah Cruiz
                                        </a>{" "}
                                        <span
                                            className="following"
                                            style={{
                                                boxSizing: "border-box",
                                                color: "rgb(141, 198, 63)",
                                                fontSize: "12px",
                                                marginLeft: "20px",
                                            }}
                                        >
                                            following
                                        </span>
                                    </h5>
                                    <p
                                        className="text-muted"
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            color: "rgb(147, 149, 152)",
                                        }}
                                    >
                                        Yesterday
                                    </p>
                                </div>
                                <div
                                    className="reaction"
                                    style={{
                                        boxSizing: "border-box",
                                        position: "absolute",
                                        right: "0px",
                                        top: "0px",
                                    }}
                                >
                                    <a
                                        className="btn text-green"
                                        style={{
                                            boxSizing: "border-box",
                                            backgroundColor: "transparent",
                                            textDecoration: "none",
                                            outline: "none",
                                            padding: "6px 12px",
                                            whiteSpace: "nowrap",
                                            border: "1px solid transparent",
                                            borderRadius: "4px",
                                            display: "inline-block",
                                            marginBottom: "0px",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            lineHeight: 1.42857,
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            touchAction: "manipulation",
                                            cursor: "pointer",
                                            userSelect: "none",
                                            backgroundImage: "none",
                                            color: "rgb(141, 198, 63)",
                                        }}
                                    >
                                        <i
                                            className="icon ion-thumbsup"
                                            style={{ boxSizing: "border-box" }}
                                        />{" "}
                                        49
                                    </a>
                                    <a
                                        className="btn text-red"
                                        style={{
                                            boxSizing: "border-box",
                                            backgroundColor: "transparent",
                                            textDecoration: "none",
                                            outline: "none",
                                            padding: "6px 12px",
                                            whiteSpace: "nowrap",
                                            border: "1px solid transparent",
                                            borderRadius: "4px",
                                            display: "inline-block",
                                            marginBottom: "0px",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            lineHeight: 1.42857,
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            touchAction: "manipulation",
                                            cursor: "pointer",
                                            userSelect: "none",
                                            backgroundImage: "none",
                                            color: "rgb(239, 65, 54)",
                                        }}
                                    >
                                        <i
                                            className="fa fa-thumbs-down"
                                            style={{
                                                boxSizing: "border-box",
                                                fontVariant: "normal",
                                                display: "inline-block",
                                                fontStyle: "normal",
                                                fontKerning: "auto",
                                                fontOpticalSizing: "auto",
                                                fontFeatureSettings: "normal",
                                                fontVariationSettings: "normal",
                                                fontWeight: "normal",
                                                fontStretch: "normal",
                                                lineHeight: 1,
                                                fontFamily: "FontAwesome",
                                                fontSize: "inherit",
                                                textRendering: "auto",
                                                WebkitFontSmoothing: "antialiased",
                                            }}
                                        />{" "}
                                        0
                                    </a>
                                </div>
                                <div
                                    className="line-divider"
                                    style={{
                                        boxSizing: "border-box",
                                        background: "none",
                                        borderTop: "1px solid rgb(230, 230, 230)",
                                        margin: "auto auto 10px",
                                        height: "1px",
                                        width: "100%",
                                    }}
                                />
                                <div
                                    className="post-text"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        lineHeight: "24px",
                                    }}
                                >
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                        sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum.{" "}
                                        <i
                                            className="em em-anguished"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/anguished.png")',
                                            }}
                                        />{" "}
                                        <i
                                            className="em em-anguished"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/anguished.png")',
                                            }}
                                        />{" "}
                                        <i
                                            className="em em-anguished"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/anguished.png")',
                                            }}
                                        />
                                    </p>
                                </div>
                                <div
                                    className="line-divider"
                                    style={{
                                        boxSizing: "border-box",
                                        background: "none",
                                        borderTop: "1px solid rgb(230, 230, 230)",
                                        margin: "auto auto 10px",
                                        height: "1px",
                                        width: "100%",
                                    }}
                                />
                                <div
                                    className="post-comment"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "10px auto",
                                        display: "inline-flex",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        className="profile-photo-sm"
                                        src="https://themified.com/friend-finder/images/users/user-11.jpg"
                                        style={{
                                            boxSizing: "border-box",
                                            border: "0px",
                                            verticalAlign: "middle",
                                            borderRadius: "50%",
                                            height: "40px",
                                            width: "40px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                        }}
                                    >
                                        <a
                                            className="profile-link"
                                            href="https://themified.com/friend-finder/timeline.html"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                textDecoration: "none",
                                                color: "rgb(39, 170, 225)",
                                                outline: "none",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Diana{" "}
                                        </a>
                                        <i
                                            className="em em-laughing"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/laughing.png")',
                                            }}
                                        />{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                                    </p>
                                </div>
                                <div
                                    className="post-comment"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "10px auto",
                                        display: "inline-flex",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        className="profile-photo-sm"
                                        src="https://themified.com/friend-finder/images/users/user-4.jpg"
                                        style={{
                                            boxSizing: "border-box",
                                            border: "0px",
                                            verticalAlign: "middle",
                                            borderRadius: "50%",
                                            height: "40px",
                                            width: "40px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                        }}
                                    >
                                        <a
                                            className="profile-link"
                                            href="https://themified.com/friend-finder/timeline.html"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                textDecoration: "none",
                                                color: "rgb(39, 170, 225)",
                                                outline: "none",
                                                fontWeight: 600,
                                            }}
                                        >
                                            John
                                        </a>{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                                    </p>
                                </div>
                                <div
                                    className="post-comment"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "10px auto",
                                        display: "inline-flex",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        className="profile-photo-sm"
                                        src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                        style={{
                                            boxSizing: "border-box",
                                            border: "0px",
                                            verticalAlign: "middle",
                                            borderRadius: "50%",
                                            height: "40px",
                                            width: "40px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Post a comment"
                                        style={{
                                            boxSizing: "border-box",
                                            font: "inherit",
                                            fontFamily: "inherit",
                                            padding: "6px 12px",
                                            transition:
                                                "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                                            display: "block",
                                            fontSize: "14px",
                                            lineHeight: 1.42857,
                                            background: "rgb(255, 255, 255)",
                                            borderRadius: "4px",
                                            backgroundImage: "initial",
                                            backgroundColor: "rgb(255, 255, 255)",
                                            color: "rgb(147, 149, 152)",
                                            border: "1px solid rgb(204, 204, 204)",
                                            margin: "7px 0px",
                                            height: "30px",
                                            boxShadow: "rgba(0, 0, 0, 0.075) 0px 1px 1px inset",
                                            minWidth: "0px",
                                            width: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="post-content"
                        style={{
                            boxSizing: "border-box",
                            background: "rgb(248, 248, 248)",
                            borderRadius: "4px",
                            border: "1px solid rgb(241, 242, 242)",
                            width: "100%",
                            marginBottom: "20px",
                            overflow: "visible",
                            position: "relative",
                        }}
                    >
                        <div
                            className="post-date hidden-xs hidden-sm"
                            style={{
                                boxSizing: "border-box",
                                position: "absolute",
                                marginLeft: "-125px",
                            }}
                        >
                            <h5
                                style={{
                                    boxSizing: "border-box",
                                    fontFamily: "inherit",
                                    fontWeight: 500,
                                    lineHeight: 1.1,
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    fontSize: "14px",
                                    color: "rgb(39, 170, 225)",
                                }}
                            >
                                Sarah
                            </h5>
                            <p
                                className="text-grey"
                                style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}
                            >
                                10/21/2016
                            </p>
                        </div>
                        <div
                            className="post-container"
                            style={{ boxSizing: "border-box", padding: "20px" }}
                        >
                            <img
                                className="profile-photo-md pull-left"
                                alt="user"
                                src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                style={{
                                    boxSizing: "border-box",
                                    border: "0px",
                                    verticalAlign: "middle",
                                    borderRadius: "50%",
                                    height: "50px",
                                    width: "50px",
                                    cssFloat: "left",
                                }}
                            />
                            <div
                                className="post-detail"
                                style={{
                                    boxSizing: "border-box",
                                    marginLeft: "65px",
                                    position: "relative",
                                }}
                            >
                                <div
                                    className="user-info"
                                    style={{ boxSizing: "border-box" }}
                                >
                                    <h5
                                        style={{
                                            boxSizing: "border-box",
                                            fontFamily: "inherit",
                                            fontWeight: 500,
                                            lineHeight: 1.1,
                                            marginTop: "10px",
                                            marginBottom: "10px",
                                            fontSize: "14px",
                                            color: "rgb(39, 170, 225)",
                                        }}
                                    >
                                        <a
                                            className="profile-link"
                                            href="https://themified.com/friend-finder/timeline.html"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                textDecoration: "none",
                                                color: "rgb(39, 170, 225)",
                                                outline: "none",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Sarah Cruiz
                                        </a>{" "}
                                        <span
                                            className="following"
                                            style={{
                                                boxSizing: "border-box",
                                                color: "rgb(141, 198, 63)",
                                                fontSize: "12px",
                                                marginLeft: "20px",
                                            }}
                                        >
                                            following
                                        </span>
                                    </h5>
                                    <p
                                        className="text-muted"
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            color: "rgb(147, 149, 152)",
                                        }}
                                    >
                                        2 days ago
                                    </p>
                                </div>
                                <div
                                    className="reaction"
                                    style={{
                                        boxSizing: "border-box",
                                        position: "absolute",
                                        right: "0px",
                                        top: "0px",
                                    }}
                                >
                                    <a
                                        className="btn text-green"
                                        style={{
                                            boxSizing: "border-box",
                                            backgroundColor: "transparent",
                                            textDecoration: "none",
                                            outline: "none",
                                            padding: "6px 12px",
                                            whiteSpace: "nowrap",
                                            border: "1px solid transparent",
                                            borderRadius: "4px",
                                            display: "inline-block",
                                            marginBottom: "0px",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            lineHeight: 1.42857,
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            touchAction: "manipulation",
                                            cursor: "pointer",
                                            userSelect: "none",
                                            backgroundImage: "none",
                                            color: "rgb(141, 198, 63)",
                                        }}
                                    >
                                        <i
                                            className="icon ion-thumbsup"
                                            style={{ boxSizing: "border-box" }}
                                        />{" "}
                                        49
                                    </a>
                                    <a
                                        className="btn text-red"
                                        style={{
                                            boxSizing: "border-box",
                                            backgroundColor: "transparent",
                                            textDecoration: "none",
                                            outline: "none",
                                            padding: "6px 12px",
                                            whiteSpace: "nowrap",
                                            border: "1px solid transparent",
                                            borderRadius: "4px",
                                            display: "inline-block",
                                            marginBottom: "0px",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            lineHeight: 1.42857,
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                            touchAction: "manipulation",
                                            cursor: "pointer",
                                            userSelect: "none",
                                            backgroundImage: "none",
                                            color: "rgb(239, 65, 54)",
                                        }}
                                    >
                                        <i
                                            className="fa fa-thumbs-down"
                                            style={{
                                                boxSizing: "border-box",
                                                fontVariant: "normal",
                                                display: "inline-block",
                                                fontStyle: "normal",
                                                fontKerning: "auto",
                                                fontOpticalSizing: "auto",
                                                fontFeatureSettings: "normal",
                                                fontVariationSettings: "normal",
                                                fontWeight: "normal",
                                                fontStretch: "normal",
                                                lineHeight: 1,
                                                fontFamily: "FontAwesome",
                                                fontSize: "inherit",
                                                textRendering: "auto",
                                                WebkitFontSmoothing: "antialiased",
                                            }}
                                        />{" "}
                                        0
                                    </a>
                                </div>
                                <div
                                    className="line-divider"
                                    style={{
                                        boxSizing: "border-box",
                                        background: "none",
                                        borderTop: "1px solid rgb(230, 230, 230)",
                                        margin: "auto auto 10px",
                                        height: "1px",
                                        width: "100%",
                                    }}
                                />
                                <div
                                    className="post-text"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px",
                                        lineHeight: "24px",
                                    }}
                                >
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                        sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum.{" "}
                                        <i
                                            className="em em-anguished"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/anguished.png")',
                                            }}
                                        />{" "}
                                        <i
                                            className="em em-anguished"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/anguished.png")',
                                            }}
                                        />{" "}
                                        <i
                                            className="em em-anguished"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/anguished.png")',
                                            }}
                                        />
                                    </p>
                                </div>
                                <div
                                    className="line-divider"
                                    style={{
                                        boxSizing: "border-box",
                                        background: "none",
                                        borderTop: "1px solid rgb(230, 230, 230)",
                                        margin: "auto auto 10px",
                                        height: "1px",
                                        width: "100%",
                                    }}
                                />
                                <div
                                    className="post-comment"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "10px auto",
                                        display: "inline-flex",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        className="profile-photo-sm"
                                        src="https://themified.com/friend-finder/images/users/user-11.jpg"
                                        style={{
                                            boxSizing: "border-box",
                                            border: "0px",
                                            verticalAlign: "middle",
                                            borderRadius: "50%",
                                            height: "40px",
                                            width: "40px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                        }}
                                    >
                                        <a
                                            className="profile-link"
                                            href="https://themified.com/friend-finder/timeline.html"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                textDecoration: "none",
                                                color: "rgb(39, 170, 225)",
                                                outline: "none",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Diana{" "}
                                        </a>
                                        <i
                                            className="em em-laughing"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundPosition: "center center",
                                                height: "1.5em",
                                                width: "1.5em",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain",
                                                display: "inline-block",
                                                verticalAlign: "middle",
                                                backgroundImage:
                                                    'url("https://themified.com/friend-finder/css/emoji/laughing.png")',
                                            }}
                                        />{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                                    </p>
                                </div>
                                <div
                                    className="post-comment"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "10px auto",
                                        display: "inline-flex",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        className="profile-photo-sm"
                                        src="https://themified.com/friend-finder/images/users/user-4.jpg"
                                        style={{
                                            boxSizing: "border-box",
                                            border: "0px",
                                            verticalAlign: "middle",
                                            borderRadius: "50%",
                                            height: "40px",
                                            width: "40px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                        }}
                                    >
                                        <a
                                            className="profile-link"
                                            href="https://themified.com/friend-finder/timeline.html"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                textDecoration: "none",
                                                color: "rgb(39, 170, 225)",
                                                outline: "none",
                                                fontWeight: 600,
                                            }}
                                        >
                                            John
                                        </a>{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                                    </p>
                                </div>
                                <div
                                    className="post-comment"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "10px auto",
                                        display: "inline-flex",
                                        width: "100%",
                                    }}
                                >
                                    <img
                                        className="profile-photo-sm"
                                        src="https://themified.com/friend-finder/images/users/user-1.jpg"
                                        style={{
                                            boxSizing: "border-box",
                                            border: "0px",
                                            verticalAlign: "middle",
                                            borderRadius: "50%",
                                            height: "40px",
                                            width: "40px",
                                            marginRight: "10px",
                                        }}
                                    />
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Post a comment"
                                        style={{
                                            boxSizing: "border-box",
                                            font: "inherit",
                                            fontFamily: "inherit",
                                            padding: "6px 12px",
                                            transition:
                                                "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                                            display: "block",
                                            fontSize: "14px",
                                            lineHeight: 1.42857,
                                            background: "rgb(255, 255, 255)",
                                            borderRadius: "4px",
                                            backgroundImage: "initial",
                                            backgroundColor: "rgb(255, 255, 255)",
                                            color: "rgb(147, 149, 152)",
                                            border: "1px solid rgb(204, 204, 204)",
                                            margin: "7px 0px",
                                            height: "30px",
                                            boxShadow: "rgba(0, 0, 0, 0.075) 0px 1px 1px inset",
                                            minWidth: "0px",
                                            width: "100%",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-2 static"
                    style={{
                        boxSizing: "border-box",
                        minHeight: "1px",
                        paddingRight: "10px",
                        paddingLeft: "10px",
                        cssFloat: "left",
                        width: "16.6667%",
                        position: "static",
                    }}
                >
                    <div id="sticky-sidebar" style={{ boxSizing: "border-box" }}>
                        <h4
                            className="grey"
                            style={{
                                boxSizing: "border-box",
                                fontFamily: "inherit",
                                fontWeight: 500,
                                lineHeight: 1.1,
                                fontSize: "18px",
                                margin: "0px auto 20px",
                                color: "rgb(109, 110, 113)",
                                marginTop: "0px",
                                marginBottom: "20px",
                            }}
                        >
                            Sarah's activity
                        </h4>
                        <div
                            className="feed-item"
                            style={{
                                boxSizing: "border-box",
                                padding: "0px 20px",
                                textAlign: "left",
                                marginBottom: "13px",
                                position: "relative",
                            }}
                        >
                            <div
                                className="live-activity"
                                style={{
                                    boxSizing: "border-box",
                                    borderBottom: "1px solid rgb(241, 242, 242)",
                                }}
                            >
                                <p
                                    style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}
                                >
                                    <a
                                        className="profile-link"
                                        href="https://themified.com/friend-finder/timeline.html#"
                                        style={{
                                            boxSizing: "border-box",
                                            backgroundColor: "transparent",
                                            textDecoration: "none",
                                            color: "rgb(39, 170, 225)",
                                            outline: "none",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Sarah
                                    </a>{" "}
                                    Commended on a Photo
                                </p>
                                <p
                                    className="text-muted"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px 0px 10px",
                                        color: "rgb(147, 149, 152)",
                                    }}
                                >
                                    5 mins ago
                                </p>
                            </div>
                        </div>
                        <div
                            className="feed-item"
                            style={{
                                boxSizing: "border-box",
                                padding: "0px 20px",
                                textAlign: "left",
                                marginBottom: "13px",
                                position: "relative",
                            }}
                        >
                            <div
                                className="live-activity"
                                style={{
                                    boxSizing: "border-box",
                                    borderBottom: "1px solid rgb(241, 242, 242)",
                                }}
                            >
                                <p
                                    style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}
                                >
                                    <a
                                        className="profile-link"
                                        href="https://themified.com/friend-finder/timeline.html#"
                                        style={{
                                            boxSizing: "border-box",
                                            backgroundColor: "transparent",
                                            textDecoration: "none",
                                            color: "rgb(39, 170, 225)",
                                            outline: "none",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Sarah
                                    </a>{" "}
                                    Has posted a photo
                                </p>
                                <p
                                    className="text-muted"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px 0px 10px",
                                        color: "rgb(147, 149, 152)",
                                    }}
                                >
                                    an hour ago
                                </p>
                            </div>
                        </div>
                        <div
                            className="feed-item"
                            style={{
                                boxSizing: "border-box",
                                padding: "0px 20px",
                                textAlign: "left",
                                marginBottom: "13px",
                                position: "relative",
                            }}
                        >
                            <div
                                className="live-activity"
                                style={{
                                    boxSizing: "border-box",
                                    borderBottom: "1px solid rgb(241, 242, 242)",
                                }}
                            >
                                <p
                                    style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}
                                >
                                    <a
                                        className="profile-link"
                                        href="https://themified.com/friend-finder/timeline.html#"
                                        style={{
                                            boxSizing: "border-box",
                                            backgroundColor: "transparent",
                                            textDecoration: "none",
                                            color: "rgb(39, 170, 225)",
                                            outline: "none",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Sarah
                                    </a>{" "}
                                    Liked her friend's post
                                </p>
                                <p
                                    className="text-muted"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px 0px 10px",
                                        color: "rgb(147, 149, 152)",
                                    }}
                                >
                                    4 hours ago
                                </p>
                            </div>
                        </div>
                        <div
                            className="feed-item"
                            style={{
                                boxSizing: "border-box",
                                padding: "0px 20px",
                                textAlign: "left",
                                marginBottom: "13px",
                                position: "relative",
                            }}
                        >
                            <div
                                className="live-activity"
                                style={{
                                    boxSizing: "border-box",
                                    borderBottom: "1px solid rgb(241, 242, 242)",
                                }}
                            >
                                <p
                                    style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}
                                >
                                    <a
                                        className="profile-link"
                                        href="https://themified.com/friend-finder/timeline.html#"
                                        style={{
                                            boxSizing: "border-box",
                                            backgroundColor: "transparent",
                                            textDecoration: "none",
                                            color: "rgb(39, 170, 225)",
                                            outline: "none",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Sarah
                                    </a>{" "}
                                    has shared an album
                                </p>
                                <p
                                    className="text-muted"
                                    style={{
                                        boxSizing: "border-box",
                                        margin: "0px 0px 10px",
                                        color: "rgb(147, 149, 152)",
                                    }}
                                >
                                    a day ago
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
