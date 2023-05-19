import React, { useState } from 'react'
import './nalka.css'
import on from './images/on.png'
import off from './images/off.png'
const Nalka = () => {
    const [toggle,setToggle] = useState(true)
    const toggleBtn = () => {
        setToggle(!toggle)
    }
  return (
    <div className='container'>
        <img src={toggle?on:off} width='400'/>
        <button onClick={toggleBtn} className='btnOnOff'>{toggle?'on':'off'}</button>
    </div>
  )
}
export default Nalka