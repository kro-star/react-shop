import { createContext, useReducer } from "react"
import {reduser} from './reducer';

export const ShopContect = createContext();

const intialState = {
    goods: [],
    loading: true,
    order: [],
    isBascketShow: false,
    totalSum: 0,
    alertName: '',
}


export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reduser, intialState)

    value.setGoods = (data) =>{
        dispatch({type: 'SET_GOODS', playload: data})
    }
    value.closeAlert = (name) =>{
        dispatch({type:'CLOSE_ALERT', playload: {name}})
    }
    value.handleBascketShow = () => {
        dispatch({type: 'HANDLE_BASCKET_SHOW'})
    }
    value.removeGood = (id) =>{
        dispatch({type:'REMOVE_GOOD',playload: {id: id}})
    }
    value.addGood = (item) =>{
        dispatch({type:'ADD_GOOD',playload: {item}})
    }
    value.incrementGood = (id) =>{
        dispatch({type:'INCREMENT_GOOD',playload: {id: id}})
    }
    value.decrementGood = (id) =>{
        dispatch({type:'DECREMENT_GOOD',playload: {id: id}})
    }


    
    return <ShopContect.Provider value = {value}>
        {children}
        </ShopContect.Provider>
}