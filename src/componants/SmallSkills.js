import React from 'react'
import './SmallSkills.css'
export default function SmallSkills(props) {
  return (
    <div className="progress m-2 " style={{height:"50px"}}>
    <div className="progress-bar firstPart" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">{props.name}</div>
    <div className="progress-bar thirdPart" role="progressbar" style={{width:props.width}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  )
}
