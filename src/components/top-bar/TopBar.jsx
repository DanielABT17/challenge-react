import logo from '../../assets/images/logo.svg';
import logoCart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import './TopBar.css';

const TopBar = () => {
    return (
        <>
        <div className='top__bar'>
            <div className='top__bar--nav'>
                <img className='top__bar--logo' src={logo} />
                <button className='nav__button'>Collections</button>
                <button className='nav__button'>Men</button>
                <button className='nav__button'>Women</button>
                <button className='nav__button'>About</button>
                <button className='nav__button'>Contact</button>
            </div>
            <div className='top__bar--cart'>
                <img className='top__bar__cart' src={logoCart} />
                <img className='top__bar__avatar' src={avatar} />
            </div>
        </div>
        <hr className='line'/>
        </>
    )
}

export default TopBar;