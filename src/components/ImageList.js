import React from "react";
import ImageCard from "./ImageCard";
import style from "./../style/ImageList.css"

const ImageList = ({images}) => {
    const imagesFin = images.map((image) => {
        return (<ImageCard key={image.id} image={image} />)
    })

    return (
        <>
            <h1>
                Found: {images.length} images
            </h1>
            <div className="image_list">
                {imagesFin}
            </div>
        </>
    )
}
export default ImageList