//NOT DONE
"use client";
import { useEffect } from "react";
import styles from "./footer.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={`${styles.footerSec}`} id="footer">
      <div className={`${styles.ftrContainer} container`}>
        <div className={`row`}>
          <div className={`${styles.footerWrapper} row`}>
            <div className={`col-md-3 col-sm-3`}>
              <a
                className={`${styles.footerLogoWrapper}`}
                href="https://themified.com/friend-finder/edit-profile-basic.html"
              >
                <img
                  className={`${styles.footerLogo}`}
                  src="https://themified.com/friend-finder/images/logo-black.png"
                />
              </a>
              <ul className={`${styles.socialIcons} list-inline`}>
                <li>
                  <a className={`${styles.socialIcon}`} href="#">
                    <Icon icon="gg:facebook" />
                  </a>
                </li>
                <li>
                  <a className={`${styles.socialIcon}`} href="#">
                    <Icon icon="flowbite:twitter-solid" />
                  </a>
                </li>
                <li>
                  <a className={`${styles.socialIcon}`} href="#">
                    <Icon icon="f7:logo-googleplus" />
                  </a>
                </li>
                <li>
                  <a className={`${styles.socialIcon}`} href="#">
                    <Icon icon="formkit:pinterest" />
                  </a>
                </li>
                <li>
                  <a className={`${styles.socialIcon}`} href="#">
                    <Icon icon="jam:linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className={`col-md-2 col-sm-2`}>
              <h5 className={`${styles.footerHeading}`}>For individuals</h5>
              <ul className={`${styles.footerLinks}`}>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Signup
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    login
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Explore
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Finder app
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Features
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Language settings
                  </a>
                </li>
              </ul>
            </div>
            <div className={`col-md-2 col-sm-2`}>
              <h5 className={`${styles.footerHeading}`}>For businesses</h5>
              <ul className={`${styles.footerLinks}`}>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Business signup
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Business login
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Benefits
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Resources
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Advertise
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Setup
                  </a>
                </li>
              </ul>
            </div>
            <div className={`col-md-2 col-sm-2`}>
              <h5 className={`${styles.footerHeading}`}>About</h5>
              <ul className={`${styles.footerLinks}`}>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    About us
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Contact us
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Terms
                  </a>
                </li>
                <li className={`${styles.footerList}`}>
                  <a
                    className={`${styles.footerListItem}`}
                    href="https://themified.com/friend-finder/edit-profile-basic.html"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div className={`col-md-3 col-sm-3`}>
              <h5 className={`${styles.footerHeading}`}>Contact Us</h5>
              <ul className={`${styles.contact}`}>
                <li className={`${styles.contactList}`}>
                  <div className={`${styles.contactListIcon}`}>
                    <Icon icon="ic:baseline-call" />
                  </div>
                  +91 9903-686-925
                </li>
                <li className={`${styles.contactList}`}>
                  <div className={`${styles.contactListIcon}`}>
                    <Icon icon="clarity:email-solid" />
                  </div>
                  info@websadroit.com
                </li>
                <li className={`${styles.contactList}`}>
                  <div className={`${styles.contactListIcon}`}>
                    <Icon icon="basil:location-solid" />
                  </div>
                  48/14 Purna Chandra Mitra Lane, Kolkata- 700033
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.copyright}`}>
        <p className={`${styles.copyrightText}`}>
          Websadroit Team © 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
}
