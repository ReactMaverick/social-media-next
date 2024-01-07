import styles from './faceMapImage.module.css';

export default function FaceMapImage() {
    return (
        <img
            className={`d-none d-md-block ${styles.faceMap} ${styles.slideUp} ${styles.appear}`}
            src="images/face_map.png"
        />
    );
}
