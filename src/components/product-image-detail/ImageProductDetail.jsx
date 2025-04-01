import { useState } from "react";

export default function ImageProductDetail({ imagesList }) {
    const [selectedImage, setSelectedImage] = useState(0);

    function handleSecondaryImageClick(index) {
        setSelectedImage(index); // Actualiza la imagen principal con la seleccionada
    }

    return (
        <div className="product-detail-images">
            <PrincipalImage principalImage={imagesList[selectedImage]} />

            <div className="secondary-images">
                {imagesList.map((image, index) => {
                    return (
                        <SecondaryImage 
                            key={index} 
                            image={image} 
                            onClick={() => handleSecondaryImageClick(index)} // Pasar el índice al hacer clic
                        />
                    );
                })}
            </div>
        </div>
    );
}

export function PrincipalImage({ principalImage }) {
    return <img src={principalImage} alt="image" />;
}

export function SecondaryImage({ image, onClick }) {
    return <img src={image} alt="" onClick={onClick} />;
}
