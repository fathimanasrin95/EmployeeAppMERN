import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css' 

const Home = () => {
  return (
    <div className='home-container'> 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='success' style={{ borderRadius: '20px' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Link to={'/userlogin'}><Button style={{color:'white'}}>User</Button></Link>
          <Link to={'/adminlogin'}><Button style={{color:'white'}}>Admin</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Home