import React, { useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Container,
    Button
} from '@mui/material';
import ImageCard from '../components/ImageCard';
import ImageSkeleton from '../components/ImageSkeleton';
import Service from '../services/http';
import FullImage from '../components/FullImage';
import { addToken } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {

    const [images, setImages] = useState([])
    const [selectedData, setSelectedData] = useState({})
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const accessToken = useSelector((state) => state.user?.access_token)

    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code')

    const authentication = async () => {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
        const authResponse = await Service.getAuthToken(code)
        localStorage.setItem('access_token', authResponse.access_token)
        dispatch(addToken(authResponse.access_token))
        console.log(authResponse)
    }

    // const accessTokenCheck = () => {
    //     if (localStorage.getItem('access_token')) {
    //         dispatch(addToken(localStorage.getItem('access_token')))
    //     }
    // }

    // useEffect(() => {
    //     accessTokenCheck()
    // }, [code])

    useEffect(() => {
        if (code) {
            authentication()
        }
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const fetchImages = async () => {
        const data = await Service.getPhotos();
        if (data) {
            setImages(data)
        }
        // console.log(data)
    }

    useEffect(() => {
        fetchImages()
    }, [])

    const selectImage = (data) => {
        setSelectedData(data)
    }

    return (
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
    );
}