import React from 'react'
import './Skills.css'
import SmallSkills from './SmallSkills'
export default function Skills() {
  return (
    <div className='row bg-dark p-5 container m-auto'>
      <h2 className='text-light'>Skills</h2>
      <p className='text-light'>lorem lorem ipsum dolor sit amet lorem orem lorem ipsum dolor sit amet lorem orem lorem ipsum dolor sit amet lorem orem lorem ipsum dolor sit amet lorem ,
        ipsum dolor sit amet lorem orem lorem ipsum dolor sit amet lorem orem lorem ipsum dolor sit amet lorem orem lorem ipsum dolor sit amet lorem
        ipsum dolor sit amet lorem orem lorem ipsum dolor sit amet lorem orem lorem ipsum dolor sit amet lorem orem lorem ipsum dolor sit amet lorem.
      </p>
      <div className='col-3 text-light m-auto'>
        <ul className='skilsList'>
          <li>MY Works</li>
          <hr/>
          <li>ui/ux Design</li>
          <li>Responseive Design</li>
          <li> Web Design</li>
          <li>Mobile App Design</li>
          <li>ui/ux Design</li>
          <li>Responseive Design</li>
        </ul>
      </div>
      <div className='col-6 '>
        <SmallSkills width={"50%"} name={"js"} />
        <SmallSkills width={"30%"} name={"css "} />
        <SmallSkills width={"80%"} name={"php"} />
        <SmallSkills width={"70%"} name={"c#"} />
        <SmallSkills width={"75%"} name={"angular"} />
        <SmallSkills width={"80%"} name={"react"} />
        <SmallSkills width={"40%"} name={"js"} />
      </div>
    </div>
  )
}
