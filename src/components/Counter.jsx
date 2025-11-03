import { useState } from 'react'
import React from 'react'

function Counter() {
     let [counter,setCounter]=useState(0);
    function inc(){
      setCounter(++counter);
      console.log(counter);
      
    }
    function dec(){
      setCounter(--counter);
      console.log(counter);
    }

  return (
    <div>
      <h1>Counter Example</h1>
      <hr /><hr />

      <button onClick={inc}>+</button>
      <br />{counter} <br />

      <button onClick={dec}>-</button>
    </div>
  )
}

export default Counter
