import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>

function Navbar() {

    const navigate = useNavigate();

    const btnStyles ={
        "&.MuiButton-text":{
            color: '#5e5f62',
            textTransform: 'none',
            padding: "10px 20px",
            borderRadius: '15px',
            fontWeight: 600,

            
        },

        "&.MuiButton-outlined":{
            color: '#F0634C',
            border: '2px solid #F0634C',
            borderRadius: '15px',
            textTransform: 'none',
            padding: "10px 30px",
            fontWeight: 600,
            
            
        },
        "&.MuiButton-contained":{
            background: '#F0634C', 
            borderRadius: '15px',
            textTransform: 'none',
            padding: "10px 30px",
            fontWeight: 600,
        }
    }

    const logo = require('./Images/crawleeimg.png');
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="navbar-links">
                <Button 
                onClick={()=> navigate('Home')}
                sx={btnStyles}
                variant="text">Home</Button>

                <Button 
                sx={btnStyles}
                variant="text">Courses</Button>

                <Button 
                sx={btnStyles}
                variant="text">About</Button>
            </div>
            <div className="navbar-buttons">
            <Stack spacing={2} direction="row">

                <Button 
                sx={btnStyles}
                variant="outlined">Login</Button>
                <Button
                sx={btnStyles}
                variant="contained">Sign Up</Button>
                
            </Stack>
            </div>
        </nav>
    );
}

export default Navbar;