import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown({ options, onChange, value, info, label }) {
    return (
        <FormControl style={{width:"200px"}}>
            <InputLabel className="dropdown" >{label}</InputLabel>
            <Select
                className="dropdown"
                value={value}
                label={label}
                onChange={onChange}
            >
                {
                    options.map((option, index) => {
                        return <MenuItem key={index} value={option.id}>{option.name}</MenuItem>
                    })
                }
            </Select>
        </FormControl>
    )
}

export default Dropdown;
