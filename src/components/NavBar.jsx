import React, { useState } from 'react'
import {
    Button,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Tooltip,
    Typography,
    Menu,
    MenuItem,
    Fade,
    Box
} from '@mui/material';
import Face5Icon from '@mui/icons-material/Face5';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import Service from '../services/http';
import { useSelector, useDispatch } from 'react-redux';
import { assignKeyword } from '../redux/slices/search';
import { searchTrigger } from '../redux/slices/search';
import { Link } from 'react-router-dom';
import logout from './logout';

const NavBar = () => {

    const user = useSelector((state) => state.user)
    const searchKeyword = useSelector((state) => state.search.keyword)
    const dispatch = useDispatch()
    const [searchOpen, setSearchOpen] = useState(false)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onchangeSearch = (e) => {
        const { value } = e.target
        dispatch(assignKeyword(value))
    }

    const onSearch = () => {
        if (user.access_token) {
            dispatch(searchTrigger())
        }else{
            setSearchOpen(true)
        }
    }

    const handleSearchOpen = () => {
        setSearchOpen(!searchOpen)
    }

    return (
        <>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{
                    minHeight: 70,
                    px: 2,
                    backgroundColor: '#222831'
                }}
            >
                <Stack
                    direction={'row'}
                    spacing={1}
                    alignItems={'center'}
                >
                    <Box
                        component={'img'}
                        src='/logo192.png'
                        width={'3em'}
                    />
                    <Typography
                        variant='body'
                        sx={{
                            fontWeight: 600,
                            fontSize: '1.5rem',
                            fontFamily: 'sans-serif',
                            color: '#eeeeee',
                            display: {
                                xs: 'none',
                                sm: 'block'
                            }
                        }}
                    >
                        Fotos Dot Get
                    </Typography>
                </Stack>
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
                        value={searchKeyword}
                        onChange={onchangeSearch}
                        InputProps={{
                            style: {
                                color: '#eeeeee',
                                border: '0.01rem solid #eeeeee88'
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton autoFocus onClick={onSearch}>
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
                        onClick={handleSearchOpen}
                    >
                        <SearchIcon fontSize='large' sx={{ color: '#eeeeee' }} />
                    </IconButton>
                    {!user.access_token && (
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
                    {user.access_token && (
                        <IconButton
                            onClick={handleClick}
                        >
                            <Face5Icon fontSize='large' sx={{ color: '#eeeeee' }} />
                        </IconButton>
                    )}
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <Link style={{ textDecoration: 'none' }} to={'/profile'}>
                            <MenuItem onClick={handleClose}>
                                <Button sx={{ color: 'black' }}>Profile</Button>
                            </MenuItem>
                        </Link>
                        <MenuItem onClick={() => { handleClose(); logout() }}>
                            <Button sx={{ color: 'black' }}>Logout</Button>
                        </MenuItem>
                    </Menu>
                </Stack>
            </Stack>
            {searchOpen && user.access_token && (<TextField
                variant='outlined'
                size='small'
                placeholder='Search...'
                autoComplete="off"
                sx={{
                    display: {
                        xs: 'flex',
                        sm: 'none'
                    },
                    margin: 1
                }}
                value={searchKeyword}
                onChange={onchangeSearch}
                InputProps={{
                    style: {
                        color: '#222831',
                        border: '0.01rem solid #222831'
                    },
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton autoFocus onClick={onSearch}>
                                <SearchIcon sx={{ color: '#222831' }} />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />)}
            {searchOpen && !user.access_token && (
                <Typography
                    variant='body2'
                    margin={1}
                    textAlign={'center'}
                >
                    You need to be signed in to use this feature.
                </Typography>
            )}
        </>
    )
}

export default NavBar