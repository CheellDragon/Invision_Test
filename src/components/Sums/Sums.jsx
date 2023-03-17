import './Sums.css';
import { useState } from 'react';

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
                        <p className="sums_seed">SEED<span>end</span></p>
                        <p className="sums_private">PRIVATE<span>sold out</span></p>
                        <p className="sums_public">!PUBLIC<span>13.67%</span></p>
                    </div>
                </div>
                    :     
                <div className="sums-full">
                    <div className="sums" onClick={open}>
                        <h2 className='opener_title'>ИТОГИ РАУНДОВ</h2>
                        <img className='opener_arrow' id="sumsArrow" src="./img/Polygon.png" alt="arrow down"/>
                        <p className="sums_seed">SEED<span>end</span></p>
                        <p className="sums_private">PRIVATE<span>sold out</span></p>
                        <p className="sums_public">!PUBLIC<span>13.67%</span></p>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default Sums;
