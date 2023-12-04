import {
    Box,
    Stack,
    Typography,
} from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthCheck from '../services/AuthCheck';

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    return (
        <Stack
            direction={'column'}
            alignItems={'center'}
        >
            <AuthCheck/>
            <Stack
                direction={'column'}
                spacing={2}
                sx={{
                    padding: 2,
                    border: '1px solid #33333322',
                    width: {
                        xs:'85%'
                    },
                    borderRadius: '10px',
                    margin: '1em'
                }}
                justifyContent={'space-around'}
                alignItems={'center'}
            >
                <Box
                    component={'img'}
                    // src='https://images.unsplash.com/profile-fb-1698490923-66ff741728bf.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
                    src={user.user.profile_image?.large}
                    sx={{
                        borderRadius: '50%',
                        maxWidth: '10em'
                    }}
                />
                <Typography
                    variant='h5'
                >
                    {user.user.username}
                </Typography>
                <Typography
                    color={'text.secondary'}
                >
                    {user.user.name}
                </Typography>
                {user.user.bio && (<Typography
                    variant='body2'
                    color={'text.secondary'}
                >
                    {user.user.bio}
                </Typography>)}
                <Typography
                    variant='body2'
                    color={'text.disabled'}
                >
                    {'For more information and control over your profile visit '}<Link to={'https://unsplash.com/'}>unsplash.com</Link>
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Profile