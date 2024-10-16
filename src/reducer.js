export function reduser (state, {type, playload}) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: playload || [],
                loading: false,
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            }
        case 'HANDLE_BASCKET_SHOW':{            
            return{
                ...state,
                isBascketShow: !state.isBascketShow
            }
        }
            
        case 'REMOVE_GOOD': {

            const good = state.order.filter(itemOrder => itemOrder.mainId === playload.id)
            const sum = good[0].price.finalPrice * good[0].quantity
            return {
                ...state,
                totalSum: state.totalSum - sum,
                order: state.order.filter(itemOrder => itemOrder.mainId !== playload.id)

            }
        }
        case 'DECREMENT_GOOD': {
            
            const goodDec = state.order.filter(itemOrder => itemOrder.mainId === playload.id)
            const sumDec = goodDec[0].price.finalPrice;
            if (goodDec[0].quantity === 1){

                return {
                    ...state,
                    totalSum: state.totalSum - sumDec,
                    order: state.order.filter(itemOrder => itemOrder.mainId !== playload.id)
    
                }
            } else {
                return {
                    ...state,
                    totalSum: state.totalSum - sumDec,
                    order: state.order.map(itemOrder => {
                        if(itemOrder.mainId === playload.id) {
                            return {
                                ...itemOrder,
                                quantity: itemOrder.quantity - 1
                            }
                        } 
                        else {
                            return itemOrder
                        }
                    })    
                }
            }
        }
        case 'INCREMENT_GOOD':{
            const goodInc = state.order.filter(itemOrder => itemOrder.mainId === playload.id)
            const sumInc = goodInc[0].price.finalPrice;
    
                return {
                    ...state,
                    totalSum: state.totalSum + sumInc,
                    order: state.order.map(orderItem => {
                        if (orderItem.mainId === playload.id){ 
                            return{
                                ...orderItem,
                                quantity: orderItem.quantity + 1
                            }
                            
                        } else {
                            return orderItem;
                        }
                    })
                } 
        }
            
        case 'ADD_GOOD': {
            const goodIndex = state.order.findIndex(itemG => { console.log(itemG.mainId);
                return itemG.mainId === playload.item.mainId
            });
            let sumAdd = playload.item.price.finalPrice * (playload.item.quantity + 1); 
            let newOrder = null;
            if (goodIndex < 0){
                let existingGood = {
                    ...playload.item,
                    quantity: 1
                }
                newOrder = [...state.order, existingGood];
                
            } else {
                newOrder = state.order.map(orderItem => {
                        if (orderItem.mainId === playload.item.mainId){ 
                            return{
                                ...orderItem,
                                quantity: orderItem.quantity + 1
                            }
                            
                        } else {
                            return orderItem;
                        }
                    })
                }   
            return{
                ...state,
                totalSum: state.totalSum + sumAdd,
                alertName: playload.item.displayName,
                order: newOrder,
            }
        
        }
        default:
            return state;
            
    }
}