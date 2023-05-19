import React, { useState } from 'react'
import './counter.css'
const Counter = () => {
    const [count, setCount] =  useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        count ==0 ? setCount(0) : setCount(count - 1)
    }
    const resetCount = () => {
        setCount(0)
    }
  return (
    <div className='container'>
        <h1>Count: {count}</h1>
        <button type='button'
        className='btnReset'
        onClick={resetCount}>Reset</button>
        <button type='button'
        className='btnPlus'
        onClick={incrementCount}>+</button>
        <button type='button'
        className='btnMinus'
        onClick={decrementCount}>-</button>
    </div>
  )
}

export default Counter