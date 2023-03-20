import './Sums.css';
import { useState } from 'react';
import Lottie from "lottie-react";
import Koteika from "../../assets/Koteika.json";

const Sums = () => {
    const [opened,setOpened] = useState(false)
    const open = () => {
        setOpened(!opened);
        document.getElementById('sumsArrow').classList.toggle('rotate');
    };
    return (
        <div className="sums_background">
            <div className="container">
                { opened 
                ? 
                <div className="sums-full">
                    <div className="sums" onClick={open}>
                        <h2 className='opener_title'>ИТОГИ РАУНДОВ</h2>
                        <img className='opener_arrow' id="sumsArrow" src="./img/Polygon.png" alt="arrow down"/>
                        <p className='sums_text'>ПРЕСЕЙЛЫ ДО ОФИЦИАЛЬНОГО ЛИСТИНГА</p>
                    </div>
                    <div className="shows">
                        <p className="sums_seed head">SEED<span className='top'>end</span></p>
                        <p className="sums_private head">PRIVATE<span className='top'>sold out</span></p>
                        <p className="sums_public head">!PUBLIC<span className='top'>13.67%</span></p>
                    </div>
                    <div className="gridSums">
                            <div className="table">
                                <p className="row"><span className='start'>токенов</span><span className="end">10 000 000</span></p>
                                <p className="row"><span className='start'>цена</span><span className="end">$0.04</span></p>
                                <p className="row"><span className='start'>старт</span><span className="end">01.05.22</span></p>
                                <p className="row"><span className='start'>конец</span><span className="end">23.06.22</span></p>
                                <p className="row"><span className='start'>выкуплено</span><span className="end">6 198 540</span></p>
                                <p className="row"><span className='start'></span><span className="end">61.9</span></p>
                            </div>
                            <div className="table">
                                <p className="row"><span className='start'>токенов</span><span className="end">10 000 000</span></p>
                                <p className="row"><span className='start'>цена</span><span className="end">$0.04</span></p>
                                <p className="row"><span className='start'>старт</span><span className="end">01.05.22</span></p>
                                <p className="row"><span className='start'>конец</span><span className="end">23.06.22</span></p>
                                <p className="row"><span className='start'>выкуплено</span><span className="end">6 198 540</span></p>
                                <p className="row"><span className='start'></span><span className="end">61.9</span></p>
                            </div>
                            <div className="table">
                                <p className="row"><span className='start'>токенов</span><span className="end">10 000 000</span></p>
                                <p className="row"><span className='start'>цена</span><span className="end">$0.04</span></p>
                                <p className="row"><span className='start'>старт</span><span className="end">01.05.22</span></p>
                                <p className="row"><span className='start'>конец</span><span className="end">23.06.22</span></p>
                                <p className="row"><span className='start'>выкуплено</span><span className="end">6 198 540</span></p>
                                <p className="row"><span className='start'></span><span className="end">61.9</span></p>
                            </div>
                        </div>
                    <div className="sums_bottom">
                        <div className="qr"><img src="./img/QR.png" alt="QR" /></div>
                        <div className="info"><span className="colvo">Всего 85 678 держателей токенов LETIT</span><span className='information'>подписчики @Letit_app узнают<br/>инфу по сейлам раньше всех</span></div>
                        <div className="koteika"><Lottie animationData={Koteika} loop={true} /></div>
                        <div className="subcribe">подписаться</div>
                    </div>
                </div>
                    :     
                <div className="sums-full">
                    <div className="sums" onClick={open}>
                        <h2 className='opener_title'>ИТОГИ РАУНДОВ</h2>
                        <img className='opener_arrow' id="sumsArrow" src="./img/Polygon.png" alt="arrow down"/>
                        <div className="gridSums">
                            <p className="sums_seed head">SEED<span className='top top20'>end</span></p>
                            <p className="sums_private head">PRIVATE<span className='top'>sold out</span></p>
                            <p className="sums_public head">!PUBLIC<span className='top top20'>13.67%</span></p>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default Sums;
