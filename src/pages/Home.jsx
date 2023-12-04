import React, { useEffect, useState } from 'react';
import {
    Grid,
    Container,
} from '@mui/material';
import ImageCard from '../components/ImageCard';
import ImageSkeleton from '../components/ImageSkeleton';
import Service from '../services/http';
import FullImage from '../components/FullImage';
import { addToken, addUser } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';


export default function Home() {

    const [images, setImages] = useState([])
    const [selectedData, setSelectedData] = useState({})
    const [open, setOpen] = useState(false);
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch()
    const accessToken = useSelector((state) => state.user?.access_token)
    const {keyword, trigger} = useSelector((state) => state.search)

    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code')

    const authentication = async () => {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
        const authResponse = await Service.getAuthToken(code)
        localStorage.setItem('access_token', authResponse.access_token)
        dispatch(addToken(authResponse.access_token))
    }

    const fetchProfile = async (token) => {
        const profile = await Service.getUserProfile(token)
        dispatch(addUser(profile))
    }

    useEffect(() => {
        if (code) {
            authentication()
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            dispatch(addToken(localStorage.getItem('access_token')))
            fetchProfile(localStorage.getItem('access_token'))
        }
    }, [accessToken])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const searchImages = async () => {
        setLoader(true)
        const data = await Service.searchPhotos(keyword, accessToken);
        if (data) {
            setImages(data.results)
        }
        setLoader(false)
    }

    const fetchImages = async () => {
        setLoader(true)
        const data = await Service.getPhotos();
        if (data) {
            setImages(data)
        }
        setLoader(false)
    }
    
    useEffect(() => {
        if (keyword) {
            searchImages()
        }else{
            fetchImages()
        }
    }, [trigger])

    useEffect(() => {
        fetchImages()
    }, [])

    const selectImage = (data) => {
        setSelectedData(data)
    }

    return (
        <>
        {loader && (<Loader/>)}
        <Container sx={{ py: 8 }} maxWidth="md">
            <FullImage open={open} handleClose={handleClose} data={selectedData} />
            <Grid container spacing={4}>
                {images.length == 0 && (<Grid item xs={12} sm={6} md={4}>
                    <ImageSkeleton />
                </Grid>)}
                {images.map((img) => (
                    <Grid item key={img.id} xs={12} sm={6} md={4}>
                        <ImageCard data={img} handleClickOpen={handleClickOpen} selectImage={selectImage} />
                    </Grid>
                ))}
            </Grid>
        </Container >
        </>            
    );
}