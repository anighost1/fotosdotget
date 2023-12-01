
import axios from "axios"

export const AccessKey = '3C_WwY6dy_qrngQ50lQvEWEq3ZZtsqhEO7r51c0bxdc'
export const SecretKey = 'l1yyWi-TlHjrkH4VO-6KxNYk-_Xs-94lb5MHcYzsm_A'
export const BaseUrl = 'https://api.unsplash.com';
const PhotoUrl = `${BaseUrl}/photos/`;


const Authentication = () => {
    const redirect_uri = encodeURIComponent('http://localhost:3000/')
    const scope = 'public';
    const url = `https://unsplash.com/oauth/authorize?client_id=${AccessKey}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`
    const link = document.createElement('a');
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const getAuthToken = async (code) => {
    const tokenUrl = 'https://unsplash.com/oauth/token';
    const dataToSend = {
        client_id: AccessKey,
        client_secret: SecretKey,
        redirect_uri: 'http://localhost:3000/',
        code: code,
        grant_type: 'authorization_code'
    }
    return axios.post(tokenUrl, dataToSend)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        })
}

const getPhotos = async () => {
    return axios.get(`${PhotoUrl}?client_id=${AccessKey}`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
}

const searchPhotos = async (keyword, accessToken) => {
    const url = `${BaseUrl}/search/photos?query=${keyword}`;
    const header = {
        Authorization: `Bearer ${accessToken}`
    }
    return axios.get(url, {
        headers: header
    })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
}

const getBlob = async (url) => {
    return axios.get(url, { responseType: 'arraybuffer' })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
}

const getUserProfile = async (accessToken) => {
    const url = `${BaseUrl}/me`;
    const header = {
        Authorization: `Bearer ${accessToken}`
    }
    return axios.get(url, {
        headers: header
    })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
}





const Service = {
    Authentication,
    getAuthToken,
    getPhotos,
    searchPhotos,
    getBlob,
    getUserProfile,
}

export default Service