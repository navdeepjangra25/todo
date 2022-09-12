import React, { useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
const Cart = () => {
  const cart = useSelector((state) => state.shop.cart)
  const [total, setTotal] = useState(0)
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      margin:5,
      backgroundColor:'#cccccc',
      padding:5,
      width:"30%"
      }}>
       <b style={{fontSize:30,alignSelf:'center'}}>Cart</b>
        <b style={{alignSelf:'center'}}>Subtotal: ${total}</b>
        {
          cart.length> 0 ? 
          <>
            {cart.map((prod)=>{
              return (
                <div key={prod.id} style={{display:'flex',padding:10, border:'1px solid grey',margin:5,justifyContent:'space-between'}}>
                  <div style={{display:'flex', alignItems:'center',gap:10}}>
                  <img src={prod.thumbnail} alt={prod.title} style={{width:70,objectFit:"cover"}}/>
                  <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                      <span>{prod.title}</span>
                      <b>$ {prod.price}</b>
                  </div>
                  </div>
                  <div style={{display:'flex', alignItems:'center',gap:10}}>
                  <button >-</button>
                  <span>Qty:{prod.qty}</span>
                  <button>+</button>
                  </div>
              </div>
              )
            })}
          </>
          : 
          (<span  style={{padding:20,alignSelf:'center'}}>
            Cart is Empty
          </span>)
        }
      </div>
  )
}

export default Cart