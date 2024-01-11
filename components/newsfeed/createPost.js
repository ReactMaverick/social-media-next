import styles from './createPost.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function CreatePost({ currentUser }) {
    const [caption, setCaption] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);


    const handleCaptionChange = (e) => {
        const { value: postCaption } = e.target;

        setCaption(postCaption);
    };

    const handleImageChange = (event) => {
        // console.log(event.target);
        const file = event.target.files[0];
        setSelectedImage(file);

        setSelectedVideo(null);
    };

    const handleVideoChange = (event) => {
        // console.log(event);
        const file = event.target.files[0];
        setSelectedVideo(file);

        setSelectedImage(null);
    };

    const handlePostPublish = async () => {

        // const formData = new FormData();

        // formData.append('user', currentUser.id);

        // if (caption.length > 0) {
        //     formData.append('caption', caption);
        // }

        // if (selectedImage) {
        //     formData.append('image', selectedImage);
        // }

        // if (selectedVideo) {
        //     formData.append('video', selectedVideo);
        // }

        // console.log(currentUser.id, caption, selectedImage, selectedVideo);
        // console.log("Form Data ===> ", formData);

        try {
            const response = await fetch('/api/1.0/postContents', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Post created successfully');
                // Optionally, you can redirect the user or update the UI as needed
            } else {
                // Log the error details
                const errorResponse = await response.json();
                console.error('Failed to create post:', errorResponse);
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleImageLinkClick = () => {
        $("#imageInput").click();

        // console.log("Selected Image", selectedImage);
        // console.log("Selected Video", selectedVideo);
    };

    const handleVideoLinkClick = () => {
        $("#videoInput").click();

        // console.log("Selected Image", selectedImage);
        // console.log("Selected Video", selectedVideo);
    };

    const handleRemoveImage = () => {
        $("#imageInput").val('');

        URL.revokeObjectURL(URL.createObjectURL(selectedImage));

        setSelectedImage(null);

        // console.log("Selected Image", selectedImage);
        // console.log("Selected Video", selectedVideo);
    };

    const handleRemoveVideo = () => {
        $("#videoInput").val('');

        URL.revokeObjectURL(URL.createObjectURL(selectedVideo));

        setSelectedVideo(null);

        // console.log("Selected Image", selectedImage);
        // console.log("Selected Video", selectedVideo);
    };

    return (
        <div
            className={styles.createPost}
        >
            <div
                className="row"
            >
                <div
                    className="col-md-7 col-sm-7"
                >
                    <div
                        className={styles.formGroup}
                    >
                        <img
                            className="profile-photo-md"
                            src="../../images/user_1_image.jpg"
                        />
                        <textarea
                            id="exampleTextarea"
                            className={`form-control ${styles.formControl}`}
                            name="texts"
                            cols={30}
                            rows={1}
                            value={caption}
                            placeholder="Write what you wish"
                            onChange={handleCaptionChange}
                        />
                    </div>
                    {selectedImage && (
                        <div className={`${styles.imageUploadOuter} imageUploadOuter`}>
                            <div className={styles.imageOuter}>
                                <div className={`${styles.removeImage} removeImage`} onClick={handleRemoveImage}>
                                    <Icon icon="clarity:remove-solid" width='1.5em' height='1.5em' />
                                </div>
                                <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                            </div>
                        </div>
                    )}
                    {selectedVideo && (
                        <div className={`${styles.videoUploadOuter} videoUploadOuter`}>
                            <div className={styles.videoOuter}>
                                <div className={`${styles.removeVideo} removeVideo`} onClick={handleRemoveVideo}>
                                    <Icon icon="clarity:remove-solid" width='1.5em' height='1.5em' />
                                </div>
                                <video controls width="100%" height="auto" preload="metadata">
                                    <source src={URL.createObjectURL(selectedVideo)} type={selectedVideo.type} />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className="col-md-5 col-sm-5"
                >
                    <div
                        className={styles.tools}
                    >
                        <ul
                            className={`${styles.publishingTools} ${styles.listInline}`}
                        >
                            <li
                            >
                                <Link
                                    href="#"

                                >
                                    <Icon icon="fluent:compose-16-filled" />
                                </Link>
                            </li>
                            <li
                                onClick={handleImageLinkClick}
                            >
                                <Link
                                    href="#"

                                >
                                    <Icon icon="entypo:images" />
                                </Link>
                            </li>
                            <li
                                onClick={handleVideoLinkClick}
                            >
                                <Link
                                    href="#"

                                >
                                    <Icon icon="material-symbols:videocam-rounded" />
                                </Link>
                            </li>
                            <li
                            >
                                <Link
                                    href="#"

                                >
                                    <Icon icon="lets-icons:map-fill" />
                                </Link>
                            </li>
                        </ul>
                        {/* Hidden file input */}
                        <input
                            type="file"
                            accept="image/*"
                            id="imageInput"
                            className={styles.hiddenFileInput}
                            onChange={handleImageChange}
                        />

                        <input
                            type="file"
                            accept="video/*"
                            id="videoInput"
                            className={styles.hiddenFileInput}
                            onChange={handleVideoChange}
                        />

                        <button
                            className={`btn btn-primary pull-right ${styles.btnPrimary}`}
                            onClick={handlePostPublish}
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
