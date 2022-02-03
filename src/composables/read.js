let api_uri= process.env.VUE_APP_API_ROOTER
import axios from 'axios'

export default async function read(path, next){
    try {
        await axios.get(`${api_uri}/${path}`)
                  .then((response)=>{
                   console.log(response.data["hydra:member"])
                   return next(response.data["hydra:member"]);
                  })
                  .catch((er)=>{
                      return next(er.response.status)
                  })
    } catch (error) {
        console.log(error)
    }
}