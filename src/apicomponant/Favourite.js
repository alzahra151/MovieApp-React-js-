import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {  useSelector,useDispatch } from 'react-redux'
import { Delete_Fav, increaseCount } from '../store/Action'


export default function Favourite() {

  let counter =useSelector((state)=>state.counter)
  let favArr=useSelector((state)=>state.favourites)
  const dispatch =useDispatch()
  function deletFav(mov){
    let deletFva=favArr.filter((movie)=>movie.id!=mov.id)
    favArr=deletFva
    dispatch(Delete_Fav(favArr))
    dispatch(increaseCount(favArr.length))
  }
  return (
    <div className='container d-flex flex-wrap'>
    {favArr.map((movie)=>{
      return (
          <div className="card w-25  m-4"  onClick={()=>{deletFav(movie)}} key={movie.id}>
            <i class="bi bi-trash3-fill text-dark"></i>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
         <div>
         <h5 className="card-title">{movie.original_title}</h5>
        <p>{movie.overview}</p>
         {/* <Link  to={`/details/${movie.id}`} >
            <a href="#" className="btn btn-primary">Go Details</a>
         </Link> */}
         </div>
        </div>
        </div>
      )
      
  })}
  </div>
  )
}
