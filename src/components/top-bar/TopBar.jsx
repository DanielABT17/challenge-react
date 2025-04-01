import logo from '../../assets/images/logo.svg';
import logoCart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import styles from './TopBar.module.css';

const TopBar = () => {
    return (
        <>
        <div className={styles['top__bar']}> 
            <div className={styles['top__bar--nav']}>
                <img className={styles['top__bar--logo']} src={logo} />
                <button className={styles['nav__button']}>Collections</button>
                <button className={styles['nav__button']}>Men</button>
                <button className={styles['nav__button']}>Women</button>
                <button className={styles['nav__button']}>About</button>
                <button className={styles['nav__button']}>Contact</button>
            </div>
            <div className={styles['top__bar--cart']}>
                <img className={styles['top__bar__cart']} src={logoCart} />
                <img className={styles['top__bar__avatar']} src={avatar} />
            </div>
        </div>
        <hr className={styles['line']}/>
        </>
    )
}

export default TopBar;