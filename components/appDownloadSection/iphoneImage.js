import styles from './iphoneImage.module.css';

export default function IphoneImage() {
    return (

        <img
            className={styles.iphoneImg}
            alt="iPhone"
            src={process.env.BASE_URL + "/images/iPhone_img.png"}
        />

    );
}
