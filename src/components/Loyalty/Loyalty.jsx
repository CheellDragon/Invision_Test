import './Loyalty.css';
import { useState } from 'react';

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
                    <div className="gridContainer">
                        Some
                    </div>
                    : null
                }
            </div>
        </div>
    );
};

export default Loyalty;
