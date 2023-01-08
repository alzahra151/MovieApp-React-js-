import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axiosInst from '../axiosConfig/axiosInstance'
export default function MovieDetails() {
    const params=useParams()
    const [movie ,setMovie]=useState({})
     useEffect(()=>{
     axiosInst.get(`https://api.themoviedb.org/3/movie/${params.id}?${params.api_key}`).then((res)=>{
        // console.log(res.data)
        setMovie(res.data)
     }).catch((err)=>{
        console.log(err)
     })

     },[])

  return (
    // <div>{movie.original_language}</div>
 
    <div className="card w-25  m-auto" >
                
        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
        <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <p>{movie.overview}</p>
        <a href="#" className="btn btn-success">Display Movie</a>
        </div>
   </div>
  )
}
