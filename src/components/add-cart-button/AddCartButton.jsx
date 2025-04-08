import cart from '../../assets/images/icon-cart.svg';
import styles from './AddCart.module.css'

const AddCartButton = () => {

    return(
        <div className={styles['div__AddCart']}>
            <button className={styles['div__AddCart--button']}>
                <img src={cart} alt="cart-icon" />
                <span>Add to cart</span>
            </button>
        </div>
    )

}

export default AddCartButton;
