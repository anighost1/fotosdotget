import React, { useState } from 'react'
import {
    Dialog,
    Button,
    Typography,
    Stack,
    Box,
    IconButton,
} from '@mui/material'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';

import { styled } from '@mui/system';
import ImageDownloader from './ImageDownloader';
import Service from '../services/http';
// import crypto from 'crypto';

const FullImage = ({ open, handleClose, data }) => {


    const CustomButton = styled(Button)({
        color: '#222831',
        borderColor: '#222831',
        '&:hover': {
            backgroundColor: '#222831',
            color: 'white',
        },
    });

    const generateRandomString = () => {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const stringLength = 5;
        let randomString = '';

        for (let i = 0; i < stringLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters[randomIndex];
        }
        return randomString
    };

    const handleDownload = async () => {
        const imageBlob = await Service.getBlob(data.urls?.raw)
        const url = window.URL.createObjectURL(new Blob([imageBlob]));
        ImageDownloader(url, `${generateRandomString()}.jpg`)
    }

    const handleShare = async () => {
        const shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent( `Check out this awesome photo: ${data.urls?.raw}`)}`;
        window.open(shareLink,'_blank')
    }


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={'xl'}
            fullWidth
        >
            <IconButton
                sx={{
                    position: 'absolute',
                    top: 1,
                    right: 1,
                    zIndex: 10,
                    // backgroundColor:'#22283155',
                    background: 'radial-gradient(circle, rgba(34,40,49,0.55) 0%, rgba(34,40,49,0) 70%)',
                    color: '#eeeeee'
                }}
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>
            <Stack
                direction={{
                    xs: 'column',
                    sm: 'row'
                }}
                justifyContent={'space-between'}
            >
                <Box
                    component={'img'}
                    src={data.urls?.regular}
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '60%'
                        },
                        height: '100%'
                    }}
                    flexGrow={2}
                />
                <Stack
                    direction={'column'}
                    spacing={1}
                    sx={{
                        padding: 2
                    }}
                    flexGrow={1}
                >
                    <Typography>
                        {data.description || data.alt_description}
                    </Typography>
                    <Stack
                        direction={{
                            md: 'row',
                            xs: 'column'
                        }}
                        justifyContent={'space-between'}
                        spacing={2}
                        sx={{
                            position: 'sticky',
                            top: 0,
                            pt: 5
                        }}
                    >
                        <CustomButton
                            variant='outlined'
                            fullWidth
                            onClick={handleShare}
                        >
                            <ShareIcon />
                        </CustomButton>
                        <CustomButton
                            variant='outlined'
                            fullWidth
                            onClick={handleDownload}
                        >
                            <DownloadIcon />
                        </CustomButton>
                        <CustomButton
                            variant='outlined'
                            fullWidth
                        >
                            <FavoriteBorderIcon />
                        </CustomButton>
                    </Stack>
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default FullImage