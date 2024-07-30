import React, { useEffect, useState } from 'react'
import axiosInstance from '../axiosInterceptor';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Toolbar, Typography } from '@mui/material';

const AdminView = () => {
    const navigate = useNavigate()
    const [data,setData] = useState([])
    const [selectedData, setSelectedData] = useState([])
  
    useEffect(()=>{
            axiosInstance.get('https://employee-app-server-delta.vercel.app/admin/get').then((res)=>{
              setData(res.data)
            })
    },[])
  
    function deleteData(itemId) { 
      axiosInstance.delete(`https://employee-app-server-delta.vercel.app/admin/delete/${itemId}`)
          .then((res) => {
              alert(res.data.message);
              const updatedData = data.filter((item) => item._id !== itemId)
              setData(updatedData)
          })
          .catch((error) => {
              console.error('Error deleting data:', error)
          })
  }
  


  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="flex" color='success'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee List
        </Typography>
        <Button color="inherit"  onClick={()=>{
        navigate('/adddata')  }}>Add-Employee</Button>
        <Button color="inherit"  onClick={()=>{
        localStorage.removeItem('token')
        navigate('/adminlogin')  }}>Logout</Button>
      </Toolbar>
    </AppBar>
  </Box>
 
      <Box sx={{ flexGrow: 2, mt:5,px:3 }}>
      <Grid container spacing={2}>
      {data.map((item)=>(
      <Grid item xs={6} md={4} sm={4}>
      <Card sx={{ maxWidth: 345, backgroundColor: 'beige' }} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.position}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{setSelectedData(item)
          navigate('editdata',{state:{item}})
         }}>Edit</Button>
        <Button size="small" onClick={() => deleteData(item._id)}>Delete</Button>
      </CardActions>
    </Card>
    </Grid>
     ))}
    </Grid>
    </Box>
    </div>
  )
}

export default AdminView