"use client";
import React from "react";
import styles from "./editProfile.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import DayOptions from "./dayOptions";
import MonthOptions from "./monthOptions";
import YearOptions from "./yearOptions";
import CountryOptions from "./countryOptions";
import Link from "next/link";

export default function EditProfile({ option }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    day: "",
    month: "",
    year: "",
    gender: "male",
    city: "",
    country: "",
    aboutMe: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For radio inputs, only update the formData if the radio button is checked
    if (type === "radio" && !checked) {
      return; // Don't update formData if the radio button is not checked
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //*** Render Component based on selected option in sidebar */
  switch (option) {
    case "info":
      return (
        <div className={`${styles.editProfile}`}>
          <div className={`block-title`}>
            <h4 className={`${styles.heading}`}>
              <Icon icon="carbon:information" />
              Edit basic information
            </h4>
            <div className={`${styles.line}`}></div>
            <p className={`para`}>Edit your basic information here.</p>
            <div className={`${styles.line}`}></div>

            <div className={`${styles.editBlock}`}>
              <form
                name="basic-info"
                id="basic-info"
                className={`${styles.formInline}`}
              >
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-6`}>
                    <label htmlFor="firstname">First name</label>
                    <input
                      id="firstname"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="firstName"
                      title="Enter first name"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`${styles.formGroup} form-group col-lg-6`}>
                    <label htmlFor="lastname">Last name</label>
                    <input
                      id="lastname"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="lastName"
                      title="Enter last name"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-12`}>
                    <label htmlFor="email">My email</label>
                    <input
                      id="email"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="email"
                      title="Enter Email"
                      placeholder="My Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={`${styles.row} row`}>
                  <p className={`${styles.row} custom-label`}>
                    <strong>Date of Birth</strong>
                  </p>
                  <div
                    className={`${styles.formGroup} form-group col-sm-3 col-lg-3`}
                  >
                    <select
                      className={`${styles.formControl} 
                  form-control`}
                      id="day"
                      onChange={handleChange}
                      value={formData.day}
                    >
                      <option value="Day">Day</option>
                      <DayOptions />
                    </select>
                  </div>
                  <div
                    className={`${styles.formGroup} form-group col-sm-3 col-lg-3`}
                  >
                    <select
                      className={`${styles.formControl} form-control`}
                      id="month"
                      onChange={handleChange}
                      value={formData.month}
                    >
                      <option value="Month">Month</option>
                      <MonthOptions />
                    </select>
                  </div>
                  <div
                    className={`${styles.formGroup} form-group col-sm-6 col-lg-6`}
                  >
                    <select
                      className={`${styles.formControl} form-control`}
                      id="year"
                      value={formData.year}
                      onChange={handleChange}
                    >
                      <option value="Year">Year</option>
                      <YearOptions />
                    </select>
                  </div>
                </div>
                <div
                  className={`${styles.formGroup} ${styles.gender} form-group`}
                >
                  <span className={`${styles.customLabel} custom-label`}>
                    <strong>I am a: </strong>
                  </span>
                  <label className={`${styles.radioInline} radio-inline`}>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label className={`${styles.radioInline} radio-inline`}>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                    />
                    Female
                  </label>
                </div>
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-6`}>
                    <label htmlFor="city"> My city</label>
                    <input
                      id="city"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="city"
                      title="Enter city"
                      placeholder="Your city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`${styles.formGroup} form-group col-lg-6`}>
                    <label htmlFor={formData.country}>My country</label>
                    <select
                      className={`${styles.formControl} form-control`}
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="country">Country</option>
                      <CountryOptions />
                    </select>
                  </div>
                </div>
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-12`}>
                    <label htmlFor="my-info">About me</label>
                    <textarea
                      id="my-info"
                      name="aboutMe"
                      className={`${styles.formControltextarea} form-control`}
                      placeholder="Some texts about me"
                      rows={4}
                      cols={400}
                      value={formData.aboutMe}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      );

    case "work":
      return (
        <div className={`${styles.editProfile}`}>
          <div>
            <div className={`block-title`}>
              <h4 className={`${styles.heading}`}>
                <Icon icon="ph:book-light" />
                My education
              </h4>
              <div className={`${styles.line}`}></div>
              <p className={`para`}>Edit your education details here.</p>
              <div className={`${styles.line}`}></div>
            </div>
            <div className={`${styles.editBlock}`}>
              <form
                name="education"
                id="education"
                className={`${styles.formInline}`}
              >
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-12`}>
                    <label htmlFor="school">My university</label>
                    <input
                      id="school"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="school"
                      title="Enter School"
                      placeholder="My School"
                      value="Harvard Unversity"
                    />
                  </div>
                </div>
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-6`}>
                    <label htmlFor="date-from">From</label>
                    <input
                      id="date-from"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="date"
                      title="Enter a Date"
                      placeholder="from"
                      value="2012"
                    />
                  </div>
                  <div className={`${styles.formGroup} form-group col-lg-6`}>
                    <label htmlFor="date-to">To</label>
                    <input
                      id="date-to"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="date"
                      title="Enter a Date"
                      placeholder="to"
                      value="2016"
                    />
                  </div>
                </div>
                <div className={`${styles.row} row`}>
                  <div className="className={`${styles.formGroup} form-group col-lg-12`}">
                    <label htmlFor="edu-description">Description</label>
                    <textarea
                      id="edu-description"
                      name="description"
                      className={`${styles.formControltextarea} form-control`}
                      placeholder="Some texts about my education "
                      rows={4}
                      cols={400}
                    />
                  </div>
                </div>
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-12`}>
                    <label htmlFor="graduate">Graduated?:-</label>{" "}
                    <input
                      id="graduate"
                      type="checkbox"
                      name="graduate"
                      value="graduate"
                      checked
                    />{" "}
                    Yes!!
                  </div>
                </div>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className={`block-title`}>
              <h4 className={`${styles.heading}`}>
                <Icon icon="ph:briefcase-light" />
                Work Experiences
              </h4>
              <div className={`${styles.line}`}></div>
              <p className={`para`}>Edit your education details here.</p>
              <div className={`${styles.line}`}></div>
            </div>
            <div className={`${styles.editBlock}`}>
              <form
                name="education"
                id="education"
                className={`${styles.formInline}`}
              >
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-12`}>
                    <label htmlFor="school">Company</label>
                    <input
                      id="Company"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="Company"
                      title="Enter Company"
                      placeholder="My Company"
                      value="Envato Inc"
                    />
                  </div>
                </div>
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-12`}>
                    <label htmlFor="school">Designation</label>
                    <input
                      id="Designation"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="Designation"
                      title="Enter Designation"
                      placeholder="My Designation"
                      value="Exclusive Author"
                    />
                  </div>
                </div>
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-6`}>
                    <label htmlFor="date-from">From</label>
                    <input
                      id="date-from"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="date"
                      title="Enter a Date"
                      placeholder="from"
                      value="2016"
                    />
                  </div>
                  <div className={`${styles.formGroup} form-group col-lg-6`}>
                    <label htmlFor="date-to">To</label>
                    <input
                      id="date-to"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="date"
                      title="Enter a Date"
                      placeholder="to"
                      value="Present"
                    />
                  </div>
                </div>
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-12`}>
                    <label htmlFor="school">City/Town</label>
                    <input
                      id="City-town"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="text"
                      name="City"
                      title="Enter City"
                      placeholder="My City"
                      value="Melbourne"
                    />
                  </div>
                </div>
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-12`}>
                    <label htmlFor="edu-description">Description</label>
                    <textarea
                      id="edu-description"
                      name="description"
                      className={`${styles.formControltextarea}`}
                      placeholder="Some texts about my education "
                      value="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"
                      rows={5}
                      cols={500}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      );

    case "interests":
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
                <li>
                  <Link className={`${styles.lnkBtn}`} href="">
                    <Icon icon="ion:bicycle" /> Bycicle
                  </Link>
                </li>
                <li>
                  <Link className={`${styles.lnkBtn}`} href="">
                    <Icon icon="solar:camera-broken" /> Photgraphy
                  </Link>
                </li>
                <li>
                  <Link className={`${styles.lnkBtn}`} href="">
                    <Icon icon="mdi:cart-outline" /> Shopping
                  </Link>
                </li>
                <li>
                  <Link className={`${styles.lnkBtn}`} href="">
                    <Icon icon="guidance:plane" /> Traveling
                  </Link>
                </li>
                <li>
                  <Link className={`${styles.lnkBtn}`} href="">
                    <Icon icon="ion:restaurant-outline" /> Eating
                  </Link>
                </li>
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
                    name="interest"
                    title="Choose Interest"
                    value="Interests. For example, photography"
                  />
                </div>
                <div className={`${styles.formGroup} form-group col-lg-4`}>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "settings":
      return (
        <div className={`${styles.editProfile}`}>
          <div>
            <div className={`block-title`}>
              <h4 className={`${styles.heading}`}>
                <Icon icon="clarity:settings-line" />
                Account Settings
              </h4>
              <div className={`${styles.line}`}></div>
              <p className={`para`}>Edit your account settings here.</p>
              <div className={`${styles.line}`}></div>
            </div>
            <div className={`${styles.editBlock}`}>
              <div className={`${styles.settingsBlock}`}>
                <div className={`${styles.row} row`}>
                  <div className={`col-sm-9`}>
                    <div className={`${styles.switchDescription}`}>
                      <div>
                        <strong>Enable follow me</strong>
                      </div>
                      <p>Enable this if you want people to follow you</p>
                    </div>
                  </div>
                  <div className={`col-sm-3`}>
                    <div className={`${styles.toggleSwitch}`}>
                      <label className={`${styles.switch}`}>
                        <input
                          className={`${styles.inputSwitch}`}
                          checked
                          type="checkbox"
                        />
                        <span
                          className={`${styles.slider} ${styles.round}`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.line}`}></div>
              <div className={`${styles.settingsBlock}`}>
                <div className={`${styles.row} row`}>
                  <div className={`col-sm-9`}>
                    <div className={`${styles.switchDescription}`}>
                      <div>
                        <strong>Send me notifications</strong>
                      </div>
                      <p>
                        Send me notification emails my friends like, share or
                        message me
                      </p>
                    </div>
                  </div>
                  <div className={`col-sm-3`}>
                    <div className={`${styles.toggleSwitch}`}>
                      <label className={`${styles.switch}`}>
                        <input
                          className={`${styles.inputSwitch}`}
                          checked
                          type="checkbox"
                        />
                        <span
                          className={`${styles.slider} ${styles.round}`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.line}`}></div>
              <div className={`${styles.settingsBlock}`}>
                <div className={`${styles.row} row`}>
                  <div className={`col-sm-9`}>
                    <div className={`${styles.switchDescription}`}>
                      <div>
                        <strong>Text messages</strong>
                      </div>
                      <p>Send me messages to my cell phone</p>
                    </div>
                  </div>
                  <div className={`col-sm-3`}>
                    <div className={`${styles.toggleSwitch}`}>
                      <label className={`${styles.switch}`}>
                        <input
                          className={`${styles.inputSwitch}`}
                          checked
                          type="checkbox"
                        />
                        <span
                          className={`${styles.slider} ${styles.round}`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.line}`}></div>
              <div className={`${styles.settingsBlock}`}>
                <div className={`${styles.row} row`}>
                  <div className={`col-sm-9`}>
                    <div className={`${styles.switchDescription}`}>
                      <div>
                        <strong>Enable tagging</strong>
                      </div>
                      <p>Enable my friends to tag me on their posts</p>
                    </div>
                  </div>
                  <div className={`col-sm-3`}>
                    <div className={`${styles.toggleSwitch}`}>
                      <label className={`${styles.switch}`}>
                        <input
                          className={`${styles.inputSwitch}`}
                          type="checkbox"
                        />
                        <span
                          className={`${styles.slider} ${styles.round}`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.line}`}></div>
              <div className={`${styles.settingsBlock}`}>
                <div className={`${styles.row} row`}>
                  <div className={`col-sm-9`}>
                    <div className={`${styles.switchDescription}`}>
                      <div>
                        <strong>Enable sound</strong>
                      </div>
                      <p>
                        You'll hear notification sound when someone sends you a
                        private message
                      </p>
                    </div>
                  </div>
                  <div className={`col-sm-3`}>
                    <div className={`${styles.toggleSwitch}`}>
                      <label className={`${styles.switch}`}>
                        <input
                          className={`${styles.inputSwitch}`}
                          type="checkbox"
                        />
                        <span
                          className={`${styles.slider} ${styles.round}`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "password":
      return (
        <div className={`${styles.editProfile}`}>
          <div>
            <div className={`block-title`}>
              <h4 className={`${styles.heading}`}>
                <Icon icon="material-symbols-light:lock-person-outline" />
                Change Password
              </h4>
              <div className={`${styles.line}`}></div>
              <p className={`para`}>Change your password.</p>
              <div className={`${styles.line}`}></div>
            </div>
            <div className={`${styles.editBlock}`}>
              <form
                name="update-pass"
                id="passEducation"
                className={`${styles.formInline}`}
              >
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-12`}>
                    <label htmlFor="my-password">Old password</label>
                    <input
                      id="my-password"
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="password"
                      name="password"
                      title="Enter password"
                      placeholder="Old password"
                    />
                  </div>
                </div>
                <div className={`${styles.row} row`}>
                  <div className={`${styles.formGroup} form-group col-lg-6`}>
                    <label htmlFor="my-New-password">New password</label>
                    <input
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="password"
                      name="password"
                      title="Enter password"
                      placeholder="New password"
                    />
                  </div>
                  <div className={`${styles.formGroup} form-group col-lg-6`}>
                    <label htmlFor="my-New-password">Confirm password</label>
                    <input
                      className={`${styles.formControl} form-control input-group-lg`}
                      type="password"
                      name="password"
                      title="Enter password"
                      placeholder="Confirm password"
                    />
                  </div>
                </div>
                <p>
                  <a className={`${styles.forgot_password}`} href="#">Forgot Password?</a>
                </p>
                <button type="button"
                    className={`${styles.btn} ${styles.btnFull} ${styles.btnPrimary} btn btn-primary`}>Update Password</button>
              </form>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
