import React from 'react'
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import styles from "./photoAlbum.module.css";
import Image from 'next/image';
export default function photoAlbum() {
    return (
        <div className={`${styles.editProfile}`}>
        <div>
          <div className={`block-title`}>
            <h4 className={`${styles.heading}`}>
            <Icon icon="solar:gallery-broken" />
             Photo Gallery
            </h4>
            <div className={`${styles.line}`}></div>

          </div>
          <div className={`${styles.imagesGrid}`}>
<div className={`${styles.images} gridimage`}><div className={`${styles.hoverBtn}`}>
<Icon icon="bi:zoom-in" />
</div>
    <img src='https://themified.com/friend-finder/images/album/1.jpg'/></div>
<div className={`${styles.images} gridimage`}><div className={`${styles.hoverBtn}`}>
<Icon icon="bi:zoom-in" />
</div><img src='https://themified.com/friend-finder/images/album/2.jpg'/></div>
<div className={`${styles.images} gridimage`}><div className={`${styles.hoverBtn}`}>
<Icon icon="bi:zoom-in" />
</div><img src='https://themified.com/friend-finder/images/album/3.jpg'/></div>
<div className={`${styles.images} gridimage`}><div className={`${styles.hoverBtn}`}>
<Icon icon="bi:zoom-in" />
</div><img src='https://themified.com/friend-finder/images/album/4.jpg'/></div>
<div className={`${styles.images} gridimage`}><div className={`${styles.hoverBtn}`}>
<Icon icon="bi:zoom-in" />
</div><img src='https://themified.com/friend-finder/images/album/5.jpg'/></div>
<div className={`${styles.images} gridimage`}><div className={`${styles.hoverBtn}`}>
<Icon icon="bi:zoom-in" />
</div><img src='https://themified.com/friend-finder/images/album/6.jpg'/></div>
<div className={`${styles.images} gridimage`}><div className={`${styles.hoverBtn}`}>
<Icon icon="bi:zoom-in" />
</div><img src='https://themified.com/friend-finder/images/album/7.jpg'/></div>
<div className={`${styles.images} gridimage`}><div className={`${styles.hoverBtn}`}>
<Icon icon="bi:zoom-in" />
</div><img src='https://themified.com/friend-finder/images/album/8.jpg'/></div>
<div className={`${styles.images} gridimage`}><div className={`${styles.hoverBtn}`}>
<Icon icon="bi:zoom-in" />
</div><img src='https://themified.com/friend-finder/images/album/9.jpg'/></div>
<div className={`${styles.images} gridimage`}><div className={`${styles.hoverBtn}`}>
<Icon icon="bi:zoom-in" />
</div><img src='https://themified.com/friend-finder/images/album/1.jpg'/></div>
<div className={`${styles.images} gridimage`}><div className={`${styles.hoverBtn}`}>
<Icon icon="bi:zoom-in" />
</div><img src='https://themified.com/friend-finder/images/album/5.jpg'/></div>
          </div>
        
        </div>
      </div>
    )
}