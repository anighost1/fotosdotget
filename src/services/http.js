
import axios from "axios"


const getPhotos = ()=>{
    const baseUrl = 'https://api.unsplash.com/photos/';
    const accessKey = '3C_WwY6dy_qrngQ50lQvEWEq3ZZtsqhEO7r51c0bxdc'
    return axios.get(`${baseUrl}?client_id=${accessKey}`)
    .then((res)=>{
        // console.log(res.data)
        return res.data
    })
    .catch((err)=>{
        // console.log(err)
        throw err
    })
}



const Service = {
    getPhotos
}

export default Service