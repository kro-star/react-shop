
import {GoodItem} from './GoodItem'


function GoodsList(props){
    const {goods = [], addGood = Function.prototype, closeAlert = Function.prototype, } = props;
    if (!goods.length){
        return <h3>Goods not found!</h3>
    }

    return <div className="goods row">
            {goods.slice(0, 20).map(item => 
            
                    <GoodItem key={item.mainId} {...item} addGood = {addGood} closeAlert={closeAlert}/>
            )}
        </div> 
    

}

export {GoodsList};