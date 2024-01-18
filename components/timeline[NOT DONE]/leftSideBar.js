import React from "react";
import styles from "./leftSideBar.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function LeftSideBar() {
  return (
    <div>
      <ul className={`${styles.editMenu} ${styles.listInline}`}>
        <li className={`${styles.active}`}>
          <Icon icon="carbon:information" />
          <Link href="#">Basic Information</Link>
        </li>
        <li>
          <Icon icon="ph:briefcase-light" />
          <Link href="#">Education and Work</Link>
        </li>
        <li>
        <Icon icon="ph:heart-thin" />
          <Link href="#">My Interests</Link>
        </li>
        <li>
        <Icon icon="clarity:settings-line" />
          <Link href="#">Account Settings</Link>
        </li>
        <li>
        <Icon icon="material-symbols-light:lock-person-outline" />
          <Link href="#">Change Password</Link>
        </li>
      </ul>
    </div>
  );
}
