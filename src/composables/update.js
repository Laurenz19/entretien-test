let api_uri= process.env.VUE_APP_API_ROOTER
import axios from 'axios'

export default async function update(path, data, next){
    try {
        await axios.put(`${api_uri}/${path}`, data)
                   .then((response)=> {return next({"satus":response.status, "data":response})})
                   .catch((er)=>{return next({"status":er.response.status, "data":er.response.data.violations})})
    } catch (error) {
        console.log(error)
    }
}