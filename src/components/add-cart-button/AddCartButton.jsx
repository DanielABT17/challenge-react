import cart from '../../assets/images/icon-cart.svg';
import Style from './AddCart.module.css'

const AddCartButton = () => {

    return(
        <div className={Style['div__AddCart']}>
            <button className={Style['div__AddCart--button']}>
                <img src={cart} alt="cart-icon" />
                <span>Add to cart</span>
            </button>
        </div>
    )

}

export default AddCartButton;
