import React,{useState} from 'react';

import "./Message.css";

const Message = () => {
    const [message,setMessage]=useState("Hi Navdeep");

 const [show, setShow] = useState(true);   
   const update = () => {
       setMessage("Hello Navdeep");
       setTimeout(()=> setShow(false),2000 );
   }
   
   if(show){
    return (
        <div class="message">
            <p>{message}</p>
            <button type="button" onClick={update}>Update Message</button>
        </div>
    );
   }else{
       return <h1>Your browser is upto date.</h1>
   }
    

}

export default Message;
