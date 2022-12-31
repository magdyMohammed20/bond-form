import { Box, Typography } from '@mui/material'
import React from 'react'
import { thanksBox, thanksTypo } from '../style/styles';
function Thanks() {
    return (
        <Box sx={thanksBox}>
            <Typography variant='h3' sx={thanksTypo}>
                Thanks For Submit Your Application
            </Typography>
        </Box>
    )
}

export default Thanks