import React, { useEffect, useReducer, useRef, useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);
  const [message,setMessage]=useState("")
  const renderCount=useRef(0)
  useEffect(()=>{
   setMessage(`updated Count=${count}`)
   renderCount.current+=1;
  },[count])
  function increment(){
    setCount(count+1);
  }
function decrement(){
setCount(count-1);
}
  return (
    <div>
      <h1>Counter App</h1>
      <div>

        <button onClick={increment}>+</button>
        <div>{count}</div>
        <button onClick={decrement}>-</button>
      </div>
      <h2>{message}</h2>
      <h3>{
        renderCount.current
      }</h3>
    </div>
  )
}

export default Counter

