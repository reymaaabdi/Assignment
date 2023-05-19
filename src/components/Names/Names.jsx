import React, { useRef, useState } from 'react'
import './names.css'
const Names = () => {
    //const developers = ['Ahmed','Maria']
    const [developers, setDevelopers] = useState([])
    const [developer, setDeveloper] = useState('')
    const developerRef = useRef()
    const addDeveloper = (e) => {
        e.preventDefault()
        const newDeveloper = [developer]
        setDevelopers([...developers,newDeveloper])
        setDeveloper('')
        developerRef.current.focus()
    }
    return(
        <div className='container'>
            <form onSubmit={addDeveloper}>
                <input type='text' placeholder='Enter a name' required value={developer} ref={developerRef}
                className='input'
                onChange={(e) =>
                setDeveloper(e.target.value)}/>
                <input type='submit' 
                value='Add'
              className='btnAdd'/>
             </form>
            {developers.map((developer,index) => (
                <li key ={index}>{developer}</li>
            ))}
        </div>
    )
}
export default Names