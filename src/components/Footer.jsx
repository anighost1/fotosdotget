import React from 'react'
import {
    Typography,
    Box,
    Link
} from '@mui/material';

const Footer = () => {

    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                {/* <Link color="inherit" href="https://mui.com/"> */}
                    {'Fotos Dot Get '}
                {/* </Link>{' '} */}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Fotos Dot Get
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                An idea doesn't have to die
            </Typography>
            {/* <Copyright /> */}
        </Box>
    )
}

export default Footer