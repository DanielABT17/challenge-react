import { useState } from "react";
import minusIcon from "../../assets/images/icon-minus.svg";
import plusIcon from "../../assets/images/icon-plus.svg"
import styles from "./AddQuantity.module.css";


const AddQuantity = () =>{
    const [quantity, setQuantity] = useState (1);




    return(

        <div className={styles["div__counter"]}>
            
                <button className={styles["div__counter--minusButton"]} onClick={()=>setQuantity(quantity + 1)} >
                    <img className={styles["counter__minusButton--image"]} src={plusIcon}alt="plus"/>
                </button>
                    <span>{quantity}</span>
                <button className={`${styles["div__counter--plusButton"]} ${quantity<=1&&styles["disabled"]}`} onClick={()=>setQuantity (quantity - 1) } disabled={quantity <= 1}  > 
                    <img className={styles["counter__minusButton--image"]} src={minusIcon} alt="minus" />
                </button>
        </div>

    )
}

export default AddQuantity;