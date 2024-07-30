import React, { useEffect, useState } from 'react'
import axiosInstance from '../axiosInterceptor'
import { AppBar, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography, styled, tableCellClasses } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }))
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }))



const UserView = () => {
    const navigate = useNavigate()
    const [data,setData] = useState([])

    useEffect(()=>{
        axiosInstance.get('https://employee-app-server-delta.vercel.app/user/get').then((res)=>{
          setData(res.data)
        })
},[])

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" color='success'>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Employee List
      </Typography>
      <Button color="inherit"  onClick={()=>{
      localStorage.removeItem('token')
      navigate('/')  }}>Logout</Button>
    </Toolbar>
  </AppBar>
</Box>

    <TableContainer component={Paper}>
  <Table sx={{ minWidth: 700 }} aria-label="customized table">
    <TableHead>
      <TableRow>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell align="center">Position</StyledTableCell>
        <StyledTableCell align="center">Location</StyledTableCell>
        <StyledTableCell align="center">Email</StyledTableCell>
        <StyledTableCell align="center">Phone</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row) => (
        <StyledTableRow key={row.name}>
          <StyledTableCell component="th" scope="row">
            {row.name}
          </StyledTableCell>
          <StyledTableCell align="center">{row.position}</StyledTableCell>
          <StyledTableCell align="center">{row.location}</StyledTableCell>
          <StyledTableCell align="center">{row.email}</StyledTableCell>
          <StyledTableCell align="center">{row.phone}</StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</div>
  )
}

export default UserView