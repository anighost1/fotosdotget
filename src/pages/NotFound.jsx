import React from 'react'
import {
    Typography,
    Stack
} from '@mui/material'

export default function NotFound() {
    return (
        // <div>The page you are trying to find is not available</div>
        <Stack
            direction={'column'}
            alignItems={'center'}
        >
            <Stack
                direction={'column'}
                spacing={2}
                sx={{
                    padding: 2,
                    border: '1px solid #33333322',
                    width: {
                        xs: '85%'
                    },
                    borderRadius: '10px',
                    my: '10em'
                }}
                justifyContent={'space-around'}
                alignItems={'center'}
            >
                <Typography
                    variant='h3'
                    textAlign={'center'}
                    color={'text.secondary'}
                >
                    The page you are trying to find is not available
                </Typography>
            </Stack>
        </Stack>
    )
}
