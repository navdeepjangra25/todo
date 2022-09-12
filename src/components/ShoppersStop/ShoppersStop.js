import React, {useEffect, useReducer} from 'react'
import Cart from './Cart'
import axios from 'axios'
import Products from './Products'
import {connect} from 'react-redux'
import {setProducts} from './../../redux/Shopping/shopping-actions'

const ShoppersStop = ({products, cart, setProducts}) => {
    console.log(cart);

    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
            // dispatch({type:'ADD_PRODUCTS', payload:res.data.products})
            setProducts(res.data.products)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    
  return (
    <div style={{display:'flex'}}>
        <Products products={products} cart={cart} />
        <Cart cart={cart} />
    </div>
  )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        products: state.shop.products,
        cart: state.shop.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProducts : (productsData) => dispatch(setProducts(productsData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppersStop)