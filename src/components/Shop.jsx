import React, {useState, useEffect} from "react"
import {API_KEY, API_URL} from '../config'
import { Link } from 'react-router-dom'; 

import {Header} from './Header';
import {Footer} from './Footer';
import {Preloader} from './Preloader/Preloader'
import {GoodsList} from './GoodsList'
import {Cart} from './Cart/Cart'
import {Bascket} from './Bascket'
import {Alert} from './Alert'

function Shop(){

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBascketShow, setBascketShow] = useState(false);    
    const [totalSum, setTotalSum] = useState(0);
    const [alertName, setAlertName] = useState('');

    const handleBascketShow = () => {     
        setBascketShow(!isBascketShow);
    }

    useEffect(()=>{
        fetch(API_URL, {
            headers:{
            'Authorization' : API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.shop.slice(0, 20))
            setGoods(data.shop);
            setLoading(false)
        })        
    }, []);

    const addGood = (item) => {
        
        const goodIndex = order.findIndex(itemG => itemG.mainId === item.mainId);
        setTotalSum(totalSum + item.price.finalPrice);    
        if (goodIndex < 0){
            const existingGood = {
                ...item,
                quantity: 1
            }
            setOrder([...order, existingGood]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === goodIndex){
                    return{
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder);       
        }
        setAlertName(item.displayName);
        
    }

    const incrementGood = (id) => {
        const goodIndex = order.findIndex(itemG => itemG.mainId === id);
        setTotalSum(totalSum + order[goodIndex].price.finalPrice);    
        const newOrder = order.map((orderItem, index) => {
            if (index === goodIndex){ 
                return{
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                }
                
            } else {
                return orderItem;
            }
        })
        setOrder(newOrder);
        

    }
    const decrementGood = (id) => {
        const goodIndex = order.findIndex(itemG => itemG.mainId === id);
        setTotalSum(totalSum - order[goodIndex].price.finalPrice);    
        if (order[goodIndex].quantity === 1){
            const newOrder = order.filter(itemG => itemG.mainId !== id);
            setOrder(newOrder);
        } else {

            const newOrder = order.map((orderItem, index) => {
                if (index === goodIndex){ 
                    return{
                        ...orderItem,
                        quantity: orderItem.quantity - 1
                    }
                    
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);       
        }
        
    }

    const removeGood = (id) => {        
        const goodIndex = order.findIndex(itemG => itemG.mainId === id);
        setTotalSum(totalSum - order[goodIndex].price.finalPrice * order[goodIndex].quantity);
         
        const newOrder = order.filter(itemOrder => itemOrder.mainId !== id);
            
           
        setOrder(newOrder);
    }
    const closeAlert = () => {
        setAlertName('');
    }


    return <>
    <Header />
    <main className="container">
        <Cart quantity = {order.length} handleBascketShow = {handleBascketShow}/>
        {loading ? <Preloader /> : <GoodsList goods={goods} addGood = {addGood}  closeAlert = {closeAlert}/>}
        {isBascketShow ? <Bascket order={order} handleBascketShow = {handleBascketShow} addGood={addGood} totalSum={totalSum} removeGood = {removeGood} decrementGood={decrementGood} incrementGood={incrementGood} /> : null}
        {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
    </main>
    <Footer />
    </>
    
}
export {Shop}