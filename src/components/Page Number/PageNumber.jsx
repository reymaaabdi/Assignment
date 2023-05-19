import React, { useState } from 'react'
import './pageNumber.css'
const PageNumber = () => {
    const [count, setCount] = useState(1)
    const update = () => {
        setCount(count + 1)
    }
  return (
    <div className='container'>
        <h2>Prev: {count -1}</h2>
        <h2>Current: {count}</h2>
        <button type='button'
        className='updateBtn'
        onClick={update}>Update</button>
    </div>
  )
}

export default PageNumber