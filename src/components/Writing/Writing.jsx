import React, { useState } from 'react'
import './writing.css'
const Writing = () => {
  const [text, setText] = useState('')
  const showText = (e) => {
    setText(e.target.value)
  }
  return (
    <div className='container'>
        <input type="text" placeholder='Enter some letters'
        onChange={showText}/>
        <p>{text}</p>
    </div>
  )
}
export default Writing