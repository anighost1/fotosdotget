import React, { useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Container
} from '@mui/material';
import ImageCard from '../components/ImageCard';
import ImageSkeleton from '../components/ImageSkeleton';
import Service from '../services/http';
import FullImage from '../components/FullImage';


export default function Home() {

    const [images, setImages] = useState([])
    const [selectedData, setSelectedData] = useState({})
    const [open, setOpen] = useState(false);

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

    const selectImage = (data)=>{
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