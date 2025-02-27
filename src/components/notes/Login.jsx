import React from 'react'
import { Box, Button, HStack, Text } from '@chakra-ui/react'


import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotesList from './NotesList';
import { googleSigin, logout } from '@/redux/actions/actions';


const Login = () => {
  const user=useSelector((state)=>state.auth.user)
  console.log(user,"user details")
  const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleLogin=async()=>{
     dispatch(googleSigin()) ;
     navigate("/noteslist")
     
    }
  
    // const handleLogout=async()=>{
    //   dispatch(logout());
    //   navigate("/login")
      
    // }
    const userDetails=JSON.parse(localStorage.getItem("user"))||[];
    
    return (
      
      <>
      <HStack m={4}>
        <Box>
          {user &&  <Text>Welcome {user.displayName }</Text>}
         
        </Box>
        {user ? <Button bg={"blue"} 
  
  >Logout</Button>: <Button bg={"blue"}
  
  onClick={handleLogin}>Login with google</Button>}
     
      </HStack>
      </>
    )
}

export default Login
