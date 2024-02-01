"use client";
import { useEffect } from "react";
import styles from "./contactPage.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Footer from '../footer/footer'
export default function ContactPage() {
    return (
        <div>
        <div className={`${styles.mapSection}`}>
        <iframe
          className={`${styles.map}`}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3481810998587!2d-73.97885062483076!3d40.75436613502221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fdf71d54cd%3A0x824fb82f415fb12f!2s228%20Park%20Ave%2C%20New%20York%2C%20NY%2010017%2C%20USA!5e0!3m2!1sen!2sin!4v1706704835059!5m2!1sen!2sin"
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
                                    value="Enter your name *"
                                />
                            </div>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                              
                                <input
                                    id="school"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="school"
                                    title="Enter your email *"
                                    placeholder="Enter your email *"
                                    value="Enter your email *"
                                />
                            </div>
                            <div className={`${styles.formGroup} form-group col-lg-12`}>
                          
                                <input
                                    id="school"
                                    className={`${styles.formControl} form-control input-group-lg`}
                                    type="text"
                                    name="phone"
                                    title="Enter your phone *"
                                    placeholder="Enter your phone *"
                                    value="Enter your phone *"
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
                                    value="Leave a message for us *"
                                    rows={4}
                                    cols={400}
                                />
                            </div>
                        </div>
                       
                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnPadding} ${styles.btnPrimary} btn btn-primary`}
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
                  <div className={`${styles.reach}`}><span className={`${styles.phoneIcon}`}><Icon icon="ic:round-call" /></span><p>+1 (234) 222 0754</p></div>
                  <div className={`${styles.reach}`}><span className={`${styles.phoneIcon}`}><Icon icon="clarity:email-solid" /></span><p>info@thunder-team.com</p></div>
                  <div className={`${styles.reach}`}><span className={`${styles.phoneIcon}`}><Icon icon="basil:location-solid" /></span><p>228 Park Ave S NY, USA</p></div>
                  </div>
                  <ul className={`${styles.socialIcons} list-inline`}>
                    <li><a className={`${styles.socialIcon}`} href="#"><Icon icon="gg:facebook" /></a></li>
                    <li><a className={`${styles.socialIcon}`} href="#"><Icon icon="flowbite:twitter-solid" /></a></li>
                    <li><a className={`${styles.socialIcon}`} href="#"><Icon icon="f7:logo-googleplus" /></a></li>
                    <li><a className={`${styles.socialIcon}`} href="#"><Icon icon="formkit:pinterest" /></a></li>
                    <li><a className={`${styles.socialIcon}`} href="#"><Icon icon="jam:linkedin" /></a></li>
                  </ul>
                        </div>
                    
                </div>
            	</div>
            </div>
          </div>
    		</div>
      </div>
      <Footer/>
      </div>
     
    )
}