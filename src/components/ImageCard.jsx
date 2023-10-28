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

const ImageCard = ({ data }) => {
    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardMedia
                component="div"
                sx={{
                    pt: '56.25%',
                }}
                // image="https://source.unsplash.com/random?wallpapers"
                image={data.urls.small_s3}
            />
            <Typography
                gutterBottom
                variant="body"
                sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    padding: '0.3rem'
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
                        <ThumbUpIcon fontSize='small' />
                    </IconButton>
                    <Typography>{data.likes}</Typography>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ImageCard