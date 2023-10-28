import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Container
} from '@mui/material';
import ImageCard from '../components/ImageCard';
import ImageSkeleton from '../components/ImageSkeleton';
import Service from '../services/http';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {

    const [images, setImages] = useState([])

    const fetchImages = async () => {
        const data = await Service.getPhotos();
        if (data) {
            setImages(data)
        }
        console.log(data)
    }

    useEffect(() => {
        fetchImages()
    }, [])

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {images.length == 0  && (<Grid item xs={12} sm={6} md={4}>
                    <ImageSkeleton />
                </Grid>)}
                {images.map((img) => (
                    <Grid item key={img.id} xs={12} sm={6} md={4}>
                        <ImageCard data={img} />
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
}