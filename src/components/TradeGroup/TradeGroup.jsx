import './TradeGroup.css';
import { useState } from 'react';

const TradeGroup = () => {
    const [opened,setOpened] = useState(false)
    const open = () => {
        setOpened(!opened);
        document.getElementById('tradeArrow').classList.toggle('rotate');
    };
    return (
        <div className="tradeGroup">
            <div className="container">
                <div className="tradeHead" onClick={open}>
                    <h2 className='opener_title'>ЗАКРЫТЫЙ ТРЕЙДИНГ КЛУБ</h2>
                    <img className='opener_arrow' src="./img/Polygon.png" alt="arrow down" id="tradeArrow" />
                    {
                        opened ? <span className='opener_arrow'></span>
                        : <div className="tradeGroup_images"></div>
                    }
                </div>
                {
                    opened ? 
                    <div className="tradeBody">
                        <h1>SomeThing</h1>
                    </div>
                    : null
                }
            </div>
        </div>
    );
};

export default TradeGroup;
