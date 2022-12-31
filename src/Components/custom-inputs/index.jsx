import React from 'react'
import CustomTextField from './CustomTextField'

function CustomInput({ label, name, value, handleChange }) {
    return (
        <CustomTextField
            margin="normal"
            required
            fullWidth
            id={name}
            label={label}
            name={name}
            value={value}
            onChange={(e) => { handleChange(e, e.target.name) }}
        />
    )
}

export default CustomInput