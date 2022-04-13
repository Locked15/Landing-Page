import React from "react";

function SidesGalleryElement(imagePath, caption) {
    return (
        <figure>
            <img src={require(imagePath)} alt={caption} />

            <figcaption>caption</figcaption>
        </figure>
    );
}

export default SidesGalleryElement;
 