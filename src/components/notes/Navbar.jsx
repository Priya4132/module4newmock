import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { Flex, Text } from '@chakra-ui/react';

const Navbar = () => {
    const user=useSelector((state)=>state.auth.user)

    const userDetails=JSON.parse(localStorage.getItem("user"));
  return (
    <>
  {user ? <Flex><Text>{userDetails.displayName}</Text>
  <Link to="/noteslist"> Notes</Link> </Flex>  :
   <Link to="/login"> Login</Link>}
  
   
   </>
  )
}

export default Navbar
