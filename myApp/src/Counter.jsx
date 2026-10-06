import React, { useEffect } from 'react'
import { useState } from 'react';
const Counter = () => {
  const [count,setCount]=useState(0)
  const [message,setMessage]=useState("")
  const incre=()=>{
    // console.log("count",count+1);
    setCount(count+1);
  }
  const decre=()=>{
    // console.log("count",count-1);
    setCount(count-1);
  }
  useEffect(()=>{
    setMessage(`updated count ${count}`)
  },[count])
  return (
    <div>
    <div>
      <h1>Counter App</h1>
      <div> {count}</div>
      <button onClick={incre} className='border-2 border-b-black bg-amber-400 text-amber-50 size-24'>increment +</button>
      <button onClick={decre} className='border-2 border-b-black bg-amber-400 text-amber-50 size-24'>decrement -</button>
    </div>
    <h2>{message}</h2>
    </div>
  )
}

export default Counter
