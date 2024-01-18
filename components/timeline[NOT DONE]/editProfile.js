'use client'
import React from 'react'
import styles from './editProfile.module.css';
import { Icon } from "@iconify/react";

export default function editProfile() {
  return (
<div className={`${styles.editProfile}`}>
                <div className={`${styles.blockTitle}`}>
                  <h4 className={`${styles.heading}`}><Icon icon="solar:notebook-minimalistic-outline" />My education</h4>
                  <div className={`${styles.line}`}></div>
                  <p className={`${styles.para}`}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                  <div className={`${styles.line}`}></div>
                </div>
              
                <div className={`${styles.blockTitle}`}>
                  <h4 className={`${styles.heading}`}><Icon icon="tabler:briefcase" />Work Experiences</h4>
                  <div className={`${styles.line}`}></div>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                  <div className={`${styles.line}`}></div>
                </div>
              
              </div>
  )
}