import './TradeGroup.css';
import { useState } from 'react';

const TradeGroup = () => {
    const [opened,setOpened] = useState(false)
    const open = () => {
        setOpened(!opened);
        document.getElementById('tradeArrow').classList.toggle('rotate');
        document.getElementById('trade').classList.toggle('onClick');
    };
    return (
        <div id='trade' className="tradeGroup">
            <div className="container">
                <div className="tradeHead" onClick={open}>
                    <h2 className='opener_title'>ЗАКРЫТЫЙ ТРЕЙДИНГ КЛУБ</h2>
                    {
                        opened ? <img className='opener_arrow' src="./img/Polygon2.svg" alt="arrow" id="tradeArrow" />
                        : <img className='opener_arrow' src="./img/Polygon.png" alt="arrow" id="tradeArrow" />
                    }
                    <div className="tradeGroup_images"></div>
                </div>
                {
                    opened ? 
                    <div className="tradeBody">
                        <p className="club_text">CLUB</p>
                        <div className="offer dolphin">
                            <img src="./img/pack1.png" alt="dolphin" className="badge" />
                            <div className="bw"><div className="offer_header">
                                <p className="title">100 000 LETIT</p>
                                <p className="price">8000 USDT</p>
                                <p className="subPrice">(0.08 USDT)</p>
                                <p className="pretext">Только на период токен сейла:</p>
                                <p className="text">1 доля в подарок за 18 месяцев</p>
                            </div></div>
                            <div className="offer_body">
                                <p className="title">
                                    Постоянные привелегии:
                                </p>
                                <p className="state">
                                    Базовое обучение
                                </p>
                                <p className="undertext">
                                    (стоимость вне клуба – 2100 USDT)
                                </p>
                                <p className="state">
                                    Закрытый канал
                                </p>
                                <p className="text mb0">
                                    технический анализ
                                </p>
                                <p className="undertext">
                                    (недоступен вне клуба)
                                </p>
                                <p className="state">
                                    LETIT SUMMIT TRADERS
                                </p>
                                <p className="text">
                                    возможность участия
                                </p>
                                <p className="state">
                                    Криптоконферении
                                </p>
                                <p className="text">
                                    оповещение об участии
                                </p>
                            </div>
                            <div className="offer_footer">
                                <p className="pretitle">Выгода за первый год:</p>
                                <p className="title">8 500 USDT</p>
                            </div>
                        </div>
                        <div className="offer shark">
                            <img src="./img/pack2.png" alt="shark" className="badge" />
                            <div className="bw"><div className="offer_header">
                                <p className="title">100 000 LETIT</p>
                                <p className="price">8000 USDT</p>
                                <p className="subPrice">(0.08 USDT)</p>
                                <p className="pretext">Только на период токен сейла:</p>
                                <p className="text">1 доля в подарок за 18 месяцев</p>
                            </div></div>
                            <div className="offer_body">
                                <p className="title">
                                    Постоянные привелегии:
                                </p>
                                <p className="state">
                                    Базовое обучение
                                </p>
                                <p className="undertext">
                                    (стоимость вне клуба – 2100 USDT)
                                </p>
                                <p className="state">
                                    Закрытый канал
                                </p>
                                <p className="text mb0">
                                    технический анализ
                                </p>
                                <p className="undertext">
                                    (недоступен вне клуба)
                                </p>
                                <p className="state">
                                    LETIT SUMMIT TRADERS
                                </p>
                                <p className="text">
                                    возможность участия
                                </p>
                                <p className="state">
                                    Криптоконферении
                                </p>
                                <p className="text">
                                    оповещение об участии
                                </p>
                            </div>
                            <div className="offer_footer">
                                <p className="pretitle">Выгода за первый год:</p>
                                <p className="title">8 500 USDT</p>
                            </div>
                        </div>
                        <div className="offer whale">
                            <img src="./img/pack3.png" alt="whale" className="badge" />
                            <div className="bw"><div className="offer_header">
                                <p className="title">100 000 LETIT</p>
                                <p className="price">8000 USDT</p>
                                <p className="subPrice">(0.08 USDT)</p>
                                <p className="pretext">Только на период токен сейла:</p>
                                <p className="text">1 доля в подарок за 18 месяцев</p>
                            </div></div>
                            <div className="offer_body">
                                <p className="title">
                                    Постоянные привелегии:
                                </p>
                                <p className="state">
                                    Базовое обучение
                                </p>
                                <p className="undertext">
                                    (стоимость вне клуба – 2100 USDT)
                                </p>
                                <p className="state">
                                    Закрытый канал
                                </p>
                                <p className="text mb0">
                                    технический анализ
                                </p>
                                <p className="undertext">
                                    (недоступен вне клуба)
                                </p>
                                <p className="state">
                                    LETIT SUMMIT TRADERS
                                </p>
                                <p className="text">
                                    возможность участия
                                </p>
                                <p className="state">
                                    Криптоконферении
                                </p>
                                <p className="text">
                                    оповещение об участии
                                </p>
                            </div>
                            <div className="offer_footer">
                                <p className="pretitle">Выгода за первый год:</p>
                                <p className="title">8 500 USDT</p>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    );
};

export default TradeGroup;
