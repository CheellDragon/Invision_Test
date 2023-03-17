import './Promo.css'

const Promo = () => {
    return (

<div className="promo_background">
    <div className="container">
        <div className="promo">
            <div className="promo_header">
                <h1 className='promo_title'>
                    Токены LETIT
                </h1>
                <p className='promo_under-title'>
                    <span>LIVE!</span> идет третий раунд пресейла!
                </p>
                </div>
            <div className="promo_text">Залетай на третий пресейл токенов LETIT, это уникальный крипто-актив, развернутый на BNB chain. Наша крипта открывает доступ ко всем возможностям экосистемы, листай дальше или сразу инвестируй в LETIT на пресейлах, а после листинга на биржах следи за курсом! ( ‾́ ◡ ‾́ )</div>
            <button className="promo_btn">купить токены</button>
            <div className="promo_coins-animation">
                <img src="./img/Frame.png" alt="coins" />
            </div>
        </div>
    </div>
</div>

    );
};

export default Promo;
