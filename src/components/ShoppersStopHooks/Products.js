
import React from 'react'
// import {connect} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart} from '../../redux/Shopping/shopping-actions'
const Products = ()=>{
    const products = useSelector((state) => state.shop.products)
    const cart = useSelector((state) => state.shop.cart)
    const dispatch = useDispatch()
    return(
        <div style={{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'space-evenly',
            width:"70%"
            }}>
            {Array.isArray(products)
        ? products.map(prod => {
            return (
                <div key={prod.id} style={{display:'flex',flexDirection:'column',padding:10, border:'1px solid grey', width:"30%",marginTop:10,gap:10}}>
                    <img src={prod.thumbnail} alt={prod.title} style={{height:200,objectFit:"cover"}}/>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <span>{prod.title}</span>
                        <b>$ {prod.price}</b>
                    </div>
                    {
                    cart.some(p=>p.id === prod.id)
                    ?
                    <button style={{padding:5, border:0, borderRadius:5,backgroundColor:"red", color:"white"}} >Remove from Cart</button>
                    :
                    <button style={{padding:5, border:0, borderRadius:5,backgroundColor:"green", color:"white"}} onClick={()=>dispatch(addToCart(prod.id))}>Add to Cart</button>
                    }
                    
                    
                </div>
            )
          })
        : null}
        </div>
    )
}

export default Products