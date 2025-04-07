import { useState } from "react";
import style from "./ImageProductDetail.module.css";

export default function ImageProductDetail({ productInformation }) {
    const [selectedImage, setSelectedImage] = useState(0);

    function handleSecondaryImageClick(index) {
        setSelectedImage(index);
    }

    return (
        <div className={style["div__imagesContainer"]}>
            <div className={style["div__imagesContainer--principalImageContainer"]}>
                <PrincipalImage principalImage={productInformation[selectedImage]} />  
            </div>

            <div className={style["div__imagesContainer--secondaryImages"]}>
                {productInformation.map((image, index) => (
                    <SecondaryImage 
                        key={index} 
                        image={image} 
                        isSelected={selectedImage === index}
                        onClick={() => handleSecondaryImageClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export function PrincipalImage({ principalImage }) {
    return <img src={principalImage} alt="" className={style["div__principalImageContainer--principalImage"]}/>;
}

export function SecondaryImage({ image, isSelected, onClick }) {
    return (
        <div className={`${style["div__secondaryImageContainer"]}  ${isSelected ? style["selected"]: ""}`}>
            <img 
                src={image} 
                alt="" 
                onClick={onClick} 
                className={style["div__secondaryImageContainer--secondaryImage"]}
            />
        </div>
    );
}
