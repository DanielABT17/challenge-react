import styles from './ListCart.module.css';

const ListCart = () => {
    return (
            <div className={styles['cart__content']}>
            <p className={styles['cart__content--info']}>Your cart is lleno.</p> 
            </div>
    )
}
export default ListCart;