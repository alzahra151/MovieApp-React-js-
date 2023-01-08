import React, { useEffect ,useState ,useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axiosInst from '../axiosConfig/axiosInstance'
import { useDispatch ,useSelector } from 'react-redux'
import { displayArticls, increaseCount ,increaseFav, nextArticls, prevArticls} from './../store/Action'
import {Movies} from './Movies.css' 
import { languagContext } from '../context/context'


export default function Movie() {
//  let [movies ,setMovies]=useState([])
let movies=useSelector((state)=>state.movies)
//  const params=useParams()

 let FavCounter =useSelector((state)=>state.counter)
 var favArr=useSelector((state)=>state.favourites)
//  var [favArr, setFav]=useState([])
 const dispatch =useDispatch()
 const {languag ,setLanguag}=useContext(languagContext)
// let [counter, setCounter]=useState(1)
    useEffect(()=>{
    //    axiosInst.get(`/3/movie/popular?${params.apikey}`).then((res)=>{
    //         console.log(res.data.results)
    //        setMovies(res.data.results)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    dispatch(displayArticls())
    },[])
  function  next(){
        
        // setCounter(++counter)
        // axiosInst.get(`/3/movie/popular?${params.apikey}`,{params:{page:counter}}).then((res)=>{
        //     console.log(res.data.results)
        // //  movies= res.data.results
        // }).catch((err)=>{
        //     console.log(err)
        // })
          dispatch(nextArticls())
         dispatch(displayArticls())
        
    }
    function  prev(){
       
        // setCounter(--counter)
        // axiosInst.get(`/3/movie/popular?${params.apikey}`,{params:{page:counter}}).then((res)=>{
        //     console.log(res.data.results)
        //    movies=res.data.results
        // }).catch((err)=>{
        //     console.log(err)
        // })
        dispatch(prevArticls())
           dispatch(displayArticls())
        
    }
    const addFav=(e)=>{
       let exitemovie=  favArr.find((movie)=>{
                return movie.id==e.id
         })
      
        if(!exitemovie){
            favArr.push(e)
        }
       
        dispatch(increaseFav(favArr))
        console.log(favArr)
        
        dispatch(increaseCount(favArr.length))
    }
  return (
    <div>
     {/* <button className='btn btn-primary' onClick={()=>{setLanguag((languag=="en")?"Ar":"en")}}>
        language
        </button> */}
        {/* <span>{languag}</span> */}
    <div className='container d-flex flex-wrap'>
        {movies.map((movie)=>{
            return (
                <div className="card w-25  m-4" onClick={()=>{addFav(movie)}} key={movie.id} >
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
            <button class="border-0 bg-light"> <i class={`bi ${(favArr.find((m)=>m.id==movie.id))?"bi-heart-fill text-danger":"bi-heart text-danger"} `}></i> </button>
            
               <div>
               <Link  to={`/details/${movie.id}`} >
                  <a href="#" className="btn details">Go Details</a>
                  </Link>
               </div>
              </div>
              </div>
            )
        })}
       
    </div>
   
   <button onClick={()=>{next()}} className='btn btn-success m-5 p-3'> next</button>
        <button onClick={()=>{prev()}} className='btn btn-success m-5 p-3'>prev</button>
    </div>
  )
}
