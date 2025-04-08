import { useState } from "react";
<<<<<<< Updated upstream
import styles from "./ImageProductDetail.module.css";
=======
import style from "./ImageProductDetail.module.css";
>>>>>>> Stashed changes

export default function ImageProductDetail({ productInformation }) {
    const [selectedImage, setSelectedImage] = useState(0);

    function handleSecondaryImageClick(index) {
<<<<<<< Updated upstream
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
=======
        setSelectedImage(index); // Cambia la imagen principal y marca la imagen seleccionada
    }

    return (
        <div className={style["div__imagesContainer"]}>
            <div className={style["div__imagesContainer--principalImageContainer"]}>
                <PrincipalImage principalImage={imagesList[selectedImage]} />  
            </div>

            <div className={style["div__imagesContainer--secondaryImages"]}>
                {imagesList.map((image, index) => (
                    <SecondaryImage 
                        key={index} 
                        image={image} 
                        isSelected={selectedImage === index} // Verifica si está seleccionada
>>>>>>> Stashed changes
                        onClick={() => handleSecondaryImageClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export function PrincipalImage({ principalImage }) {
<<<<<<< Updated upstream
    return <img src={principalImage} alt="" className={styles["div__principalImageContainer--principalImage"]}/>;
=======
    return <img src={principalImage} alt="" className={style["div__principalImageContainer--principalImage"]}/>;
>>>>>>> Stashed changes
}

export function SecondaryImage({ image, isSelected, onClick }) {
    return (
<<<<<<< Updated upstream
        <div className={`${styles["div__secondaryImageContainer"]}  ${isSelected ? styles["selected"]: ""}`}>
=======
        <div className={`${style["div__secondaryImageContainer"]}  ${isSelected ? style["selected"]: ""}`}>
>>>>>>> Stashed changes
            <img 
                src={image} 
                alt="" 
                onClick={onClick} 
<<<<<<< Updated upstream
                className={styles["div__secondaryImageContainer--secondaryImage"]}
=======
                className={style["div__secondaryImageContainer--secondaryImage"]}
>>>>>>> Stashed changes
            />
        </div>
    );
}
