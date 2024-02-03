"use client";
import React from "react";
import styles from "./aboutProfile.module.css";
import { Icon } from "@iconify/react";
import { countryNames } from './countryOptions';
import { hobbyIcons } from "@/utils/common";
import { capitalize } from "lodash";

export default function AboutProfile({ timelineUserId, timelineUser }) {

  // console.log("Timeline User Id and User ===> ", timelineUserId, timelineUser);

  return (
    <div className={`${styles.editProfile}`}>
      <div className={`block-title`}>
        <h4 className={`${styles.heading}`}>
          <Icon icon="carbon:information" />
          Personal Information
        </h4>
        {timelineUser?.about_me &&
          <>
            <div className={`${styles.line}`}></div>
            <p className={`para`}>
              {timelineUser?.about_me ? timelineUser?.about_me : ''}
            </p>
            <div className={`${styles.line}`}></div>
          </>
        }

      </div>
      <div className={`block-title`}>
        <h4 className={`${styles.heading}`}>
          <Icon icon="basil:location-outline" />
          Origin
        </h4>
        <ul>
          {timelineUser?.city &&
            <li className={`${styles.languageList}`}>
              <p className={`${styles.para}`}>
                {timelineUser?.city ? timelineUser?.city : ''}{', '}{timelineUser?.country ? countryNames[timelineUser?.country] : ''}
              </p>
            </li>
          }

        </ul>
      </div>
      <div className={`block-title`}>
        <h4 className={`${styles.heading}`}>
          <Icon icon="ph:heart" />
          Interests
        </h4>
        <ul className={`${styles.interests} ${styles.listInline}`}>
          {timelineUser?.hobbies?.map(hobby =>
            <li key={hobby}>
              <span className={`${styles.intIcons}`} title={capitalize(hobby)}>
                {hobbyIcons[hobby] ? <Icon icon={hobbyIcons[hobby]} />
                  : <Icon icon={hobbyIcons['other']} />
                }
              </span>
            </li>
          )}
        </ul>
        {timelineUser?.hobbies?.length ?
          <div className={`${styles.line}`}></div> : ''
        }

      </div>
      <div className={`block-title`}>
        <h4 className={`${styles.heading}`}>
          <Icon icon="ph:briefcase-light" />
          Work Details
        </h4>
        <ul className={`${styles.organizationUl}`}>
          <div className={`${styles.organization}`}>
            {timelineUser?.company_name &&
              <img
                src={'/images/work_icon.png'}
                alt=""
                className={`${styles.pullLeft} ${styles.imgOrg}`}
              />
            }
            <div className={`${styles.workInfo}`}>
              <h5 className={`${styles.proHeading}`}>{timelineUser?.company_name ? timelineUser?.company_name : ''}</h5>
              <p className={`${styles.para}`}>
                {timelineUser.designation ? timelineUser.designation : ''}
                {/* <span className={`${styles.textGrey}`}>
                  1 February 2013 to present
                </span> */}
              </p>
            </div>
          </div>
        </ul>
        {timelineUser?.hobbies?.length ?
          <div className={`${styles.line}`}></div> : ''
        }

      </div>
      {/* <div className={`block-title`}>
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
      </div> */}


    </div>
  );
}
