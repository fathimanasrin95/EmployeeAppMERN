import { Box, Button, Grid, MenuItem, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const AdminLogin = () => {
    const navigate = useNavigate()

    const [form,setForm] = useState({
      username:'',
      password:''
    })
  
    function capValue(){
      axios.post('https://employee-app-server/admin/login', form).then((res)=>{
        alert(res.data.message)
        if(res.data.token){
        localStorage.setItem('token',res.data.token)
        navigate('/adminview')
      }
      })
  }



  return (
    <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 2, width: '50ch'},
           color: 'Grey',
           padding: '30px',
           border: 3 ,
           mx: 'auto', maxWidth:600,
           margin:'75px 400px ',
           alignContent:'center',
           backgroundColor:'ghostwhite',
           display: 'flex',
            flexDirection: 'column'
            
        }}
        >
        <h2 style={{textAlign:'center'}}>Admin Login</h2><hr />
    
        <TextField fullWidth id="username" label="Username" variant="outlined" 
        value={form.username} onChange={(e)=>{setForm({...form,username:e.target.value})}}/>
        <TextField id="password" type ="password" label="Password" variant="outlined" 
        value={form.password} onChange={(e)=>{setForm({...form,password:e.target.value})}}/>
     
        <Stack direction="row"  justifyContent="center"alignItems="center" spacing={2}>
        <Button variant="contained" onClick={capValue} color='success'>Submit</Button>
        <Button variant="contained" color='success'>Cancel</Button>
        <Link to={'/'}><Button variant="contained" color='success'>Home</Button></Link>
        </Stack>
        </Box>
        </Grid>
    </div>
  )
}

export default AdminLogin