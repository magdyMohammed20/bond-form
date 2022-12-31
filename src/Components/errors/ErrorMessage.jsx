import { Box, Typography } from '@mui/material'
import React from 'react'

function ErrorMessage({ value }) {
    return (
        <>
            {
                value && <Typography variant="caption" sx={{ color: 'red', my: 0 }}>
                    {value}
                </Typography>
            }
        </>
    )
}

export default ErrorMessage