import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';


// import styled from '@mui/system';



// import { AddBorrower } from './AddBorrower';

// import { LoginForm } from '../sections/auth/login';


import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LoginPage from './LoginPage';
import { margin } from '@mui/system';
import { WrapText } from '@mui/icons-material';
import Footer from './Footer';
import Loantypes from './Loantypes';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

  const Typographyx = styled(Typography)(({ theme }) => ({
  // backgroundColor:"#00a635",
  color:"#242f3a",
  marginTop:30,
  padding:20


  }))
 
    const GridStyle = styled(Box)(({ theme }) => ({
      // padding:20,

      
      marginLeft:60,
      marginTop:10
    
    
      }))
    const BoxStyle = styled(Box)(({ theme }) => ({
      backgroundColor:"#2065d1",
      color:"#f9fafb",
      padding:60,
      margin:10,
      // height:200
    
    
      }))
      const Buttonright = styled(Button)(({ theme }) => ({
       position:'absolute',
       right:0,
       top:'20',
        // height:200
      
      
        }))
      

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    // alert('it worked')
    navigate('/login', { replace: true });
  
  }
  const handleLoan = () => {
    // alert('it worked')
    navigate('/LoanApplicant', { replace: true });
  
  }
  
  return (
<div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Loan Types
          </Typography> */}
          <Loantypes/>
          {/* <Buttonright color="inherit"  onClick={handleLoan}variant="h6" component="div" sx={{ flexGrow: 1 }}>Loan Applicant</Buttonright> */}
         
       
           </Toolbar>
      </AppBar>
          <Buttonright>
  
          <Button color="inherit"  onClick={handleLoan}variant="h6" component="div" sx={{ flexGrow: 1 }}>Loan Applicant</Button>
          <Button color="inherit"  onClick={handleClick} variant="h6" component="div" sx={{ flexGrow: 1 }}>Admin</Button>
  
          </Buttonright>
      <Container maxWidth="sm">
      <Typographyx variant="h6" component="div" sx={{ flexGrow: 1 }}>
      What is the Loan Amount you would like up to?
          </Typographyx>

   

      
        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={2}>
            
            <GridStyle item xs={6} spacing={2}>
              <BoxStyle bgColor='primary.light' p={2}>$1000</BoxStyle>
            </GridStyle>
            <GridStyle item xs={6} spacing={2}>
              <BoxStyle bgColor='primary.light' p={2}>$1000</BoxStyle>
            </GridStyle>
            <GridStyle item xs={6} spacing={2}>
              <BoxStyle bgColor='primary.light' p={2}>$1000</BoxStyle>
            </GridStyle>
            <GridStyle item xs={6} spacing={2}>
              <BoxStyle bgColor='primary.light' p={2}>$1000</BoxStyle>
            </GridStyle>
          </Grid>
      </Box>
      
      
      </Container>

          
    {/* <AddBorrower/> */}
    {/* <AddBorrower/> */}

    </Box>

   <Footer/>











    {/* <LoginPage/> */}

    </div>
  );
}
