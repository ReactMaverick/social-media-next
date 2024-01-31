"use client";
import React from "react";
import styles from "./aboutProfile.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function AboutProfile() {
  return (
    <div className={`${styles.editProfile}`}>
      <div className={`block-title`}>
        <h4 className={`${styles.heading}`}>
          <Icon icon="carbon:information" />
          Personal Information
        </h4>
        <div className={`${styles.line}`}></div>
        <p className={`para`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur
        </p>
        <div className={`${styles.line}`}></div>
      </div>
      <div className={`block-title`}>
        <h4 className={`${styles.heading}`}>
          <Icon icon="ph:briefcase-light" />
          Work Experiences
        </h4>
        <ul className={`${styles.organizationUl}`}>
          <div className={`${styles.organization}`}>
            <img
              src="https://themified.com/friend-finder/images/envato.png"
              alt=""
              className={`${styles.pullLeft} ${styles.imgOrg}`}
            />
            <div className={`${styles.workInfo}`}>
              <h5 className={`${styles.proHeading}`}>Envato</h5>
              <p className={`${styles.para}`}>
                Seller -{" "}
                <span className={`${styles.textGrey}`}>
                  1 February 2013 to present
                </span>
              </p>
            </div>
          </div>
          <div className={`${styles.organization}`}>
            <img
              src="https://themified.com/friend-finder/images/envato.png"
              alt=""
              className={`${styles.pullLeft} ${styles.imgOrg}`}
            />
            <div className={`${styles.workInfo}`}>
              <h5 className={`${styles.proHeading}`}>Envato</h5>
              <p className={`${styles.para}`}>
                Seller -{" "}
                <span className={`${styles.textGrey}`}>
                  1 February 2013 to present
                </span>
              </p>
            </div>
          </div>
          <div className={`${styles.organization}`}>
            <img
              src="https://themified.com/friend-finder/images/envato.png"
              alt=""
              className={`${styles.pullLeft} ${styles.imgOrg}`}
            />
            <div className={`${styles.workInfo}`}>
              <h5 className={`${styles.proHeading}`}>Envato</h5>
              <p className={`${styles.para}`}>
                Seller -{" "}
                <span className={`${styles.textGrey}`}>
                  1 February 2013 to present
                </span>
              </p>
            </div>
          </div>
        </ul>
        <div className={`${styles.line}`}></div>
      </div>
      <div className={`block-title`}>
        <h4 className={`${styles.heading}`}>
          <Icon icon="basil:location-outline" />
          Location
        </h4>
        <p className={`para`}>228 Park Eve, New York</p>
        <div className={`${styles.mapSection}`}>
          <iframe
            className={`${styles.map}`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3481810998587!2d-73.97885062483076!3d40.75436613502221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fdf71d54cd%3A0x824fb82f415fb12f!2s228%20Park%20Ave%2C%20New%20York%2C%20NY%2010017%2C%20USA!5e0!3m2!1sen!2sin!4v1706704835059!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={`${styles.line}`}></div>
      </div>
      <div className={`block-title`}>
        <h4 className={`${styles.heading}`}>
          <Icon icon="ph:heart" />
          Interests
        </h4>
        <p className={`para`}>228 Park Eve, New York</p>
        <ul className={`${styles.interests} ${styles.listInline}`}>
          <li>
            <span className={`${styles.intIcons}`} title="Bycycle riding">
              <Icon icon="ion:bicycle-sharp" />
            </span>
          </li>
          <li>
            <span className={`${styles.intIcons}`} title="Photography">
              <Icon icon="solar:camera-broken" />
            </span>
          </li>
          <li>
            <span className={`${styles.intIcons}`} title="Shopping">
              <Icon icon="mdi:cart-outline" />
            </span>
          </li>
          <li>
            <span className={`${styles.intIcons}`} title="Traveling">
              <Icon icon="guidance:plane" />
            </span>
          </li>
          <li>
            <span className={`${styles.intIcons}`} title="Eating">
              <Icon icon="ion:restaurant-outline" />
            </span>
          </li>
        </ul>
        <div className={`${styles.line}`}></div>
      </div>
      <div className={`block-title`}>
        <h4 className={`${styles.heading}`}>
          <Icon icon="basil:location-outline" />
          Language
        </h4>
        <ul>
          <li className={`${styles.languageList}`}>
              <a href="">Russian</a>
          </li>
          <li className={`${styles.languageList}`}>
            <a href="">English</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
