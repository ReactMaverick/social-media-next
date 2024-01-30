import React, { useState, useRef } from 'react';

function ImageModal({ image, onSave, onClose }) {
    const [resizedImage, setResizedImage] = useState(null);
    const canvasRef = useRef(null);

    // Function to handle resizing the image
    const handleResize = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Calculate the desired width and height for the resized image
        const maxWidth = 300;
        const maxHeight = 200;

        const widthRatio = maxWidth / image.width;
        const heightRatio = maxHeight / image.height;

        let newWidth = image.width;
        let newHeight = image.height;

        if (widthRatio < heightRatio) {
            newWidth = maxWidth;
            newHeight = image.height * widthRatio;
        } else {
            newHeight = maxHeight;
            newWidth = image.width * heightRatio;
        }

        // Set the canvas dimensions
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Draw the resized image onto the canvas
        context.drawImage(image, 0, 0, newWidth, newHeight);

        // Get the data URL of the resized image
        const resizedImageData = canvas.toDataURL('image/jpeg');

        // Set the resized image state
        setResizedImage(resizedImageData);
    };

    // Function to handle saving the resized image
    const handleSave = () => {
        onSave(resizedImage); // Pass the resized image to the parent component
        onClose(); // Close the modal
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Resize Image</h2>
                {/* Display the original image */}
                <img src={image.src} alt="Original Image" />

                {/* Canvas element for drawing the resized image */}
                <canvas ref={canvasRef} style={{ display: 'none' }} />

                {/* Add resizing controls and other UI elements here */}
                <button onClick={handleResize}>Resize</button>
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default ImageModal;
