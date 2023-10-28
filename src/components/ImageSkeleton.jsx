import React from 'react'
import {
    Card,
    CardMedia,
    Typography,
    IconButton,
    Stack,
    Box,
    Skeleton
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const ImageSkeleton = () => {
    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <Stack spacing={1} padding={1}>
                <Skeleton variant='rounded' height={100} />
                <Skeleton variant='rounded' />
                <Skeleton variant='rounded' height={30} />
            </Stack>
        </Card>
    )
}

export default ImageSkeleton