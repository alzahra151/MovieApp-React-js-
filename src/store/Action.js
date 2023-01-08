
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import axiosInst from "../axiosConfig/axiosInstance"
// let FavCounter =useSelector((state)=>state.counter)
let counter=1
export function AddFavourite(data){
    return {
        type :"Add_Favourite",
        payload : data 
    }
}

export function increaseCount(data){
    return {
        type :"Increase_Count",
        payload : data 
    }
}

export function increaseFav(data){
    return {
        type :"Increase_Fav",
        payload : data 
    }
}
export function Delete_Fav(data){
    return {
        type :"Dele_Fav",
        payload : data 
    }
}

export function displayArticls(){
 
    return (dispatch)=>{
        axiosInst.get("/3/movie/popular? api_key=40af18c57a55be474be8b96f120d20cc",{params:{page:counter}}).then((res)=>{
            console.log(res.data.results)
        //    setMovies(res.data.results)
        dispatch({type:"set_movies" ,payload:res.data.results})
        }).catch((err)=>{
            console.log(err)
        })
    }
}


export function nextArticls(){
   
    return (dispatch)=>{
       ++counter
       dispatch({type:"next_articls" ,payload:counter})
    }
}
export function prevArticls(){
   
    return (dispatch)=>{
       --counter
       dispatch({type:"next_articls" ,payload:counter})
    }
}