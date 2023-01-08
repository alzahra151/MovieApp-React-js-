import React from 'react'
import Portcard  from './Portcard'
import './Portfolio.css'

export default function Portfolio() {
    return (
        <div className=''>
            <h2 className='text-start container mt-5 '>Portfolio</h2>
        <div className='col-12 portfolio container p-3 d-flex flex-wrap' >
           
              <Portcard bg={"gray"}/>
              <Portcard bg={"rgb(214, 213, 213)"}/>
              <Portcard bg={"gray"}/>
              <Portcard bg={"rgb(214, 213, 213)"}/>
              <Portcard bg={"gray"}/>
              <Portcard bg={"rgb(214, 213, 213)"}/>
        </div>
        </div>
    )
}
