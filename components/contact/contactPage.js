"use client";
import { useEffect, useState } from "react";
import styles from "./contactPage.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ContactPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSendMessageClick = () => {
        // console.log("FormData ==> ", formData);

        if (formData.name == '' || formData.email == '' || formData.message == '' || formData.phone == '') {
            Swal.fire({
                icon: 'error',
                title: 'Send Message Error!',
                text: 'Kindly fill all the required fields before submit',
            });
            return

        }
    }

    return (
        <div>
            <div className={`${styles.mapSection}`}>
                <iframe
                    className={`${styles.map}`}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9647327771204!2d88.34717424110397!3d22.50550633955297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a6f387ee8a5%3A0xb2f9b1fa6360bb87!2sWebsadroit!5e0!3m2!1sen!2sin!4v1706876734752!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className={`container`}>
                <div className={`row justify-content-center`}>
                    <div className={`col-md-9 col-md-offset-1`}>
                        <div className={`${styles.contactUs}`}>
                            <div className={`row`}>
                                <div className={`col-md-8 col-sm-7`}>
                                    <h4 className={`${styles.heading}`}>
                                        Leave a Message
                                    </h4>
                                    <div className={`${styles.editBlock}`}>
                                        <form
                                            name="education"
                                            id="education"
                                            className={`${styles.formInline}`}
                                        >
                                            <div className={`${styles.row} row`}>
                                                <div className={`${styles.formGroup} form-group col-lg-12`}>

                                                    <input
                                                        id="school"
                                                        className={`${styles.formControl} form-control input-group-lg`}
                                                        type="text"
                                                        name="name"
                                                        title="Enter your email *"
                                                        placeholder="Enter your name *"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className={`${styles.formGroup} form-group col-lg-12`}>

                                                    <input
                                                        id="email"
                                                        className={`${styles.formControl} form-control input-group-lg`}
                                                        type="email"
                                                        name="email"
                                                        title="Enter your email *"
                                                        placeholder="Enter your email *"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className={`${styles.formGroup} form-group col-lg-12`}>

                                                    <input
                                                        id="phone"
                                                        className={`${styles.formControl} form-control input-group-lg`}
                                                        type="text"
                                                        name="phone"
                                                        title="Enter your phone *"
                                                        placeholder="Enter your phone *"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${styles.row} row`}>
                                                <div className={`${styles.formGroup} form-group col-lg-12`}>
                                                    <textarea
                                                        id="edu-description"
                                                        name="message"
                                                        className={`${styles.formControltextarea} form-control`}
                                                        placeholder="Leave a message for us *"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        rows={4}
                                                        cols={400}
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                className={`${styles.btn} ${styles.btnPadding} ${styles.btnPrimary} btn btn-primary`}
                                                onClick={handleSendMessageClick}
                                            >
                                                Send a Message
                                            </button>
                                        </form>
                                    </div>

                                </div>
                                <div className={` col-md-4 col-sm-5`}>
                                    <div className={`${styles.reachUs}`}>
                                        <h4 className={`${styles.heading}`}>
                                            Reach Us
                                        </h4>
                                        <div className={`${styles.reachBox}`}>
                                            <div className={`${styles.reach}`}><span className={`${styles.phoneIcon}`}><Icon icon="ic:round-call" /></span><p>+91 9903-686-925</p></div>
                                            <div className={`${styles.reach}`}><span className={`${styles.phoneIcon}`}><Icon icon="clarity:email-solid" /></span><p>info@websadroit.com</p></div>
                                            <div className={`${styles.reach}`}><span className={`${styles.phoneIcon}`}><Icon icon="basil:location-solid" /></span><p>48/14 Purna Chandra Mitra Lane, Charu Market kolkata- 700033</p></div>
                                        </div>
                                        <ul className={`${styles.socialIcons} list-inline`}>
                                            <li><Link className={`${styles.socialIcon}`} href="https://www.facebook.com/websadroit"><Icon icon="gg:facebook" target="_blank" /></Link></li>
                                            <li><Link className={`${styles.socialIcon}`} href="https://in.linkedin.com/company/websadroit"><Icon icon="jam:linkedin" target="_blank" /></Link></li>
                                            <li><Link className={`${styles.socialIcon}`} href="https://www.instagram.com/websadroit/"><Icon icon="mdi:instagram" target="_blank" /></Link></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}