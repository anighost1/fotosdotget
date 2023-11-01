import React from 'react'
import {
    AppBar,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material';
import Face5Icon from '@mui/icons-material/Face5';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import Service from '../services/http';
import { useSelector } from 'react-redux';

const NavBar = () => {

    const accessToken = useSelector((state) => state.user?.access_token)

    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{
                minHeight: 70,
                // borderBottom: "1px solid #aaaaaa88",
                px: 2,
                backgroundColor: '#222831'
            }}
        >
            <Typography
                variant='body'
                sx={{
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    fontFamily: 'sans-serif',
                    color: '#eeeeee'
                }}
            >
                Fotos Dot Get
            </Typography>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{
                    width: {
                        lg: '25%',
                        md: '40%',
                        sm: '50%',
                    },
                }}
            // border={1}
            >
                <TextField
                    variant='outlined'
                    size='small'
                    placeholder='Search...'
                    autoComplete="off"
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'flex'
                        },

                    }}
                    InputProps={{
                        style: {
                            color: '#eeeeee',
                            border: '0.01rem solid #eeeeee88'
                        },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon sx={{ color: '#eeeeee' }} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <IconButton
                    sx={{
                        display: {
                            xs: 'flex',
                            sm: 'none'
                        }
                    }}
                >
                    <SearchIcon fontSize='large' sx={{ color: '#eeeeee' }} />
                </IconButton>
                {!accessToken && (
                    <Tooltip
                        title={'Login'}
                        arrow
                    >
                        <IconButton
                            onClick={Service.Authentication}
                        >
                            <LoginIcon fontSize='large' sx={{ color: '#eeeeee' }} />
                        </IconButton>
                    </Tooltip>
                )}
                {accessToken && (
                    <IconButton>
                        <Face5Icon fontSize='large' sx={{ color: '#eeeeee' }} />
                    </IconButton>
                )}
            </Stack>
        </Stack>
    )
}

export default NavBar