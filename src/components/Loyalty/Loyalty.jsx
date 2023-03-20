import './Loyalty.css';
import { useState } from 'react';
import Lottie from "lottie-react";
import Flower from "../../assets/Flower.json";

const Loyalty = () => {
    const [opened,setOpened] = useState(false)
    const open = () => {
        setOpened(!opened);
        document.getElementById('loyaltyArrow').classList.toggle('rotate');
    };
    return (
        <div className="loyalty">
            <div className="container">
                <div className="loyalty_head" onClick={open}>
                    <h2 className='opener_title'>ПРОГРАММЫ ЛОЯЛЬНОСТИ</h2>
                    <img className='opener_arrow' src="./img/Polygon.png" alt="arrowDown" id="loyaltyArrow" />
                    {
                        opened ? <p className="loyalty_text"></p>
                        : <p className="loyalty_text">скидки до 100% на подписку к торговому терминалу Letit</p>
                    }
                </div>
                {
                    opened ?
                    <div className="loyalty_opened">
                        <div className="gridContainer">
                            <div className="options"></div>
                            <div className="options"><p className="options_text">5000+</p><img src="./img/Frame5000.png" alt="5000" /></div>
                            <div className="options"><p className="options_text">10000+</p><img src="./img/Frame10000.png" alt="10000" /></div>
                            <div className="options"><p className="options_text">20000+</p><img src="./img/Frame20000.png" alt="20000" /></div>
                            <div className="options"><p className="options_text">50000+</p><img src="./img/Frame50000.png" alt="50000" /></div>
                            <div className="programs">Brave</div>
                            <div className="programs">-50%</div>
                            <div className="programs cpec">-100%</div>
                            <div className="programs cpec">-100%</div>
                            <div className="programs cpec">-100%</div>
                            <div className="programs">Clever</div>
                            <div className="programs">-30%</div>
                            <div className="programs">-50%</div>
                            <div className="programs cpec">-100%</div>
                            <div className="programs cpec">-100%</div>
                            <div className="programs">Wise</div>
                            <div className="programs">-10%</div>
                            <div className="programs">-20%</div>
                            <div className="programs">-50%</div>
                            <div className="programs cpec">-100%</div>
                            <div className="animatedFlower"><Lottie animationData={Flower} loop={true} /></div>
                            <div className="understand">Форум</div>
                            <div className="understand">без приоритета</div>
                            <div className="understand">низкий</div>
                            <div className="understand">средний</div>
                            <div className="understand">высокий</div>
                        </div>
                        <div className="underText">Для держателей 5000 и выше токенов сервисы Letit предоставляется без рекламы!</div>
                    </div>
                    : null
                }
            </div>
        </div>
    );
};

export default Loyalty;
