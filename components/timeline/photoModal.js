import styles from './photoModal.module.css';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

export default function PhotoModal({ imgSrc, setIsImageClicked }) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show modal after a short delay to allow CSS transition to work
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, []);

    const handleCloseModal = () => {
        setIsVisible(false);
        // Allow time for the animation to finish before closing the modal
        setTimeout(() => {
            setIsImageClicked(false);
        }, 300); // Match the duration of the CSS transition (0.3s)

    };

    return (
        <div id='timelinePhotoModal' className={`${styles.photoModal} ${isVisible && styles.visible}`}>
            <div className={`${styles.closeModal} removeImage`} onClick={handleCloseModal}>
                <Icon icon="clarity:remove-solid" width='2.5rem' height='2.5rem' />
            </div>
            <img src={imgSrc} className={styles.modalImg} />
        </div>
    )
}