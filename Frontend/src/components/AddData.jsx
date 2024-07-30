
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axiosInstance from '../axiosInterceptor'


const AddData = () => {
    const [data,setData] = useState({
        name:'',
        position:'',
        location:'',
        email:'',
        phone:''
      })
    
      const inputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
      }
    
      function addData(){
    
        const isEmpty = Object.values(data).some((field) => field.trim() === '')
    
        if (isEmpty) {
          alert('Please fill in all required fields before submitting.')
          return;
        }
    
        axiosInstance.post('https://employee-app-server-delta.vercel.app/admin/add', data).then((res)=>{
          console.log(res.data.message)
          alert('Data added successfully')
    
        })
      }
    




  return (
    <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'ghostwhite',
        padding: '10px'
      }}>
       <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form"  noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
         onChange={inputHandler}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="position"
          label="Position"
          id="position"
          onChange={inputHandler}
        />
         <TextField
          margin="normal"
          required
          fullWidth
          name="location"
          label="Location"
          id="location"
          onChange={inputHandler}
        />
         <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email"
          id="email"
          onChange={inputHandler}
        />
         <TextField
          margin="normal"
          required
          fullWidth
          name="phone"
          label="Phone"
          id="phone"
          onChange={inputHandler}
        />
        <Button
          color='success'
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={addData}
        >
          Submit
        </Button>
        <Grid item>
            <Link href='/adminview' variant="body2">
              {"Back"}
            </Link>
          </Grid>
      </Box>
    </Box>
  </Container>

  )
}

export default AddData