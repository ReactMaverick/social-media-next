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
              <Link
                className={`${styles.footerLogoWrapper}`}
                href='/'
              >
                <img
                  className={`${styles.footerLogo}`}
                  src={process.env.BASE_URL + '/images/logo_black.png'}
                />
              </Link>
              <ul className={`${styles.socialIcons} list-inline`}>
                <li><Link className={`${styles.socialIcon}`} href="https://www.facebook.com/websadroit" target="_blank"><Icon icon="gg:facebook" /></Link></li>
                <li><Link className={`${styles.socialIcon}`} href="https://in.linkedin.com/company/websadroit" target="_blank"><Icon icon="jam:linkedin" /></Link></li>
                <li><Link className={`${styles.socialIcon}`} href="https://www.instagram.com/websadroit/" target="_blank"><Icon icon="mdi:instagram" /></Link></li>
              </ul>
            </div>
            <div className={`col-md-2 col-sm-2`}>
              <h5 className={`${styles.footerHeading}`}>For individuals</h5>
              <ul className={`${styles.footerLinks}`}>
                <li className={`${styles.footerList}`}>
                  <Link
                    className={`${styles.footerListItem}`}
                    href='/'
                  >
                    Signup/Login
                  </Link>
                </li>

                <li className={`${styles.footerList}`}>
                  <Link
                    className={`${styles.footerListItem}`}
                    href={'/0/newsfeed'}
                  >
                    Newsfeed
                  </Link>
                </li>
                <li className={`${styles.footerList}`}>
                  <Link
                    className={`${styles.footerListItem}`}
                    href={'/0/timeline'}
                  >
                    Timeline
                  </Link>
                </li>
                <li className={`${styles.footerList}`}>
                  <Link
                    className={`${styles.footerListItem}`}
                    href={'/0/newsfeed/messages'}
                  >
                    Messages
                  </Link>
                </li>
                <li className={`${styles.footerList}`}>
                  <Link
                    className={`${styles.footerListItem}`}
                    href={'/0/newsfeed/images'}
                  >
                    Images
                  </Link>
                </li>
                <li className={`${styles.footerList}`}>
                  <Link
                    className={`${styles.footerListItem}`}
                    href={'/0/newsfeed/videos'}
                  >
                    Videos
                  </Link>
                </li>
              </ul>
            </div>

            <div className={`col-md-2 col-sm-2`}>
              <h5 className={`${styles.footerHeading}`}>About</h5>
              <ul className={`${styles.footerLinks}`}>
                <li className={`${styles.footerList}`}>
                  <Link
                    className={`${styles.footerListItem}`}
                    href={'/0/contact'}
                  >
                    Contact us
                  </Link>
                </li>
                <li className={`${styles.footerList}`}>
                  <Link
                    className={`${styles.footerListItem}`}
                    href={'/0/privacy'}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className={`${styles.footerList}`}>
                  <Link
                    className={`${styles.footerListItem}`}
                    href={'/0/terms'}
                  >
                    Terms
                  </Link>
                </li>
                <li className={`${styles.footerList}`}>
                  <Link
                    className={`${styles.footerListItem}`}
                    href={'/0/help'}
                  >
                    Help
                  </Link>
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
