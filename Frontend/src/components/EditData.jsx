import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../axiosInterceptor'

const EditData = () => {
    const location = useLocation()
    const [data, setData] = useState(location.state?.item || {})

    const inputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
      }


      function editEmployee() {
           axiosInstance.put( 'https://employee-app-server-delta.vercel.app/admin/update',data).then((res)=>{
            console.log(res.data.message)
            alert('Data edited!')
            })
          } 

  return (
    <div>
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
              name="name"
              value={data.name}
             onChange={inputHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="position"
              id="position"
              value={data.position}
              onChange={inputHandler}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="location"
              value={data.location}
              id="location"
              onChange={inputHandler}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              value={data.email}
              id="email"
              onChange={inputHandler}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              value={data.phone}
              id="phone"
              onChange={inputHandler}
            />
            <Button
              color='success'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={editEmployee}
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
    </div>
  )
}

export default EditData