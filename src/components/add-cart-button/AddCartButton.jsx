import cart from '../../assets/images/icon-cart.svg';
import styles from './AddCart.module.css'
import {useShoesStore} from "../../zustand/shoesStore";

const AddCartButton = ({productId}) => {
    const cartList= useShoesStore((state)=> state.cartList);
    const addCart = useShoesStore.getState().addCart;

    const item = cartList.find((item) => item.id === productId);
    const quantity = item?.quantity || 1;

    const handleClick = () => {
      if(item===undefined)
        {
            addCart(productId, quantity);

        }
    };

    return(
        <div className={styles['div__AddCart']}>
            <button className={styles['div__AddCart--button']} 
                    onClick={handleClick}
                    disabled={item!== undefined ? true : false}
                    >

                <img className={styles["AddCart__button--image"]} src={cart} alt="cart-icon" />

                <span>Add to cart</span>

            </button>
        </div>
    )

    
}

export default AddCartButton;
