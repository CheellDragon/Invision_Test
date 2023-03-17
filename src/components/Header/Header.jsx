import './Header.css'

const Header = () => {
    return (
<div className="container">
    <div className='header'>
        <div className="logo"><img src="./img/logo.png" alt="logo" /></div>
        <nav className="nav">
            <a href="#a" className="nav_link">White Paper</a>
            <a href="#a" className="nav_link">Тарифы</a>
            <a href="#a" className="nav_link">Магазин</a>
            <a href="#a" className="nav_link">Школа</a>
            <a href="#a" className="nav_link">Блог</a>
            <a href="#a" className="nav_link">FAQ</a>
        </nav>
        <div className="socials">
            <a href="#a" className="socials_link"><img className='socials_img' src="./img/Twitter.svg" alt="Twitter" /></a>
            <a href="#a" className="socials_link"><img className='socials_img' src="./img/Telegram.svg" alt="Telegram" /></a>
            <a href="#a" className="socials_link"><img className='socials_img' src="./img/Instagram.svg" alt="Instagram" /></a>
            <a href="#a" className="socials_link"><img className='socials_img' src="./img/Linkedln.svg" alt="Linkedln" /></a>
            <a href="#a" className="socials_link"><img className='socials_img' src="./img/Youtube.svg" alt="Youtube" /></a>
            <a href="#a" className="socials_link"><img className='socials_img' src="./img/Reddit.svg" alt="Reddit" /></a>
        </div>
        <p className="lang">
            EN
        </p>
    </div>
</div>
    );
};

export default Header;
