import React, {useEffect, useContext} from "react"
import {API_KEY, API_URL} from '../config'

import { ShopContect } from "../context"

import {Preloader} from './Preloader/Preloader'
import {GoodsList} from './GoodsList'
import {Cart} from './Cart/Cart'
import {Bascket} from './Bascket'
import {Alert} from './Alert'


function Shop(){
    const { setGoods,loading,  isBascketShow,  alertName } = useContext(ShopContect)

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
        })      
        //eslint-disable-next-line  
    }, []);

    return     <main className="container">
        <Cart />
        {loading ? <Preloader /> : <GoodsList />}
        {isBascketShow ? <Bascket  /> : null}
        {alertName && <Alert />}
    </main>
}
export {Shop}