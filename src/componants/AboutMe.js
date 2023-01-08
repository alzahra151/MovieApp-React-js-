import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
  return (
   <div className='row container'>
     <div className='col-6 about_me'>
        <h2 className='p-5 text-lg-center'>About Me</h2>
     </div>
     <div className='col-6 p-5 text-start'>
        <p>lorem ipsum dolor sit amet, con lorem lorem ipsum dolor sit amet, con lorem lorem lorem lorem ipsum dolor sit amet, con lorem lorem lorem
            llorem ipsum dolor sit amet, con lorem lorem ipsum dolor sit amet ,lorem ipsum dolor sit amet,lorem lorem
        </p>
        <button className='btn btn-dark '>Download Cv</button>
     </div>
   </div>
  )
}
