import React from 'react'
import '../App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import logo from "../assets/logo.png"


function SearchBar({ search }) {
    const [valueInput, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        search(valueInput)
    }

    return (
        <div className='formDiv'>
            <form onSubmit={handleFormSubmit}>
                <div className='logoDiv'>
                <img className='logoImg' src={logo} alt='logo'/>
                </div>
                
                <TextField value={valueInput} onChange={handleChange} id="outlined-basic" label="Search Photo" variant="outlined" />
            </form>
        </div>
    )
}

export default SearchBar