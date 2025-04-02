import styles from './CartEmpty.module.css';

const CartEmpty = () => {
    return (
        <div className={styles['cart']}>
            <div className={styles['cart__header']}>
                <h4 className={styles['cart__header--title']}>Cart</h4>
                <hr className={styles['cart__header--line']}/>
            </div>
            <div className={styles['cart__content']}>
                <p className={styles['cart__content--info']}>Your cart is empty.</p> 
            </div>
        </div>
    )
}
export default CartEmpty;