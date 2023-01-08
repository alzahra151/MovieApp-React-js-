import axios from 'axios'

const axiosInst=axios.create({
    baseURL :'https://api.themoviedb.org',
    params:{
        api_key: '40af18c57a55be474be8b96f120d20cc'
    }
    
})

export default axiosInst