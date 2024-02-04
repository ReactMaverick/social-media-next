'use client'
import styles from './createPost.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useRef, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { addPost, removePost, clearPosts } from '@/utils/features/postContentsSlice';

export default function CreatePost({ currentUser, friends, socket }) {
    const [caption, setCaption] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const createPostTextareaRef = useRef(null);

    const dispatch = useAppDispatch();

    // console.log("CurrentUser in create post ==> ", currentUser);

    // console.log("Friends in create post ==> ", friends);

    const handleCaptionChange = (e) => {
        const { value: postCaption } = e.target;

        setCaption(postCaption);
    };

    const handleImageChange = (event) => {
        // console.log(event.target);
        const file = event.target.files[0];

        // setSelectedImage(file);
        setSelectedVideo(null);

        setSelectedImage(file); //Set the selected file in selectedImage

    };

    const handleVideoChange = (event) => {
        // console.log(event);
        const file = event.target.files[0];

        setSelectedVideo(file);
        setSelectedImage(null);

    };

    const handlePostPublish = async () => {

        if (selectedImage || selectedVideo) {
            try {

                const fileData = new FormData();

                selectedImage ? fileData.append('file', selectedImage) : fileData.append('file', selectedVideo);

                const response = await fetch('/api/1.0/upload', {
                    method: 'POST',
                    body: fileData,
                });

                if (!response.ok) {
                    // If the response status is not OK, throw an error
                    throw new Error(`Failed to upload image/video. Status: ${response.status}`);
                }

                if (response.ok) {
                    const data = await response.json();
                    console.log("File upload response data --> ", data); // Log the response from the server

                    // Continue with creating the post using the postContents API route
                    await createPost(data.filePath);
                }

            } catch (error) {

                console.error('Failed to upload image/video:', error);
            }
        } else {
            // Continue with creating the post using the postContents API route
            await createPost();
        };

    };

    const createPost = async (filePath) => {
        try {
            const formData = new FormData();

            formData.append('user', currentUser._id);

            if (caption.length > 0) {
                formData.append('caption', caption);
            }

            // Append the appropriate field based on the file type (image or video)
            if (selectedImage) {
                formData.append('image', filePath);
            }

            if (selectedVideo) {
                formData.append('video', filePath);
            }

            for (var key of formData.entries()) {
                console.log("Formdata entries ==> ", key[0] + ', ' + key[1])
            }

            // Use fetch to call the createPost API route
            const createPostResponse = await fetch('/api/1.0/postContents', {
                method: 'POST',
                body: formData,
            });

            if (!createPostResponse.ok) {
                throw new Error(`Failed to create post. Status: ${createPostResponse.status}`);
            }

            const postData = await createPostResponse.json();
            console.log('Post created successfully:', postData);

            // Dispatch The current post
            dispatch(addPost(postData.post));

            if (socket) {
                const postedUserId = currentUser._id;

                // Emit send-message event with user details and room ID
                socket.emit("publish-post", {
                    postedUserId: postedUserId,
                    post: postData.post,
                    friends: friends
                });
            }

            // Additional cleanup or actions after creating the post
            setCaption('');
            setSelectedImage(null);
            setSelectedVideo(null);

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

    const handleComposeIconClick = (e) => {
        e.preventDefault();

        createPostTextareaRef.current.focus();
    }

    return (
        <div
            className={styles.createPost}
        >
            {currentUser && (
                <>
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
                                    src={(currentUser.image) !== '' ? (currentUser.image) : '/images/no_user.webp'}
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
                                    ref={createPostTextareaRef}
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
                                        key={`compose_${currentUser._id}`}
                                        onClick={handleComposeIconClick}
                                    >
                                        <Link
                                            href=""

                                        >
                                            <Icon icon="fluent:compose-16-filled" />
                                        </Link>
                                    </li>
                                    <li
                                        onClick={handleImageLinkClick}
                                        key={`image_${currentUser._id}`}
                                    >
                                        <Link
                                            href=""

                                        >
                                            <Icon icon="entypo:images" />
                                        </Link>
                                    </li>
                                    <li
                                        onClick={handleVideoLinkClick}
                                        key={`video_${currentUser._id}`}
                                    >
                                        <Link
                                            href=""

                                        >
                                            <Icon icon="material-symbols:videocam-rounded" />
                                        </Link>
                                    </li>
                                    {/* <li
                                        key={`map_${currentUser._id}`}
                                    >
                                        <Link
                                            href="#"

                                        >
                                            <Icon icon="lets-icons:map-fill" />
                                        </Link>
                                    </li> */}
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
                </>
            )}

        </div>

    );
}

// Convert Base64 data to binary (Uint8Array)
function base64ToBinary(base64Data) {
    const binaryString = atob(base64Data);
    const binaryData = new Uint8Array(binaryString.length);

    for (let i = 0; i < binaryString.length; i++) {
        binaryData[i] = binaryString.charCodeAt(i);
    }

    return binaryData;
}