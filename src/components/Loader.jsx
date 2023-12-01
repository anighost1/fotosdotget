import React from 'react'
import {
    LinearProgress, Stack,
} from '@mui/material';

export default function Loader() {
    return (
        <Stack
            sx={{
                width:'100vw',
                position:'sticky',
                top:0
            }}
        >
            <LinearProgress 
                sx={{
                    width:'100%'
                }}
            />
        </Stack>
    )
}
