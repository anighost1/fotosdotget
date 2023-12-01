import React from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Container,
    IconButton,
    Stack,
    Box
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

const ImageCard = ({ data, handleClickOpen, selectImage }) => {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: '150ms',
                ":hover": {
                    transform: "scale(1.008)"
                },
            }}
        >
            <CardMedia
                component="div"
                sx={{
                    pt: '56.25%',
                    cursor: 'pointer',
                    transition: '100ms',
                    ":hover": {
                        transform: "scale(1.008)"
                    },
                }}
                // image="https://source.unsplash.com/random?wallpapers"
                image={data.urls.small_s3}
                onClick={() => { handleClickOpen(); selectImage(data) }}
            />
            <Typography
                gutterBottom
                variant="body2"
                color={'text'}
                sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    padding: '0.5rem'
                }}
            >
                {data.description || data.alt_description}
            </Typography>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Box>
                    <IconButton>
                        <ShareIcon fontSize='small' />
                    </IconButton>
                    <IconButton>
                        <DownloadIcon fontSize='small' />
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderIcon fontSize='small' />
                    </IconButton>
                </Box>
                <Stack direction={'row'} spacing={1} px={1} alignItems={'center'}>
                    <IconButton>
                        <ThumbUpOutlinedIcon fontSize='small' />
                    </IconButton>
                    <Typography>{data.likes}</Typography>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ImageCard