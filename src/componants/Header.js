import React from 'react'
import './Header.css'


export default function Header() {
  return (
   <div className="col-12 cover container p-0">
       <img className='img position-relative ' src='data:image/jpeg;base64,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' />
      <h1>Alzahraa Desoky</h1>
       <button className='btn btn-dark coverBtn'> my cv</button>
   </div>
  
   
  )
}
