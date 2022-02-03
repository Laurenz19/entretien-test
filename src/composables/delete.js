let api_uri= process.env.VUE_APP_API_ROOTER
import axios from 'axios'

export default async function remove(path, next){
    try {
        await axios.delete(`${api_uri}/${path}`)
                   .then((response)=> {return next(response.status)})
                   .catch((er)=>{return next(er.response.status)})
    } catch (error) {
        console.log(error)
    }
}