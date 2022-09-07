import React, {useEffect, useReducer} from 'react'
import Cart from './Cart'
import axios from 'axios'
import Products from './Products'
import { cartReducer } from '../../reducers/cartReducer'
const ShoppersStop = () => {
    const [state,dispatch] = useReducer(cartReducer, 
        {
            products: [],
            cart:[]
        })
    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
            dispatch({type:'ADD_PRODUCTS', payload:res.data.products})
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div style={{display:'flex'}}>
        <Products state={state} dispatch={dispatch}/>
        <Cart state={state} dispatch={dispatch}/>
    </div>
  )
}

export default ShoppersStop