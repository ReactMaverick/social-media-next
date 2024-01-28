import React, { useEffect } from "react";
import styles from "./leftSideBar.module.css";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function LeftSideBar({ setSidebarOption, sidebarOption }) {

  const handleClick = (e) => {
    e.preventDefault();

    // console.log(e.target.id);
    setSidebarOption(e.target.id);
  }

  useEffect(() => {

  }, [sidebarOption])

  const sidebarOptions = [
    { id: 'info', icon: "carbon:information", text: "Basic Information" },
    { id: 'work', icon: "ph:briefcase-light", text: "Education and Work" },
    { id: 'interests', icon: "ph:heart-thin", text: "My Interests" },
    { id: 'settings', icon: "clarity:settings-line", text: "Account Settings" },
    { id: 'password', icon: "material-symbols-light:lock-person-outline", text: "Change Password" }
  ];

  return (
    <div>
      <ul className={`${styles.editMenu} ${styles.listInline}`}>
        {sidebarOptions.map(option => (
          <li key={option.id} className={sidebarOption === option.id ? styles.active : ''}>
            <Icon icon={option.icon} />
            <Link
              href=""
              id={option.id}
              onClick={handleClick}
            >
              {option.text}
            </Link>
          </li>
        ))}
      </ul>
    </div >
  );
}
