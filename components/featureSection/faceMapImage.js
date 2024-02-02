import styles from './faceMapImage.module.css';

export default function FaceMapImage() {
    return (
        <img
            className={`d-none d-md-block ${styles.faceMap} slideUp`}
            src={process.env.BASE_URL + "/images/face_map.png"}
        />
    );
}
