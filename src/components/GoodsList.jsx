import { useContext } from 'react';
import { ShopContect } from '../context';
import {GoodItem} from './GoodItem'


function GoodsList(){
    const {goods = [] } = useContext(ShopContect);
    if (!goods.length){
        return <h3>Goods not found!</h3>
    }

    return <div className="goods row">
            {goods.slice(0, 20).map(item => 
            
                    <GoodItem key={item.mainId} {...item} />
            )}
        </div> 
    

}

export {GoodsList};