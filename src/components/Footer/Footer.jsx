import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="logo">
                    <img src="./img/logo.png" alt="logo" />
                </div>
                <div className="nav">
                    <a href="#a" className="nav_link">White paper</a>
                    <a href="#a" className="nav_link">White List</a>
                    <a href="#a" className="nav_link">Раунды пресейлов</a>
                    <a href="#a" className="nav_link">Куср “Хакни трейдинг”</a>
                    <a href="#a" className="nav_link">Лавка мерча и NFT</a>
                    <a href="#a" className="nav_link">Функционал терминала Letit</a>
                </div>
                <div className="info">
                    <a href="#a" className="nav_link">FAQ</a>
                    <a href="#a" className="nav_link">Криптословарь</a>
                    <a href="#a" className="nav_link">letit@letit.ap</a>
                </div>
                <div className="links">
                    <div className="socials">
                        <a href="#a" className="socials_link"><img className='socials_img' src="./img/Twitter.svg" alt="Twitter" /></a>
                        <a href="#a" className="socials_link"><img className='socials_img' src="./img/Telegram.svg" alt="Telegram" /></a>
                        <a href="#a" className="socials_link"><img className='socials_img' src="./img/Instagram.svg" alt="Instagram" /></a>
                        <a href="#a" className="socials_link"><img className='socials_img' src="./img/Linkedln.svg" alt="Linkedln" /></a>
                        <a href="#a" className="socials_link"><img className='socials_img' src="./img/Youtube.svg" alt="Youtube" /></a>
                        <a href="#a" className="socials_link"><img className='socials_img' src="./img/Reddit.svg" alt="Reddit" /></a>
                    </div>
                    <div className="links_text">
                        Подписывайтесь на открытые каналы Letit, каждый день что-то происходит
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
