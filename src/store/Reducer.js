const Initial_state = {
  
    favourites:[],
    counter:0,
    movies:[],
    pageCounter:1
}
export function favouriteReducer(State = Initial_state , action){
    switch (action.type) {
        case "Increase_Count":
              return {...State ,counter:action.payload}
         case "Increase_Fav":
                return {...State ,favourites: action.payload}
         case "Dele_Fav":
                return {...State ,favourites:action.payload}  
         case "set_movies":
            return {...State, movies:action.payload}
            case "next_articls":
                return {...State, pageCounter:action.payload}
        default: return{...State}
    }
}