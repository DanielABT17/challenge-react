import { useState } from "react";
import styles from "./ImageProductDetail.module.css";

export default function ImageProductDetail({ productInformation }) {
    const [selectedImage, setSelectedImage] = useState(0);

    function handleSecondaryImageClick(index) {
        setSelectedImage(index);
    }

    return (
        <div className={styles["div__imagesContainer"]}>
            <div className={styles["div__imagesContainer--principalImageContainer"]}>
                <PrincipalImage principalImage={productInformation[selectedImage]} />  
            </div>

            <div className={styles["div__imagesContainer--secondaryImages"]}>
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
    return <img src={principalImage} alt="" className={styles["div__principalImageContainer--principalImage"]}/>;
}

export function SecondaryImage({ image, isSelected, onClick }) {
    return (
        <div className={`${styles["div__secondaryImageContainer"]}  ${isSelected ? styles["selected"]: ""}`}>
            <img 
                src={image} 
                alt="" 
                onClick={onClick} 
                className={styles["div__secondaryImageContainer--secondaryImage"]}
            />
        </div>
    );
}
