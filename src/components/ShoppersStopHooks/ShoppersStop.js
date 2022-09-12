import React, {useEffect, useReducer} from 'react'
import Cart from './Cart'
import axios from 'axios'
import Products from './Products'
import {useSelector, useDispatch} from 'react-redux'
import {setProducts} from '../../redux/Shopping/shopping-actions'

const ShoppersStop = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
            dispatch(setProducts(res.data.products))
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    
  return (
    <div style={{display:'flex'}}>
        <Products/>
        <Cart/>
    </div>
  )
}
export default ShoppersStop