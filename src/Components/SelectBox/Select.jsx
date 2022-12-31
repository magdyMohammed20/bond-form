import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectMarital({ value, handleChange }) {

    return (
        <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
            <Select
                id="demo-simple-select"
                value={value}
                name="marital_status"
                label="Marital Status"
                onChange={e => handleChange(e, e.target.name)}
                fullWidth
                sx={{
                    '.MuiOutlinedInput-notchedOutline label': {
                        color: '#222'
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#d3d3d3',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#d3d3d3',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#d3d3d3',
                    },
                    '.MuiSvgIcon-root ': {
                        fill: "#a79e9e !important",
                    }
                }}
            >
                <MenuItem value="1">Single</MenuItem>
                <MenuItem value="2">Married</MenuItem>
            </Select>
        </FormControl>

    );
}