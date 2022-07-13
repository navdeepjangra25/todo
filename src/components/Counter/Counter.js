import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {

    const count  = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()

   // const[counter,setCounter]= useState(0); 

   // const increment = () => setCounter(counter+1);
   // const decrement = () => setCounter(counter-1);

        return (
           <div>
                <div>
               <h2>Your curr counter:</h2> 
            </div>
            <div className="input-group mb-3 w-50">
            <div className="input-group-prepend">
              <button className="btn btn-danger" onClick={()=> dispatch(decrement())}>-</button>
            </div>
            <input type="text" className="form-control" 
            value={count}
            aria-label="Amount (to the nearest dollar)" readOnly/>
            <div className="input-group-append">
            <button className="btn btn-primary"  onClick={()=> dispatch(increment())}>+</button>
            </div>
          </div>
           </div>
            
        )
}

export default Counter
