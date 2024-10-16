import { useContext } from 'react';
import { ShopContect } from '../context';

import {BascketItem} from './BascketItem'

function Bascket(props){
    const { handleBascketShow, order, totalSum } = useContext(ShopContect);
    
    

    const closeSrc = require('../img/close.png');
    const oopsSrc = require('../img/oops.png');

    return <div className="bascket-area position-fixed   ">
        <div className="bascket-list  position-relative">
            <div className="row  pt-2 pb-2 bg-violet text-white rounded-top-3">
                <div className="col-12 text-center fs-3 ">
                    Ваш заказ
                </div>

            </div>
            <div className="bascket-items overflow-y-auto row">
                <div className="col-12">

                    {order.length > 0 && order.map(item => { 
                        return <BascketItem  {...item} />})} 
                    { order.length > 0 ? <>
                    <div className="row pt-2 pb-2 text-violet bg-white border-top  ">
                        <div className="col-7 text-right fs-4 fw-medium">ИТОГО:</div>
                        <div className="col-5 fs-4 fw-medium"> {totalSum} руб.</div>
                    </div>
                    <div className="row pt-2 pb-2 bg-white rounded-bottom-3">
                        <div className="col-12 ">
                            <button className='btn btn-primary w-100 text-center fs-5'> Оформить заказ</button>
                        </div>
                    </div>
                    </> : <div className="row pt-2 pb-2 bg-white rounded-bottom-3">
                        <div className="col-12 ">
                            <div className='text-center mb-2 mt-2 '>
                                <img src={oopsSrc} alt="В корзине ничего нет"  className='oops'/>
                            </div>
                        </div>
                    </div>
                    }
                </div>

            </div>
            
                <img className="close" src={closeSrc} alt="" onClick={() => handleBascketShow()}/>
            
        </div>
    </div>
}
export {Bascket}