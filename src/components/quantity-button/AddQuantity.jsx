import { useState } from "react";
import minusIcon from "../../assets/images/icon-minus.svg";
import plusIcon from "../../assets/images/icon-plus.svg"
import Style from "./AddQuantity.module.css";


const AddQuantity = () =>{
    const [quantity, setQuantity] = useState (1);

    if(quantity < 1){
        setQuantity(1);
    }

    return(

        <div className={Style["div__counter"]}>
            
                <button className={Style["div__counter--minusButton"]} onClick={()=>setQuantity(quantity + 1)}>
                    <img src={plusIcon}alt="plus"/>
                </button>
                    <span>{quantity}</span>
                <button className={Style["div__counter--plusButton"]} onClick={()=>setQuantity (quantity - 1)}>
                    <img src={minusIcon} alt="minus" />
                </button>
        </div>

    )
}

export default AddQuantity;